import { useMemo, useState } from 'react';
import EmojiBadge from '../EmojiBadge/EmojiBadge';

//예시 뱃지리스트 리스트를 사용하시는 페이지에서 쓰세요
// const mockBadges: Badge[] = [
//   { emoji: "👍", count: 2 },
//   { emoji: "😍", count: 1 },
//   // ...
// ];

const BadgeList = ({ badges = [], showMore = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxVisible = 3;
  const expandedVisible = 8;

  const sortedBadges = useMemo(() => {
    return [...badges].sort((a, b) => b.count - a.count);
  }, [badges]);

  const visibleBadges = isExpanded
    ? sortedBadges.slice(0, expandedVisible)
    : sortedBadges.slice(0, maxVisible);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {visibleBadges.map((badge, index) => (
          <div key={index} className="basis-1/5">
            <EmojiBadge emoji={badge.emoji} count={badge.count} />
          </div>
        ))}
      </div>

      {/* showMore가 true일때 나오는 더보기, 접기 버튼입니다. */}
      {showMore && sortedBadges.length > maxVisible && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-blue-600 underline"
        >
          {isExpanded ? '접기 ▲' : '더보기 ▼'}
        </button>
      )}
    </>
  );
};

export default BadgeList;
