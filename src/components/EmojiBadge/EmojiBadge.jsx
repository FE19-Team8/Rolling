import { useState } from 'react';
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
  'cursor-pointer',
  'relative',
  'group',
];

const TOOLTIP_CLASSES = `
  absolute bottom-2 right-2 whitespace-nowrap rounded-full 
  text-sm px-1 py-0 opacity-0 bg-gray450 text-white
  group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50
`;

const EmojiBadge = ({ emoji, count, onEmojiClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const displayCount = count > 99 ? '99+' : count;
  const sizes =
    count > 99
      ? 'px-2 py-1 text-3 md:px-3 md:py-2 text-[14px]'
      : 'px-2 py-1 text-[14px] md:px-3 md:py-2 text-[16px]';

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);

    if (onEmojiClick) {
      onEmojiClick(emoji);
    }
  };

  if (count > 99999) count = 99999;

  return (
    <div className={clsx(BASE_CLASSES, sizes)} onClick={handleClick}>
      <span
        className={clsx('transition-transform duration-200 ease-out', isAnimating && 'scale-125')}
      >
        {emoji}
      </span>
      <span>{displayCount}</span>

      {count > 99 && <span className={TOOLTIP_CLASSES}>{count}</span>}
    </div>
  );
};

export default EmojiBadge;
