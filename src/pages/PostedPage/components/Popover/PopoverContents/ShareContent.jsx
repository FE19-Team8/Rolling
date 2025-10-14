import { PopoverContent } from './PopoverContent';

export const ShareContent = () => {
  const buttonClasses = `
    px-[16px] py-[12px] w-[138px] text-left
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
      <div className="mx-[1px] my-[10px] flex flex-col">
        <button className={buttonClasses} onClick={handleKakaoShare}>
          카카오톡 공유
        </button>
        <button className={buttonClasses} onClick={handleUrlShare}>
          URL 공유
        </button>
      </div>
    </PopoverContent>
  );
};
