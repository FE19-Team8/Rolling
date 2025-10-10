import React, { useContext } from 'react';
import PopoverContext from '../PopoverContext';

export const PopoverContent = ({ children }) => {
  const { isOpen } = useContext(PopoverContext);
  if (!isOpen) return null;

  return (
    <div className="absolute mt-2 right-0 rounded-lg border border-gray350 bg-white shadow-[0px_2px_12px_0px_#00000014]">
      {children}
    </div>
  );
};
