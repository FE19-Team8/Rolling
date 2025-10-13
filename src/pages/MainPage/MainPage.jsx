import { useNavigate } from 'react-router-dom';
import FeatureCard from '@/pages/MainPage/components/FeatureCard';
import featureImg01 from '@/assets/images/main/feature_01.png';
import featureImg02 from '@/assets/images/main/feature_02.png';
import Button from '@/components/Button/Button';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center w-full max-w-300 mx-auto py-25">
      <section className="flex justify-end items-start gap-[152px] w-[1200px] h-[324px] p-[60px_0_60px_60px] rounded-[16px] bg-surface mb-[30px]">
        <FeatureCard
          point="01"
          title={
            <>
              누구나 손쉽게, 온라인
              <br />
              롤링페이퍼를 만들 수 있어요
            </>
          }
          description="로그인 없이 자유롭게 만들어요."
        />
        <div className="flex justify-center items-center w-[720px] h-[204px] py-[21px] px-[40px]">
          <img
            src={featureImg01}
            alt="롤링페이퍼 생성 예시"
            className="w-full h-full object-cover flex-shrink-0"
            width={268}
          />
        </div>
      </section>

      <section className="flex justify-start items-start w-[1200px] h-[324px] p-[60px_192px_60px_0] rounded-[16px] bg-surface mb-[48px]">
        <div className="flex justify-center items-center w-[720px] h-[204px] px-[125px]">
          <img
            src={featureImg02}
            alt="이모지 반응 예시"
            className="w-full h-full object-cover flex-shrink-0"
          />
        </div>
        <FeatureCard
          point="02"
          title="서로에게 이모지로 감정을 표현해보세요"
          description="롤링 페이퍼에 이모지를 추가할 수 있어요."
          width={288}
        />
      </section>

      <div className="flex justify-center items-center">
        <Button size="medium" onClick={() => navigate('/list')}>
          나도 만들어보기
        </Button>
      </div>
    </main>
  );
};

export default MainPage;
