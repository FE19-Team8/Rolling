import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useBackgroundImages from '@/pages/PostingPage/hooks/UseBackgroundImages';

import { BG_COLORS, TEXT } from './Constants';
import ToInput from './components/ToInput/ToInput';
import SectionTitle from './components/SectionTitle/SectionTitle';
import ToggleGroup from './components/Toggle/ToggleGroup';
import BackgroundList from './components/Background/List';
import SubmitButton from './components/SubmitButton/SubmitButton';

const PostingPage = () => {
  const navigate = useNavigate();

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
  const handleSubmit = () => {
    handleError();
    if (!toName.trim()) return;
    const postId = Date.now();
    navigate(`/post/${postId}`, { state: { toName, bgType, bgValue } });
  };

  const items = bgType === 'color' ? BG_COLORS : bgImages;

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white pt-[80px] pb-[100px]">
      {/* 받는 사람 입력 */}
      <ToInput
        label={TEXT.toLabel}
        value={toName}
        onChange={handleChange}
        onBlur={handleError}
        placeholder={TEXT.toPlaceholder}
        error={error}
      />

      <div className="mb-[48px] w-[720px]">
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
