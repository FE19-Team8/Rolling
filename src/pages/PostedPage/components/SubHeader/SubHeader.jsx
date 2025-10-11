import Divider from '@/components/Divider/Divider';
import EmojiBadge from '@/EmojiBadge/EmojiBadge';
import ProfileStack from '@/components/ProfileStack/ProfileStack';
import {
  Popover,
  PopoverTrigger,
  ShareContent,
  EmojiContent,
  EmojiPickerContent,
} from '../Popover';

// 임시 데이터
const DEFAULT = {
  NAME: 'Ashley Kim',
  PROFILES: [
    { id: 1, src: '/images/default_profile.png' },
    { id: 2, src: '/images/default_profile.png' },
    { id: 3, src: '/images/default_profile.png' },
  ],
  MESSAGE_COUNT: 30,
  TOP_REACTIONS: [
    { emoji: '😀', count: 11 },
    { emoji: '👍', count: 7 },
    { emoji: '😍', count: 9 },
  ],
  REACTION: [
    { id: 24, recipientId: 2, emoji: '😀', count: 15 },
    { id: 25, recipientId: 3, emoji: '🤣', count: 9 },
    { id: 26, recipientId: 4, emoji: '😍', count: 24 },
    { id: 27, recipientId: 5, emoji: '😭', count: 7 },
    { id: 28, recipientId: 6, emoji: '😎', count: 12 },
    { id: 29, recipientId: 7, emoji: '😡', count: 3 },
    { id: 30, recipientId: 8, emoji: '🤔', count: 5 },
    { id: 31, recipientId: 9, emoji: '😴', count: 2 },
    { id: 32, recipientId: 10, emoji: '😇', count: 10 },
  ],
};

const SubHeader = ({
  name = DEFAULT.NAME,
  profiles = DEFAULT.PROFILES,
  messageCount = DEFAULT.MESSAGE_COUNT,
  topReaction = DEFAULT.TOP_REACTIONS,
  reactions = DEFAULT.REACTION,
}) => {
  return (
    <div className="flex justify-center border-b border-gray200 w-full py-[13px] bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-[1200px] md:px-6 lg:px-0">
        {/* left */}
        <div className="mb-3 ml-5 md:mb-0 md:ml-0">
          <span className="text-[28px] font-bold">To. {name}</span>
        </div>
        <Divider className="block md:hidden" />
        {/* right */}
        <div className="flex h-full items-center gap-[27px] mt-3 md:mt-0 ml-5 md:ml-0">
          {/* visitor */}
          <div className="hidden md:flex items-center gap-[11px]">
            <ProfileStack
              profiles={profiles}
              remainingCount={messageCount - 3}
            />
            <div className="hidden lg:flex">
              <span className="font-bold">{messageCount}</span>
              <span>명이 작성했어요!</span>
            </div>
          </div>
          <Divider className="hidden md:inline" orientation="vertical" />
          {/* reactions */}
          <div className="flex gap-[8px]">
            {topReaction.map((reaction) => (
              <EmojiBadge
                key={reaction.emoji}
                emoji={reaction.emoji}
                count={reaction.count}
              />
            ))}
            {/* Emoji Picker */}
            <Popover>
              <PopoverTrigger type="emoji" />
              <EmojiContent />
            </Popover>
            <Popover>
              <PopoverTrigger type="emojiPicker" />
              <EmojiPickerContent onEmojiClick={console.log} />
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
