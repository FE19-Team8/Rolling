import clsx from 'clsx';

const Divider = ({ orientation = 'horizontal', className }) => {
  const isVertical = orientation === 'vertical';
  const classes = clsx(
    className,
    isVertical ? 'w-px h-[80%] bg-gray200' : 'border-0 h-px w-full bg-gray200'
  );

  return <hr role="separator" aria-orientation={orientation} className={classes} />;
};

export default Divider;
