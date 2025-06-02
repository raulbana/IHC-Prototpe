"use client";

import Link from "next/link";
import { CaretRight } from "phosphor-react";
import useBreadcrumb from "./useBreadcrumb";

export interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = "" }) => {
  const { breadcrumbs, isPageAvailable } = useBreadcrumb();

  return (
    <nav
      className={`flex items-center text-sm text-gray-500 space-x-1 ${className}`}
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((crumb, idx) => {
        const canClick = isPageAvailable(crumb.href);

        let crumbContent;
        if (idx < breadcrumbs.length - 1) {
          if (canClick) {
            crumbContent = (
              <Link
                href={crumb.href}
                className="hover:underline text-default-blue"
              >
                {crumb.label}
              </Link>
            );
          } else {
            crumbContent = (
              <span
                className="text-gray-400 cursor-not-allowed"
                title="Página não disponível"
              >
                {crumb.label}
              </span>
            );
          }
        } else {
          crumbContent = (
            <span className="font-bold text-default-blue">{crumb.label}</span>
          );
        }

        return (
          <span key={crumb.href} className="flex items-center">
            {idx > 0 && <CaretRight size={16} className="mx-1 text-gray-400" />}
            {crumbContent}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
