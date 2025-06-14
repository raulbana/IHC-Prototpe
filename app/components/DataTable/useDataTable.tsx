import { useCallback, useEffect, useState } from "react";

interface UseDataTableProps<T> {
  data: T[];
}

const useDataTable = <T extends object>({
  data: usedData,
}: UseDataTableProps<T>) => {
  const [filteredData, setFilteredData] = useState<T[]>(usedData || []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filterData = useCallback(() => {
    if (!searchTerm) {
      return usedData || [];
    }

    if (!usedData || !Array.isArray(usedData)) {
      return [];
    }

    const searchTermLower = searchTerm.toLowerCase().trim();

    const searchInObject = (obj: Record<string, unknown>): boolean => {
      for (const key in obj) {
        const value = obj[key];

        if (key.startsWith("_") || typeof value === "function") {
          continue;
        }

        if (value === null || value === undefined) {
          continue;
        }

        if (typeof value === "object") {
          if (searchInObject(value as Record<string, unknown>)) {
            return true;
          }
          continue;
        }

        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
          const valueStr = String(value).toLowerCase();
          if (valueStr.includes(searchTermLower)) {
            return true;
          }
        }
      }
      return false;
    };

    return usedData.filter((item) => {
      if (!item) return false;
      return searchInObject(item as Record<string, unknown>);
    });
  }, [searchTerm, usedData]);

  useEffect(() => {
    const result = filterData();
    setFilteredData(result);
  }, [searchTerm, filterData]);

  useEffect(() => {
    const result = searchTerm ? filterData() : usedData || [];
    setFilteredData(result);
  }, [usedData, filterData, searchTerm]);

  return {
    currentData: filteredData,
    handleSearch,
    searchTerm,
  };
};

export default useDataTable;
