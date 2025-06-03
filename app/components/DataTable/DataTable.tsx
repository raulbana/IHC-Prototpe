/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import Button, { ButtonProps } from "../Button/Button";
import { CaretLeft, CaretRight } from "phosphor-react";
import { robotoFont } from "@/app/assets/fontsSetup";
import Input from "../Input/Input";
import useDataTable from "./useDataTable";

export interface DataTableProps {
  data: any[];
  columns: ColumnDef<any>[];
  controls?: ButtonProps[] | ((data: any) => ButtonProps[]);
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, controls }) => {
  const { currentData, handleSearch } = useDataTable({ data });
  const table = useReactTable({
    getRowId: (row) => row.id,
    data: currentData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className={`${robotoFont.className}`}>
      <div className="flex items-center justify-start mb-4">
        <div className="min-w-50">
          <Input
            type={"search"}
            placeholder="Pesquisar:"
            label={""}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
        <table className="w-full border-collapse bg-default-blue text-left text-sm">
          <thead className="bg-default-blue text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-3 font-medium">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={`hover:bg-blue-100 transition-colors even:bg-white odd:bg-blue-50 ${robotoFont.className} border-b border-gray-200`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                  {controls &&
                    (typeof controls === "function"
                      ? controls(currentData[row.index])
                      : controls
                    ).map((control, index) => (
                      <td
                        key={`controls-${control.text ?? index}`}
                        className="px-4 py-3"
                      >
                        <Button
                          {...control}
                          onClick={() => {
                            if (control.onClick) {
                              control.onClick(currentData[row.index]);
                            }
                          }}
                        >
                          {control.children}
                        </Button>
                      </td>
                    ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (controls ? 1 : 0)}
                  className="text-center py-6 text-gray-500 bg-blue-50"
                >
                  Nenhum dado disponível.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end text-default-blue gap-4 mt-6">
        <Button
          type={"SECONDARY"}
          size="SMALL"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <CaretLeft aria-label="Página anterior" />
        </Button>
        <span className={`text-sm font-medium`}>
          Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </span>
        <Button
          type={"SECONDARY"}
          size="SMALL"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <CaretRight aria-label="Próxima página" />
        </Button>
      </div>
    </div>
  );
};

export default DataTable;
