import AddIcon from "../../assets/icons/ic_add.svg?react";
import ArrowDownIcon from "../../assets/icons/ic_arrow_down.svg?react";
import ArrowLeftIcon from "../../assets/icons/ic_arrow_left.svg?react";
import ArrowRightIcon from "../../assets/icons/ic_arrow_right.svg?react";
import CheckIcon from "../../assets/icons/ic_check.svg?react";
import DeleteIcon from "../../assets/icons/ic_delete.svg?react";
import EditIcon from "../../assets/icons/ic_edit.svg?react";
import PlusIcon from "../../assets/icons/ic_plus.svg?react";
import ShareIcon from "../../assets/icons/ic_share.svg?react";

export const VARIANT_CLASSES = {
  primary:
    "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 active:ring-0 focus:bg-purple-800 focus:ring-1 focus:ring-purple-900 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed",
  secondary:
    "border border-purple-600 text-purple-700 bg-white hover:bg-purple-100 active:bg-purple-100 active:ring-0 focus:bg-white focus:ring-purple-800 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed disabled:text-white disabled:border disabled:border-gray-300",
  outlined:
    "border border-gray-300 bg-white text-gray-500 hover:bg-gray-300 active:bg-gray-300 active:ring-0 focus:bg-white focus:ring-1 focus:ring-gray-500 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed",
  gray: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-700 focus:ring-1 focus:ring-gray-800 cursor-pointer disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed",
};

export const SIZE_CLASSES = {
  small: "w-32 h-10 px-4",
  medium: "w-72 h-14 py-4 px-2",
  large: "w-full h-14 py-4 px-2",
  compact: "h-9 py-4 px-2",
};

export const SHAPE_CLASSES = {
  circle: "w-14 h-14",
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
