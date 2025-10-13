import { PopoverContent } from './PopoverContent';
import KakaoShareButton from '../../KakaoShareButton/KakaoShareButton';

export const ShareContent = () => {
  const buttonClasses = `
    px-4 py-3 w-40 text-left
    hover:bg-gray100 hover:cursor-pointer
  `;

  const handleKakaoShare = () => {
    console.log('KakaoTalk share clicked');
  };

  const handleUrlShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // Toast 알림
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Toast 알림
    }
  };

  return (
    <PopoverContent>
      <div className="flex flex-col mx-[1px] my-[10px]">
        <button className={buttonClasses} onClick={handleKakaoShare}>
          <KakaoShareButton/>
        </button>
        <button className={buttonClasses} onClick={handleUrlShare}>
          URL 공유
        </button>
      </div>
    </PopoverContent>
  );
};
