import React from "react";
import { twMerge } from "tailwind-merge";
import icons, { type IconName } from "./icons";

type ButtonTheme = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonRound = "sm" | "md" | "lg" | "xl";

const themeStyles: Record<ButtonTheme, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400",
  outline:
    "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 active:bg-gray-200",
  ghost: "bg-transparent text-gray-800 hover:bg-gray-100 active:bg-gray-200",
  danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
};

const roundTheme: Record<ButtonRound, string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
};

type Buttonprops = {
  text: string;
  onClick: () => void;
  className?: string;
  theme?: ButtonTheme;
  round?: ButtonRound;
  icon?: IconName | React.ReactNode;
  iconColor?: string;
};

const Button = ({
  text,
  onClick,
  className,
  theme,
  round,
  icon,
  iconColor,
}: Buttonprops) => {
  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") return icons[icon] ?? null;
    return icon;
  };

  return (
    <div className="flex flex-row justify-center item-center w-full">
      <button
        className={twMerge(
          "w-full mt-10 flex items-center justify-center gap-2 p-2 transition-colors",
          theme ? themeStyles[theme] : "",
          round ? roundTheme[round] : "",
          className,
        )}
        onClick={onClick}
      >
        {renderIcon() && (
          <span className="flex items-center" style={{ color: iconColor }}>
            {renderIcon()}
          </span>
        )}
        {text}
      </button>
    </div>
  );
};

export default Button;
