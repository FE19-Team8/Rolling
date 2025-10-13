import { useState } from 'react';

import Button from '@/components/Button/Button';
import RollingPaperCard from '@/pages/ListPage/components/Card/Card';

const CardList = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex + 4 < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative w-290">
      {/* button rendering */}
      {currentIndex > 0 && (
        <div className="absolute top-[115px] left-[-20px] z-10 hidden lg:inline">
          <Button variant="translucent" shape="circle" iconName="arrowLeft" onClick={handlePrev} />
        </div>
      )}
      {currentIndex + 4 < cards.length && (
        <div className="absolute top-[115px] right-[-20px] z-10 hidden lg:inline">
          <Button variant="translucent" shape="circle" iconName="arrowRight" onClick={handleNext} />
        </div>
      )}
      {/* card rendering */}
      <div className="overflow-hidden">
        <ul
          className="flex gap-[20px] transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 295}px)` }}
        >
          {cards.map((card, i) => (
            <li key={i}>
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
