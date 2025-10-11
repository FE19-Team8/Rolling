import EmojiBadge from '@/components/EmojiBadge/EmojiBadge';
import { PopoverContent } from './PopoverContent';

// 데이터 연결 후 삭제 예정
const reactions = [
  { id: 24, recipientId: 2, emoji: '😀', count: 15 },
  { id: 25, recipientId: 3, emoji: '🤣', count: 9 },
  { id: 26, recipientId: 4, emoji: '😍', count: 24 },
  { id: 27, recipientId: 5, emoji: '😭', count: 7 },
  { id: 28, recipientId: 6, emoji: '😎', count: 12 },
  { id: 29, recipientId: 7, emoji: '😡', count: 3 },
  { id: 30, recipientId: 8, emoji: '🤔', count: 5 },
  { id: 31, recipientId: 9, emoji: '😴', count: 2 },
  { id: 32, recipientId: 10, emoji: '😇', count: 10 },
];

export const EmojiContent = ({ emojis = reactions }) => {
  // 모바일/태블릿/데스크탑 (모바일은 현재 EmojiBadge 크기가 달라 찌그러짐)
  const gridStyles = `
    grid grid-cols-3 w-[171px] h-[66px] gap-[10px] m-[24px]
    sm:w-[200px] sm:h-[86px]
    md:grid-cols-4 md:w-[264px]
  `;

  return (
    <PopoverContent>
      <div className={gridStyles}>
        {emojis.slice(0, 8).map((emoji, index) => {
          const hideOnMobile = index >= 6 && 'hidden md:flex';
          return (
            <span key={index} className={`flex justify-center ${hideOnMobile}`}>
              <EmojiBadge emoji={emoji.emoji} count={emoji.count} />
            </span>
          );
        })}
      </div>
    </PopoverContent>
  );
};
