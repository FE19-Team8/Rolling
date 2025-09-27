const Profile = ({
  src,
  alt = "프로필 이미지",
  size = "md",
  selected = false,
  bordered = false,
  onClick,
}) => {
  const sizeClasses = {
    sm: "w-7 h-7", // 28px
    md: "w-14 h-14", // 56px
    lg: "w-20 h-20", // 80px
  };

  const isDefault = !src;

  const baseClasses = [
    sizeClasses[size],
    "bg-gray-300",
    "rounded-full",
    "transition-all",
  ];

  if (isDefault) {
    baseClasses.push("p-4");
  } else {
    baseClasses.push("object-cover");
  }

  if (selected) {
    baseClasses.push("ring-2", "ring-purple-600");
  } else if (bordered) {
    baseClasses.push("border-[1.4px]", "border-white");
  }

  if (onClick) {
    baseClasses.push("cursor-pointer", "hover:opacity-80");
  }

  return (
    <img
      src={src || "src/asset/icons/ic_default_profile.svg"}
      alt={alt}
      onClick={onClick}
      className={baseClasses.join(" ")}
    />
  );
};

export default Profile;
