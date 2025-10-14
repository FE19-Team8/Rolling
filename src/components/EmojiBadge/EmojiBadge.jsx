import clsx from 'clsx';

const BASE_CLASSES = [
  'flex',
  'items-center',
  'justify-center',
  'w-fit',
  'h-fit',
  'py-2',
  'px-3',
  'rounded-full',
  'bg-black/[.54]',
  'text-white',
  'leading-5',
  'font-normal',
  'gap-1',
];

const EmojiBadge = ({ emoji, count }) => {
  const displayCount = count > 99 ? '99+' : count;
  const sizes =
    count > 99
      ? 'px-2 py-1 text-3 md:px-3 md:py-2 text-[14px]'
      : 'px-2 py-1 text-[14px] md:px-3 md:py-2 text-[16px]';

  return (
    <div className={clsx(BASE_CLASSES, sizes)}>
      <span>{emoji}</span>
      <span>{displayCount}</span>
    </div>
  );
};

export default EmojiBadge;
