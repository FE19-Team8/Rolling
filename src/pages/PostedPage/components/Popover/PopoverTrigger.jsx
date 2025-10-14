import React, { useContext } from 'react';

import Button from '@/components/Button/Button';

import PopoverContext from './PopoverContext';

export const PopoverTrigger = ({ type }) => {
  const { toggle } = useContext(PopoverContext);

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
          paddingX={16}
          paddingY={6}
          variant="outlined"
          iconName="share"
        />
      )}
      {type === 'emojiPicker' && (
        <Button
          onClick={toggle}
          size="custom"
          paddingX={16}
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
