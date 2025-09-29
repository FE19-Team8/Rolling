import clsx from "clsx";

import {
  VARIANT_CLASSES,
  SIZE_CLASSES,
  SHAPE_CLASSES,
  ICONS,
} from "./button.constants";

const Button = ({
  variant = "primary",
  size = "small",
  disabled = false,
  children,
  onClick,
  type = "button",
  shape,
  iconName,
}) => {
  const icon = iconName ? ICONS[iconName] : null;

  const buttonClasses = clsx(
    "cursor-pointer flex items-center justify-center gap-2 transition-colors",
    VARIANT_CLASSES[variant],
    shape === "circle" ? SHAPE_CLASSES.circle : SIZE_CLASSES[size],
    shape === "circle" ? "rounded-full" : "rounded-xl"
  );

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
