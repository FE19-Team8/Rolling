import React from 'react';
import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import DownArrowIcon from '@/assets/icons/ic_arrow_down.svg?react';
import clsx from 'clsx';

const BASE_BUTTON_STYLE =
  'flex items-center justify-between w-[320px] h-[50px] px-4 cursor-pointer transition-all';
const BUTTON_DESIGN = 'border border-gray-300 rounded-lg text-gray-800';
const BUTTON_EFFECT = 'ring-2 ring-gray-500 outline-none';

const DropDown = forwardRef(({ items }, propRef) => {
  const [selected, setSelected] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useImperativeHandle(propRef, () => ({ getValue: () => selected }));

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        id="dropdownButton"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          BASE_BUTTON_STYLE,
          BUTTON_DESIGN,
          isOpen && BUTTON_EFFECT,
        )}
      >
        <span>{selected}</span>
        <DownArrowIcon
          className={clsx('transition-transform', isOpen && 'rotate-180')}
        />
      </button>
      {isOpen && (
        <ul
          aria-labelledby="dropdownButton"
          role="listbox"
          className="absolute left-0 mt-2 py-[10px] border border-gray-300 rounded-[8px] shadow-lg z-20"
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              role="option"
              aria-selected={item === selected}
              className={clsx(
                BASE_BUTTON_STYLE,
                selected === item && 'bg-gray-200',
                'hover:bg-gray-100',
              )}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default DropDown;
