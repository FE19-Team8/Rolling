import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

import useBackgroundImages from '@/pages/PostingPage/hooks/UseBackgroundImages';
import { createPaper } from '@/api/papers';
import CommonHead from '@/meta/CommonHead';

import { BG_COLORS, COLOR_TOKEN_MAP, TEXT } from './Constants';
import ToInput from './components/ToInput/ToInput';
import SectionTitle from './components/SectionTitle/SectionTitle';
import ToggleGroup from './components/Toggle/ToggleGroup';
import BackgroundList from './components/Background/List';
import SubmitButton from './components/SubmitButton/SubmitButton';

const PostingPage = () => {
  console.log('확인');
  const navigate = useNavigate();

  const META_DATA = {
    title: '롤링페이퍼 만들기 | 마음을 전할 새로운 페이지를 시작하세요',
    desc: '롤링페이퍼를 직접 만들어 소중한 사람에게 따뜻한 메시지를 모아보세요',
    image: 'https://rolling-xsll.vercel.app/og/og_posting',
    canonical: `https://rolling-xsll.vercel.app/post/`,
  };

  const [toName, setToName] = useState('');
  const [error, setError] = useState(null);
  const [bgType, setBgType] = useState('color'); // color 또는 image
  const [bgValue, setBgValue] = useState(BG_COLORS[0]); // 선택된 배경 값 (색상 또는 이미지), 기본값은 색상 첫번째 요소

  const bgImages = useBackgroundImages(); // api에서 받아올 이미지 리스트

  // 받는 사람 이름 유효성 검사
  const handleError = () => {
    if (!toName.trim()) setError(TEXT.errorEmpty);
    else setError(null);
  };

  // 받는 사람 입력 중 에러 해제
  const handleChange = (event) => {
    setToName(event.target.value);
    if (event.target.value.trim() !== '') setError(null);
  };

  // 생성하기 클릭
  const handleSubmit = async () => {
    handleError();
    if (!toName.trim()) return;
    const trimmed = toName.trim();

    // 색상이라면 COLOR_TOKEN_MAP에서 토큰으로 변환, 이미지라면 URL 전송
    const payload =
      bgType === 'color'
        ? {
            name: trimmed,
            backgroundColor: COLOR_TOKEN_MAP[bgValue] ?? 'beige',
            backgroundImageURL: null,
          }
        : {
            name: trimmed,
            backgroundColor: 'beige',
            backgroundImageURL: bgValue,
          };

    try {
      const data = await createPaper(payload);
      navigate(`/post/${data.id}`);
    } catch (error) {
      console.error('Error creating paper:', error);
    }
  };

  // 현재 보여질 아이템들 (색상 or 이미지)
  const items = useMemo(() => (bgType === 'color' ? BG_COLORS : bgImages), [bgType, bgImages]);

  return (
    <div className="mx-auto mt-[50px] mb-[25px] flex w-[320px] flex-1 flex-col gap-[50px] md:w-[720px]">
      {/* 받는 사람 입력 */}
      <CommonHead
        title={META_DATA.title}
        description={META_DATA.desc}
        canonical={META_DATA.canonical}
        image={META_DATA.image}
      />
      <ToInput
        label={TEXT.toLabel}
        value={toName}
        onChange={handleChange}
        onBlur={handleError}
        placeholder={TEXT.toPlaceholder}
        error={error}
      />

      <div className="w-[328px] md:w-[720px]">
        {/* 배경 선택 텍스트 */}
        <SectionTitle title={TEXT.title} description={TEXT.desc} />

        {/* 컬러 / 이미지 토글 버튼 */}
        <ToggleGroup
          bgType={bgType}
          setBgType={setBgType}
          setBgValue={setBgValue}
          bgColors={BG_COLORS}
          bgImages={bgImages}
          labels={TEXT.tabs}
        />

        {/* 컬러 / 이미지 선택 리스트 */}
        <BackgroundList bgType={bgType} items={items} selected={bgValue} onSelect={setBgValue} />

        {/* 생성하기 버튼 */}
        <SubmitButton disabled={!toName.trim()} onClick={handleSubmit}>
          {TEXT.submit}
        </SubmitButton>
      </div>
    </div>
  );
};

export default PostingPage;
