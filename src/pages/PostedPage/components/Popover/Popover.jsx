import React, { useState, useEffect, useRef } from 'react';
import PopoverContext from './PopoverContext';

export const Popover = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  // 외부 클릭, ESC 키 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleEscapekey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapekey);
    }
  }, [isOpen]);

  const value = { isOpen, open, close, toggle };

  return (
    <PopoverContext.Provider value={value}>
      <div ref={ref} className="relative inline-block">
        {children}
      </div>
    </PopoverContext.Provider>
  );
};
