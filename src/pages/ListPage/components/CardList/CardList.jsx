import { useState } from 'react';

import RollingPaperCard from '../RollingPaperCard/RollingPaperCard';
import Button from '../../../../components/Button/Button';

const CardList = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    console.log({ cards });
    if (currentIndex + 4 < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative w-290">
      {/* button rendering */}
      {currentIndex > 0 && (
        <div className="absolute top-[100px] left-[-25px] z-10">
          <Button
            variant="translucent"
            shape="circle"
            iconName="arrowLeft"
            onClick={handlePrev}
          />
        </div>
      )}
      {currentIndex + 4 < cards.length && (
        <div className="absolute top-[100px] right-[-25px] z-10">
          <Button
            variant="translucent"
            shape="circle"
            iconName="arrowRight"
            onClick={handleNext}
          />
        </div>
      )}
      {/* card rendering */}
      <div className=" overflow-hidden">
        <ul
          className="flex gap-[20px] transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${currentIndex * 310}px)` }}
        >
          {cards.map((card, i) => (
            <li key={i}>
              <RollingPaperCard
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
