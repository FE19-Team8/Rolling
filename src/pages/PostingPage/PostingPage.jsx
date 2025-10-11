import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import checkIcon from '../../assets/icons/ic_check.svg';

const PostingPage = () => {
  const navigate = useNavigate();
  const [toName, setToName] = useState('');
  const [error, setError] = useState(null);
  const [bgType, setBgType] = useState('color'); // color 또는 image
  const [bgValue, setBgValue] = useState('#FFE2AD'); // 선택된 배경 값 (색상 또는 이미지), 기본값은 색상 첫번째 요소
  const [bgImages, setBgImages] = useState([]); // api에서 받아올 이미지 리스트
  const bgColors = ['#FFE2AD', '#ECD9FF', '#B1E4FF', '#D0F5C3'];

  // 받는 사람 이름 유효성 검사
  const handleError = () => {
    if (!toName.trim()) {
      setError('값을 입력해 주세요.');
    } else {
      setError(null);
    }
  };

  // 받는 사람 입력 중 에러 해제
  const handleChange = (event) => {
    setToName(event.target.value);
    if (event.target.value.trim() !== '') setError(null);
  };

  // 생성하기 클릭
  const handleSubmit = () => {
    handleError();
    if (!toName.trim()) return;

    // postId 생성
    const postId = Date.now();
    navigate(`/post/${postId}`, { state: { toName, bgType, bgValue } });
  };

  // api 배경 이미지 가져오기
  useEffect(() => {
    const fetchBgImages = async () => {
      try {
        const response = await fetch(
          'https://rolling-api.vercel.app/background-images/',
        );
        const data = await response.json();
        if (Array.isArray(data.imageUrls)) {
          const urls = data.imageUrls.slice(0, 4);
          setBgImages(urls);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBgImages();
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-[80px] pb-[100px] bg-white">
      {/* 받는 사람 입력 */}
      <div className="w-[720px] mb-[48px]">
        <h2 className="text-[20px] font-bold text-[#181818] mb-[12px]">To.</h2>
        <input
          type="text"
          placeholder="받는 사람 이름을 입력해 주세요"
          value={toName}
          onChange={handleChange}
          onBlur={handleError}
          className={`w-full h-[48px] px-[12px] border rounded-[8px] text-[16px] leading-[24px] focus:outline-none placeholder:text-[#A1A1AA] ${
            error
              ? 'border-[#DC3A3A]'
              : 'border-[#E4E4E7] focus:border-[#9935FF]'
          }`}
        />
        {error && (
          <p className="mt-[8px] text-[#DC3A3A] text-[14px]">{error}</p>
        )}
      </div>

      {/* 배경 선택 텍스트 */}
      <div className="w-[720px] mb-[48px]">
        <h3 className="text-[24px] font-bold text-[#181818] mb-[4px]">
          배경화면을 선택해 주세요.
        </h3>
        <p className="text-[16px] text-[#555555] mb-[32px]">
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </p>

        {/* 컬러 / 이미지 토글 버튼 */}
        <div className="flex w-[244px] h-[40px] mb-[32px]">
          {[
            { type: 'color', label: '컬러' },
            { type: 'image', label: '이미지' },
          ].map(({ type, label }) => {
            const active = bgType === type;
            return (
              <button
                key={type}
                onClick={() => {
                  setBgType(type);
                  if (type === 'color') setBgValue(bgColors[0]);
                  if (type === 'image' && bgImages.length > 0)
                    setBgValue(bgImages[0]);
                }}
                className={`w-[122px] h-[40px] font-['Pretendard'] text-[16px] leading-[26px] tracking-[-0.01em] rounded-[6px] cursor-pointer 
                ${
                  active
                    ? 'text-[#861DEE] border-[2px] border-[#9935FF] font-bold bg-transparent'
                    : 'text-[#181818] border-none font-normal bg-[#F4F4F5]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* 컬러 / 이미지 선택 리스트 */}
        <div className="flex gap-[16px] mb-[48px]">
          {(bgType === 'color' ? bgColors : bgImages).map((item, index) => (
            <button
              key={index}
              onClick={() => setBgValue(item)}
              className="relative w-[168px] h-[168px] rounded-[16px] overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute inset-0 ${bgType === 'color' ? '' : 'bg-cover bg-center'}`}
                style={{
                  backgroundColor: bgType === 'color' ? item : undefined,
                  backgroundImage:
                    bgType === 'image' ? `url(${item})` : undefined,
                  opacity: bgType === 'image' && bgValue === item ? 0.3 : 1,
                }}
              />
              {bgValue === item && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#555555] flex items-center justify-center">
                    <img
                      src={checkIcon}
                      alt="선택됨"
                      draggable={false}
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* 생성하기 버튼 */}
        <button
          onClick={handleSubmit}
          disabled={!toName.trim()}
          className={`w-[720px] h-[56px] rounded-[12px] font-bold text-[18px] leading-[28px] tracking-[-0.01em] text-white transition-all duration-200 flex items-center justify-center ${
            toName.trim()
              ? 'bg-[#9935FF] hover:bg-[#A259FF] cursor-pointer'
              : 'bg-[#E4E4E7] text-[#CCCCCC] cursor-not-allowed'
          }`}
        >
          생성하기
        </button>
      </div>
    </div>
  );
};

export default PostingPage;
