import { ButtonSize, ButtonType } from "./Button";

export const useButton = (type: ButtonType, size: ButtonSize) => {
  const getButtonColor = () => {
    switch (type) {
      case "PRIMARY":
        return "bg-indigo-600 hover:bg-indigo-500 text-white border-0";
      case "SECONDARY":
        return "bg-transparent border-2 border-default-blue text-default-blue hover:bg-default-blue hover:text-white";
      case "DANGER":
        return "bg-red-800 hover:bg-red-700 text-white border-0";
      case "SUCCESS":
        return "bg-emerald-800 hover:bg-emerald-900 text-white border-0";
      case "WARNING":
        return "bg-yellow-600 hover:bg-yellow-700 text-white border-0";
      case "TERTIARY":
        return "bg-slate-600 hover:bg-slate-500 text-white border-0";
      case "QUATERNARY":
        return "bg-slate-800 hover:bg-slate-700 text-white border-0";
      case "DISABLED":
        return "bg-slate-600 text-slate-400 cursor-not-allowed border-0";
      default:
        return "bg-indigo-600 hover:bg-indigo-500 text-white border-0";
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case "SMALL":
        return "p-2";
      case "MEDIUM":
        return "p-3";
      case "LARGE":
        return "p-4";
    }
  };

  return {
    getButtonColor,
    getButtonSize,
  };
};
