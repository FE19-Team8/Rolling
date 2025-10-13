import AlignLeftIcon from '@/assets/icons/ic_align_left.svg?react';
import AlignRightIcon from '@/assets/icons/ic_align_right.svg?react';
import AlignCenterIcon from '@/assets/icons/ic_align_center.svg?react';
import ListUlIcon from '@/assets/icons/ic_ul.svg?react';
import ListOlIcon from '@/assets/icons/ic_ol.svg?react';

export const TEXT_STYLE_BUTTONS = [
  {
    title: 'Bold',
    command: (editor) => editor.chain().focus().toggleBold().run(),
    isActiveCheck: 'bold',
    content: <span className="font-bold">B</span>,
  },
  {
    title: 'Italic',
    command: (editor) => editor.chain().focus().toggleItalic().run(),
    isActiveCheck: 'italic',
    content: <span className="font-bold italic">I</span>,
  },
  {
    title: 'Underline',
    command: (editor) => editor.chain().focus().toggleUnderline().run(),
    isActiveCheck: 'underline',
    content: <span className="font-bold underline">U</span>,
  },
];

export const TEXT_ALIGN_BUTTONS = [
  {
    title: '중앙 정렬',
    command: (editor) => editor.chain().focus().setTextAlign('center').run(),
    isActiveCheck: { textAlign: 'center' },
    content: <AlignCenterIcon />,
  },
  {
    title: '우측 정렬',
    command: (editor) => editor.chain().focus().setTextAlign('right').run(),
    isActiveCheck: { textAlign: 'right' },
    content: <AlignRightIcon />,
  },
  {
    title: '좌측 정렬',
    command: (editor) => editor.chain().focus().setTextAlign('left').run(),
    isActiveCheck: { textAlign: 'left' },
    content: <AlignLeftIcon />,
  },
];

export const LIST_BUTTONS = [
  {
    title: '순서 없는 목록',
    command: (editor) => editor.chain().focus().toggleBulletList().run(),
    isActiveCheck: 'bulletList',
    content: <ListUlIcon />,
  },
  {
    title: '순서 있는 목록',
    command: (editor) => editor.chain().focus().toggleOrderedList().run(),
    isActiveCheck: 'orderedList',
    content: <ListOlIcon />,
  },
];

const TAILWIND_COLOR_PALETTE = [
  '#000000',
  '#EF4444',
  '#F97316',
  '#FBBF24',
  '#22C55E',
  '#3B82F6',
  '#8B5CF6',

  '#F3F4F6',
  '#FEE2E2',
  '#FFEDD5',
  '#FEF3C7',
  '#DCFCE7',
  '#DBEAFE',
  '#EDE9FE',

  '#6B7280',
  '#F87171',
  '#FB923C',
  '#FACC15',
  '#4ADE80',
  '#60A5FA',
  '#A78BFA',

  '#1F2937',
  '#B91C1C',
  '#C2410C',
  '#B45309',
  '#15803D',
  '#1D4ED8',
  '#5B21B6',
];

export const COLOR_BUTTONS = TAILWIND_COLOR_PALETTE.map((code) => ({
  title: code,
  command: (editor) => editor.chain().focus().setColor(code).run(),
  isActiveCheck: { textColor: code },
  content: <span className="h-5 w-5 rounded-sm" style={{ backgroundColor: code }} />,
}));
