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
<<<<<<< HEAD
        <div className="hidden lg:inline absolute top-[115px] left-[-20px] z-10">
          <Button
            variant="translucent"
            shape="circle"
            iconName="arrowLeft"
            onClick={handlePrev}
          />
        </div>
      )}
      {currentIndex + 4 < cards.length && (
        <div className="hidden lg:inline absolute top-[115px] right-[-20px] z-10">
          <Button
            variant="translucent"
            shape="circle"
            iconName="arrowRight"
            onClick={handleNext}
          />
=======
        <div className="absolute top-[100px] left-[-25px] z-10">
          <Button variant="translucent" shape="circle" iconName="arrowLeft" onClick={handlePrev} />
        </div>
      )}
      {currentIndex + 4 < cards.length && (
        <div className="absolute top-[100px] right-[-25px] z-10">
          <Button variant="translucent" shape="circle" iconName="arrowRight" onClick={handleNext} />
>>>>>>> 4f8c98a (chore: 머지 컨플릭트 해결 prettier (#134))
        </div>
      )}
      {/* card rendering */}
      <div className="overflow-hidden">
        <ul
<<<<<<< HEAD
          className="flex gap-[20px] transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${currentIndex * 295}px)` }}
=======
          className="flex gap-[20px] transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 310}px)` }}
>>>>>>> 4f8c98a (chore: 머지 컨플릭트 해결 prettier (#134))
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
