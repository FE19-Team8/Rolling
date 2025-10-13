import clsx from 'clsx';

const BASE_CLASSES =
  'w-full h-[50px] rounded-lg border outline-none px-4 py-3  transition-colors text-base placeholder-gray-500 text-gray-900 ';

const STATE_CLASSES = {
  default: 'border-gray-300 hover:border-gray-500 focus:border-gray-700',
  error: 'border-error hover:border-error focus:border-error',
  disabled: 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed',
};
const Input = ({
  placeholder,
  value,
  type = 'text',
  error = false,
  errorMessage,
  disabled = false,
  className,
  ...props
}) => {
  const inputClasses = clsx(
    BASE_CLASSES,
    !error && !disabled && STATE_CLASSES.default,
    error && STATE_CLASSES.error,
    disabled && STATE_CLASSES.disabled,
    className
  );

  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        aria-invalid={error}
        className={inputClasses}
        {...props}
      />
      {error && errorMessage && <p className="text-error mt-2 px-1 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default Input;
