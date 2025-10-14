import EmojiBadge from '@/components/EmojiBadge/EmojiBadge';

import { PopoverContent } from './PopoverContent';

export const EmojiContent = ({ reactions }) => {
  // 모바일/태블릿/데스크탑 (모바일은 현재 EmojiBadge 크기가 달라 찌그러짐)
  const gridStyles = `
    grid grid-cols-3 w-[171px] h-[66px] gap-[10px] m-[24px]
    sm:w-[200px] sm:h-[86px]
    md:grid-cols-4 md:w-[264px]
  `;

  return (
    <PopoverContent>
      <div className={gridStyles}>
        {reactions.slice(0, 8).map((reaction, index) => {
          const hideOnMobile = index >= 6 && 'hidden md:flex';
          return (
            <span key={index} className={`flex justify-center ${hideOnMobile}`}>
              <EmojiBadge emoji={reaction.emoji} count={reaction.count} />
            </span>
          );
        })}
      </div>
    </PopoverContent>
  );
};
