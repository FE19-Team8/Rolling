import { useNavigate } from 'react-router-dom';

import ProfileStack from '@/components/ProfileStack/ProfileStack';
import EmojiBadge from '@/components/EmojiBadge/EmojiBadge';

import bgBeige from '@/assets/images/card_bg/bg_beige.png';
import bgPurple from '@/assets/images/card_bg/bg_purple.png';
import bgBlue from '@/assets/images/card_bg/bg_blue.png';
import bgGreen from '@/assets/images/card_bg/bg_green.png';

export default function RollingPaperCard({
  id,
  name,
  profiles,
  messageCount,
  topReactions,
  backgroundColor,
  backgroundImageURL,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${id}/message`);
  };

  const baseStyle = `flex flex-col justify-between w-[275px] h-[260px] px-6 py-5 rounded-2xl shadow-sm hover:cursor-pointer`;
  const bodyStyle = 'flex flex-col gap-3';
  const nameStyle =
    'font-bold text-2xl leading-9 pt-3 line-clamp-2 ' +
    (backgroundImageURL ? 'text-white' : 'text-gray900');
  const accentedTextStyle =
    'inline-flex text-md font-bold leading-6' +
    (backgroundImageURL ? 'text-white' : 'text-gray700');
  const textStyle =
    'text-md leading-6' + (backgroundImageURL ? 'text-white' : 'text-gray700');

  // BACKGROUND SETTING
  const colorBackgroundMap = {
    beige: bgBeige,
    purple: bgPurple,
    blue: bgBlue,
    green: bgGreen,
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
    <div
      className={baseStyle}
      style={{ backgroundImage }}
      onClick={handleClick}
    >
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
        <div className="h-13">
          <hr
            role="separator"
            aria-orientation="horizontal"
            className="border-0 h-px bg-black/12 mb-[16px]"
          />
          <div className="flex gap-2">
            {topReactions.map((reaction, i) => (
              <EmojiBadge
                key={i}
                emoji={reaction.emoji}
                count={reaction.count}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
