import clsx from 'clsx';

const VARIANT_CLASSES = {
  base: 'relative overflow-hidden bg-gray-200 animate-pulse',
  purple: 'relative overflow-hidden bg-purple-300 animate-pulse',
};

const SHAPE_CLASSES = {
  rect: 'rounded-lg',
  circle: 'rounded-full',
  text: 'rounded-md',
};

const Skeleton = ({
  variant = 'base',
  shape = 'rect',
  width,
  height,
  className,
}) => {
  const shimmerClass =
    'absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent';

  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;
  return (
    <>
      <div
        className={clsx(
          VARIANT_CLASSES[variant],
          SHAPE_CLASSES[shape],
          className,
        )}
        style={style}
        role="presentation"
        aria-hidden="true"
      >
        <div className={shimmerClass} />
      </div>
    </>
  );
};

export default Skeleton;
