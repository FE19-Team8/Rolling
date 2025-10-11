import ProfileStack from '@/components/ProfileStack/ProfileStack';
import EmojiBadge from '@/components/EmojiBadge/EmojiBadge';
import Divider from '@/components/Divider/Divider';

// 서버 연결 후 지움
const DEFAULT = {
  NAME: 'Sowon',
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
  BACKGROUND_COLOR: 'beige',
  BACKGROUND_IMAGE_URL: null,
};

export default function RollingPaperCard({
  name = DEFAULT.NAME,
  profiles = DEFAULT.PROFILES,
  messageCount = DEFAULT.MESSAGE_COUNT,
  topReactions = DEFAULT.TOP_REACTIONS,
  backgroundColor = DEFAULT.BACKGROUND_COLOR,
  backgroundImageURL = DEFAULT.BACKGROUND_IMAGE_URL,
}) {
  const baseStyle = `flex flex-col justify-between w-[275px] h-[260px] px-6 py-5 rounded-[16px] shadow-[0_2px_12px_0_#00000014]`;
  const bodyStyle = 'flex flex-col gap-3';
  const nameStyle =
    'font-bold text-2xl leading-9 pt-3 tracking-[-0.01em] line-clamp-2 ' +
    (backgroundImageURL ? 'text-white' : 'text-gray900');
  const accentedTextStyle =
    'inline-flex text-md font-bold leading-[26px] tracking-[-0.01em] ' +
    (backgroundImageURL ? 'text-white' : 'text-gray700');
  const textStyle =
    'text-md leading-[26px] tracking-[-0.01em] ' +
    (backgroundImageURL ? 'text-white' : 'text-gray700');

  // BACKGROUND SETTING
  const colorBackgroundMap = {
    beige: '/images/card_bg/bg_beige.png',
    purple: '/images/card_bg/bg_purple.png',
    blue: '/images/card_bg/bg_blue.png',
    green: '/images/card_bg/bg_green.png',
  };
  const backgroundImage = backgroundImageURL
    ? `url(${backgroundImageURL})`
    : `url(${colorBackgroundMap[backgroundColor] ?? ''})`;

  // MESSAGE COUNT SETTING
  let overMaximum = '';
  if (messageCount > 99) {
    messageCount = 99;
    overMaximum = '+';
  }

  return (
    <div className={baseStyle} style={{ backgroundImage }}>
      <div className={bodyStyle}>
        <h1 className={`${nameStyle}`}>To. {name}</h1>
        {profiles && (
          <ProfileStack profiles={profiles} remainingCount={messageCount - 3} />
        )}
        {messageCount != 0 && (
          <div className="flex flex-col">
            <span>
              <span className={accentedTextStyle}>
                {messageCount}
                {overMaximum}
              </span>
              <span className={textStyle}>명이 작성했어요!</span>
            </span>
          </div>
        )}
        {messageCount == 0 && (
          <div className="flex flex-col">
            <span className={textStyle}>
              아직 작성된 메세지가 없어요.
              <br />첫 메세지를 남겨주세요!
            </span>
          </div>
        )}
      </div>
      <footer>
        <div>
          {/*<Divider/>*/}
          <hr
            role="separator"
            aria-orientation="horizontal"
            className="border-0 h-px bg-black/12 mb-[16px]"
          />
        </div>
        <div className="flex gap-2">
          {topReactions.map((reaction, i) => (
            <EmojiBadge key={i} emoji={reaction.emoji} count={reaction.count} />
          ))}
        </div>
      </footer>
    </div>
  );
}
