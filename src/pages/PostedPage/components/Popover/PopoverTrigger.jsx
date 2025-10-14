import React, { useContext, useState, useEffect } from 'react';

import Button from '@/components/Button/Button';

import PopoverContext from './PopoverContext';

export const PopoverTrigger = ({ type }) => {
  const { toggle } = useContext(PopoverContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const paddingX = windowWidth > 768 ? 16 : 8;

  return (
    <>
      {type === 'emoji' && (
        <Button
          onClick={toggle}
          size="custom"
          paddingX={6}
          paddingY={6}
          variant="noLine"
          iconName="arrowDown"
        />
      )}
      {type === 'share' && (
        <Button
          onClick={toggle}
          size="custom"
          paddingX={paddingX}
          paddingY={6}
          variant="outlined"
          iconName="share"
        />
      )}
      {type === 'emojiPicker' && (
        <Button
          onClick={toggle}
          size="custom"
          paddingX={paddingX}
          paddingY={6}
          variant="outlined"
          iconName="add"
        >
          <span className="hidden md:inline">추가</span>
        </Button>
      )}
    </>
  );
};
