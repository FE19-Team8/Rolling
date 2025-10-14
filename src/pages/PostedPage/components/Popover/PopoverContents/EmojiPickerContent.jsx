import EmojiPicker from 'emoji-picker-react';

import { PopoverContent } from './PopoverContent';

export const EmojiPickerContent = ({ onEmojiClick }) => {
  return (
    <PopoverContent>
      <EmojiPicker onEmojiClick={onEmojiClick} />
    </PopoverContent>
  );
};
