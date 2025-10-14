import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  const [logoHovered, setLogoHovered] = useState(false); // Desktop
  const [isPressed, setIsPressed] = useState(false); // Mobile
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  const handleTouch = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      handleNavigate();
    }, 180);
  };

  const baseStyle = `flex flex-col justify-between w-52 md:w-[275px] h-58 md:h-[260px] px-6 py-5 rounded-2xl shadow-sm hover:cursor-pointer`;
  const bodyStyle = 'flex flex-col gap-3';
  const nameStyle =
    'font-bold  text-lg md:text-2xl leading-9 pt-3 line-clamp-2 ' +
    (backgroundImageURL ? 'text-white' : 'text-gray900');
  const accentedTextStyle =
    'inline-flex text-sm md:text-md font-bold leading-6' +
    (backgroundImageURL ? 'text-white' : 'text-gray700');
  const textStyle =
    'text-sm md:text-md leading-6' + (backgroundImageURL ? 'text-white' : 'text-gray700');

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

  // Mobile topReactions
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isSmallScreen = windowWidth < 768;
  const isTopReactionsFull = topReactions.length > 1;
  const isInclude99Plus = topReactions.find((r) => r.count >= 99);
  const visibleTopReactions =
    isTopReactionsFull && isSmallScreen && isInclude99Plus
      ? topReactions.slice(0, 2)
      : topReactions;

  return (
    <div
      className={baseStyle}
      style={{
        backgroundImage,
        backgroundPosition: 'center',
        transform: logoHovered ? 'scale(0.94)' : 'scale(1)',
        transition: 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      onClick={() => !('ontouchstart' in window) && handleNavigate()} // Desktop Click (디바이스 터치 지원 체크)
      onMouseEnter={() => setLogoHovered(true)}
      onMouseLeave={() => setLogoHovered(false)}
      onTouchStart={handleTouch}
    >
      <div className={bodyStyle}>
        <h1 className={`${nameStyle}`}>To. {name}</h1>
        {profiles && <ProfileStack profiles={profiles} remainingCount={messageCount - 3} />}
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
            className="mb-[16px] h-px border-0 bg-black/12"
          />
          <div className="flex gap-2">
            {visibleTopReactions.map((reaction, i) => (
              <EmojiBadge key={i} emoji={reaction.emoji} count={reaction.count} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
