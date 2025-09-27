const Input = ({
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  errorMessage,
  type = "text",
}) => {
  const baseClasses = [
    "w-full",
    "h-[50px]",
    "pt-3",
    "pr-4",
    "pb-3",
    "pl-4",
    "border",
    "rounded-lg",
    "outline-none",
    "transition-colors",
    "text-base",
  ];

  if (error) {
    baseClasses.push("border-red-500", "bg-red-50");
  } else if (disabled) {
    baseClasses.push(
      "border-gray-300",
      "bg-gray-100",
      "text-gray-400",
      "cursor-not-allowed"
    );
  } else {
    baseClasses.push(
      "border-gray-300",
      "bg-white",
      "hover:border-gray-500",
      "focus:border-gray-700",
      "focus:ring-1",
      "focus:ring-gray-700"
    );
  }

  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={baseClasses.join(" ")}
      />
      {error && errorMessage && (
        <p className="mt-1 text-error px-1 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
