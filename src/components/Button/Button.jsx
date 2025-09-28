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
  const variantClasses = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 active:ring-0 focus:bg-purple-800 focus:ring-1 focus:ring-purple-900 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed",
    secondary:
      "border border-purple-600 text-purple-700 bg-white hover:bg-purple-100 active:bg-purple-100 active:ring-0 focus:bg-white focus:ring-purple-800 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed disabled:text-white disabled:border disabled:border-gray-300",
    outlined:
      "border border-gray-300 bg-white text-gray-500 hover:bg-gray-300 active:bg-gray-300 active:ring-0 focus:bg-white focus:ring-1 focus:ring-gray-500 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed",
    gray: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-700 focus:ring-1 focus:ring-gray-800 cursor-pointer disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed",
  };

  const sizeClasses = {
    small: "w-30 h-10 px-4",
    medium: "w-70 h-14 py-4 px-2",
    large: "w-full h-14 py-4 px-2",
    compact: "h-9 py-4 px-2",
  };

  const icons = {
    add: (
      <img src="src/assets/icons/ic_add.svg" width="24" height="24" alt="" />
    ),
    addSm: (
      <img src="src/assets/icons/ic_add.svg" width="20" height="20" alt="" />
    ),
    arrowDown: (
      <img
        src="src/assets/icons/ic_arrow_down.svg"
        width="24"
        height="24"
        alt=""
      />
    ),
    arrowLeft: (
      <img
        src="src/assets/icons/ic_arrow_left.svg"
        width="16"
        height="16 "
        alt=""
      />
    ),
    arrowRight: (
      <img
        src="src/assets/icons/ic_arrow_right.svg"
        width="16"
        height="16"
        alt=""
      />
    ),
    check: (
      <img src="src/assets/icons/ic_check.svg" width="24" height="24" alt="" />
    ),
    deleted: (
      <img
        src="src/assets/icons/ic_deleted.svg"
        width="24"
        height="24"
        alt=""
      />
    ),
    edit: (
      <img src="src/assets/icons/ic_edit.svg" width="16" height="16" alt="" />
    ),
    plus: (
      <img src="src/assets/icons/ic_plus.svg" width="24" height="24" alt="" />
    ),
    share: (
      <img src="src/assets/icons/ic_share.svg" width="24" height="24" alt="" />
    ),
    shareSm: (
      <img src="src/assets/icons/ic_share.svg" width="20" height="20" alt="" />
    ),
  };

  const icon = iconName ? icons[iconName] : null;

  const shapeClasses = {
    circle: "w-14 h-14",
  };

  const buttonClasses = `
    cursor-pointer flex items-center justify-center gap-2 transition-colors
    ${variantClasses[variant]}
    ${shape === "circle" ? shapeClasses.circle : sizeClasses[size]}
    ${shape === "circle" ? "rounded-full" : "rounded-xl"}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
