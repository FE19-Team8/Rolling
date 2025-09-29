import clsx from "clsx";

const BASE_CLASSES =
  "w-full h-[50px] rounded-lg border outline-none px-4 py-3  transition-colors text-base placeholder-gray-500 text-gray-900 ";

const VARIANT_CLASSES = {
  default:
    "border-gray-300 bg-white hover:border-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700",
  error: "border-red-500",
  disabled: "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed",
};
const Input = ({
  placeholder,
  value,
  type = "text",
  variant = "default",
  errorMessage,
  ...props
}) => {
  const inputClasses = clsx(
    BASE_CLASSES,
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.default
  );

  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={inputClasses}
        {...props}
      />
      {variant === "error" && errorMessage && (
        <p className="mt-2 text-error px-1 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
