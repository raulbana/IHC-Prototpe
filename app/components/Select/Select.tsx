"use client";

import React from "react";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectError {
  hasError: boolean;
  message: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: SelectError[];
  extraClasses?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  placeholder,
  error = [],
  extraClasses = "",
  ...rest
}) => {
  const hasError = error?.some((err) => err.hasError);

  return (
    <div className="flex flex-1 flex-col gap-2">
      {label && (
        <label className={`text-sm ${hasError ? "text-red-500" : "text-slate-700"}`}>
          {label}
        </label>
      )}
      <select
        className={`w-full bg-white text-sm border-2 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none ${
          hasError
            ? "border-red-700 focus:border-red-500 hover:border-red-900"
            : "border-gray-300 focus:border-blue-500 hover:border-gray-400"
        } shadow-sm focus:shadow ${extraClasses} ${
          rest.disabled ? "opacity-50 cursor-not-allowed bg-gray-200" : ""
        }`}
        {...rest}
      >
        {placeholder && (
          <option value="">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="min-h-4 text-sm mt-1">
        {error
          ?.filter((err) => err.hasError)
          .map((err, index) => (
            <li
              key={`${err.message}-${index}`}
              className="text-xs ml-4 text-red-500"
            >
              {err.message}
            </li>
          ))}
      </div>
    </div>
  );
};

export default Select;