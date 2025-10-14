import EmojiBadge from '@/components/EmojiBadge/EmojiBadge';

import { PopoverContent } from './PopoverContent';

export const EmojiContent = ({ reactions, onEmojiClick }) => {
  // 모바일/태블릿/데스크탑 (모바일은 현재 EmojiBadge 크기가 달라 찌그러짐)
  const gridStyles = `
    grid grid-cols-[min-content_min-content] gap-2 m-4
    md:grid-cols-[min-content_min-content_min-content_min-content]
    max-h-[200px] overflow-y-auto custom-scrollbar
  `;

  return (
    <PopoverContent>
      <div className={gridStyles}>
        {reactions.map((reaction, index) => {
          return (
            <span key={index} className="flex justify-center">
              <EmojiBadge
                emoji={reaction.emoji}
                count={reaction.count}
                onEmojiClick={onEmojiClick}
              />
            </span>
          );
        })}
      </div>
    </PopoverContent>
  );
};
