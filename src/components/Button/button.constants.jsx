import AddIcon from '@/assets/icons/ic_add.svg?react';
import ArrowDownIcon from '@/assets/icons/ic_arrow_down.svg?react';
import ArrowLeftIcon from '@/assets/icons/ic_arrow_left.svg?react';
import ArrowRightIcon from '@/assets/icons/ic_arrow_right.svg?react';
import CheckIcon from '@/assets/icons/ic_check.svg?react';
import DeleteIcon from '@/assets/icons/ic_delete.svg?react';
import EditIcon from '@/assets/icons/ic_edit.svg?react';
import PlusIcon from '@/assets/icons/ic_plus.svg?react';
import ShareIcon from '@/assets/icons/ic_share.svg?react';

export const VARIANT_CLASSES = {
  primary:
    'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 focus:bg-purple-800 focus:border-purple-900 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed ',

  secondary:
    'border border-purple-600 text-purple-700 bg-white hover:bg-purple-100 active:bg-purple-100 focus:bg-white focus:border-purple-800 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed disabled:border disabled:border-gray-300',

  outlined:
    'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 active:bg-gray-100 active:border-gray-300 focus:bg-white focus:border-gray-900 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',

  gray: 'bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-700 focus:border-gray-800 cursor-pointer disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',

  translucent: `
    border border-gray250 bg-white text-gray-900 opacity-90
    hover:opacity-100 hover:border-gray300 hover:bg-gray300
    active:opacity-100 active:border-gray300 active:bg-gray200
    disabled: bg-gray-300 disabled:text-white disabled:cursor-not-allowed
    transition-all duration-300 ease-in-out
  `,

  noLine: `
    bg-white hover:bg-gray-200 focus:bg-gray-300 border-none

  `,
};

export const SIZE_CLASSES = {
  small: 'w-[120px] px-4 py-[7px] text-[16px] font-normal leading-[26px]',
  medium: 'w-[280px] py-[14px] px-6 text-[18px] font-bold leading-7 ',
  large: 'w-full py-[14px] px-6  text-[18px] leading-[28px] font-bold',
  custom: 'text-[14px] leading-6 font-bold',
};

export const SHAPE_CLASSES = {
  circle: 'w-10 h-10',
};

export const ICONS = {
  add: <AddIcon className="w-6 h-6" />,
  addSm: <AddIcon className="w-5 h-5" />,
  arrowDown: <ArrowDownIcon className="w-6 h-6" />,
  arrowLeft: <ArrowLeftIcon className="w-4 h-4" />,
  arrowRight: <ArrowRightIcon className="w-4 h-4" />,
  check: <CheckIcon className="w-6 h-6" />,
  delete: <DeleteIcon className="w-6 h-6" />,
  edit: <EditIcon className="w-4 h-4" />,
  plus: <PlusIcon className="w-6 h-6" />,
  share: <ShareIcon className="w-6 h-6" />,
  shareSm: <ShareIcon className="w-5 h-5" />,
};
