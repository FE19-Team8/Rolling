import React, { useContext } from 'react';
import PopoverContext from './PopoverContext';
import Button from '@/components/Button/Button';

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
    </>
  );
};
