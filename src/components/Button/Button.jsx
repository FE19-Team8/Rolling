import clsx from 'clsx';

import { VARIANT_CLASSES, SIZE_CLASSES, SHAPE_CLASSES, ICONS } from './button.constants';

const Button = ({
  variant = 'primary',
  size = 'small',
  disabled = false,
  children,
  onClick,
  type = 'button',
  shape,
  iconName,
  paddingX,
  paddingY,
  className,
}) => {
  const icon = iconName ? ICONS[iconName] : null;

  const inlineStyle =
    size === 'custom' && paddingX && paddingY
      ? {
          paddingLeft: `${paddingX}px`,
          paddingRight: `${paddingX}px`,
          paddingTop: `${paddingY}px`,
          paddingBottom: `${paddingY}px`,
        }
      : {};

  const buttonClasses = clsx(
    'cursor-pointer flex items-center justify-center gap-[10px] transition-colors',
    VARIANT_CLASSES[variant],
    shape === 'circle' ? SHAPE_CLASSES.circle : SIZE_CLASSES[size],
    shape === 'circle' ? 'rounded-full' : 'rounded-xl',
    className
  );

  return (
    <button
      type={type}
      disabled={disabled}
      style={inlineStyle}
      onClick={onClick}
      className={buttonClasses}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
