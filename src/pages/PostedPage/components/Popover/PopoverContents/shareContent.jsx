import { PopoverContent } from './PopoverContent';
import { showToast } from '../../../../../utils/toast';
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
      if (!navigator.clipboard?.writeText) throw new Error('CLIPBOARD_API_UNSUPPORTED');
      await navigator.clipboard.writeText(window.location.href);
      showToast('URL이 복사되었습니다.', { duration: 5000 });
    } catch (err) {
      //console.error('Failed to copy: ', err);
      try {
        const ta = document.createElement('textarea');
        ta.value = window.location.href;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        ta.style.top = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (!ok) throw new Error('COPY_COMMAND_FAILED');
        showToast('URL이 복사되었습니다.', { duration: 5000 });
      } catch (err2) {
        console.log('[URL COPY ERROR]', err, err2);
        showToast('URL 복사에 실패했습니다. 주소창의 URL을 직접 복사해주세요.');
      }
    }
  };

  return (
    <PopoverContent>
      <div className="mx-[1px] my-[10px] flex flex-col">
        <button className={buttonClasses} onClick={handleKakaoShare}>
          <KakaoShareButton />
        </button>
        <button className={buttonClasses} onClick={handleUrlShare}>
          URL 공유
        </button>
      </div>
    </PopoverContent>
  );
};
