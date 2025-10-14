import { useState, useEffect } from 'react';

import Button from '@/components/Button/Button';
import RollingPaperCard from '@/pages/ListPage/components/Card/Card';

const CARD_WIDTH = 275;
const GAP = 20;

const CardList = ({ cards }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 화면별 출력 카드 개수
  const getVisibleCount = () => {
    if (windowWidth >= 1024) return 4; // 데스크탑
    if (windowWidth >= 768) return 3; // 태블릿
    return 2; // 모바일
  };

  const visibleCount = getVisibleCount();

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex + visibleCount < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative max-w-290">
      {/* button rendering */}
      {currentIndex > 0 && (
        <div className="absolute top-[115px] left-[-20px] z-10 hidden lg:inline">
          <Button variant="translucent" shape="circle" iconName="arrowLeft" onClick={handlePrev} />
        </div>
      )}
      {currentIndex + visibleCount < cards.length && (
        <div className="absolute top-[115px] right-[-20px] z-10 hidden lg:inline">
          <Button variant="translucent" shape="circle" iconName="arrowRight" onClick={handleNext} />
        </div>
      )}
      {/* card rendering */}
      <div className="no-scrollbar relative w-full overflow-x-auto">
        <ul
          className="flex gap-[20px] transition-transform duration-300 ease-in-out"
          style={{
            transform:
              windowWidth >= 1024 ? `translateX(-${currentIndex * (CARD_WIDTH + GAP)}px)` : 'none',
          }}
        >
          {cards.map((card, i) => (
            <li key={i} className="flex-shrink-0">
              <RollingPaperCard
                id={card.id}
                name={card.name}
                profiles={card.profiles}
                messageCount={card.messageCount}
                topReactions={card.topReactions}
                backgroundColor={card.backgroundColor}
                backgroundImageURL={card.backgroundImageURL}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
