import Divider from '@/components/Divider/Divider.jsx';
import EmojiBadge from '@/components/EmojiBadge/EmojiBadge.jsx';
import ProfileStack from '@/components/ProfileStack/ProfileStack.jsx';

import {
  Popover,
  PopoverTrigger,
  ShareContent,
  EmojiContent,
  EmojiPickerContent,
} from '../Popover';
import { useReactions } from '../../hooks/useReactions';

const SubHeader = ({ recipient, recipientId }) => {
  if (!recipient) return null;
  if (!recipientId) return null;

  const { reactions, addReaction } = useReactions(recipientId, recipient.topReaction);

  const name = recipient.name;
  const profiles = recipient.recentMessages?.map((msg) => ({
    id: msg.id,
    src: msg.profileImageURL,
  }));
  const messageCount = recipient.messageCount;

  const handleEmojiClick = async (emoji) => {
    await addReaction(emoji);
  };

  return (
    <div className="border-gray200 flex w-full justify-center border-b bg-white py-[13px]">
      <div className="flex w-full max-w-[1200px] flex-col items-start justify-between md:flex-row md:items-center md:px-6 lg:px-0">
        {/* left */}
        <div className="mb-3 ml-5 md:mb-0 md:ml-0">
          <span className="text-[28px] font-bold">To. {name}</span>
        </div>
        <Divider className="block md:hidden" />
        {/* right */}
        <div className="mt-3 ml-5 flex h-full items-center gap-[27px] md:mt-0 md:ml-0">
          {/* visitor */}
          <div className="hidden items-center gap-[11px] md:flex">
            <ProfileStack profiles={profiles} remainingCount={messageCount - 3} />
            <div className="hidden lg:flex">
              <span className="font-bold">{messageCount}</span>
              <span>명이 작성했어요!</span>
            </div>
          </div>
          <Divider className="hidden md:inline" orientation="vertical" />
          {/* reactions */}
          <div className="flex gap-[8px]">
            {reactions.length > 0 && (
              <>
                {reactions.slice(0, 3).map((reaction) => (
                  <EmojiBadge key={reaction.emoji} emoji={reaction.emoji} count={reaction.count} />
                ))}
                <Popover>
                  <PopoverTrigger type="emoji" />
                  <EmojiContent reactions={reactions} />
                </Popover>
              </>
            )}
            {/* Emoji Picker */}
            <Popover>
              <PopoverTrigger type="emojiPicker" />
              <EmojiPickerContent onEmojiClick={(data) => handleEmojiClick(data.emoji)} />
            </Popover>
          </div>
          <Divider orientation="vertical" />
          <div>
            <Popover>
              <PopoverTrigger type="share" />
              <ShareContent emojis={reactions} />
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
