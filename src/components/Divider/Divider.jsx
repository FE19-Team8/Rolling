const Divider = ({ orientation = 'horizontal' }) => {
  const isVertical = orientation === 'vertical';

  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={
        isVertical
          ? 'border-0 w-px h-full bg-gray200'
          : 'border-0 h-px w-full bg-gray200'
      }
    />
  );
};

export default Divider;
