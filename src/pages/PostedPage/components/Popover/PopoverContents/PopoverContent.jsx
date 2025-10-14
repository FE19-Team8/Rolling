import React, { useContext } from 'react';

import PopoverContext from '../PopoverContext';

export const PopoverContent = ({ children }) => {
  const { isOpen } = useContext(PopoverContext);
  if (!isOpen) return null;

  return (
    <div className="border-gray350 absolute right-0 mt-2 rounded-lg border bg-white shadow-[0px_2px_12px_0px_#00000014]">
      {children}
    </div>
  );
};
