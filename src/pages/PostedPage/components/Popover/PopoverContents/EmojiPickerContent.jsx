import EmojiPicker from 'emoji-picker-react';

import { PopoverContent } from './PopoverContent.jsx';

export const EmojiPickerContent = ({ onEmojiClick }) => {
  return (
    <PopoverContent>
      <div className="w-60 overflow-auto md:w-full">
        <EmojiPicker onEmojiClick={onEmojiClick} />
      </div>
    </PopoverContent>
  );
};
