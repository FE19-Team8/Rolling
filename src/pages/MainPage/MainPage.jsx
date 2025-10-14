import { useNavigate } from 'react-router-dom';
import FeatureCard from '@/pages/MainPage/components/FeatureCard';
import featureImg01 from '@/assets/images/main/feature_01.png';
import featureImg02 from '@/assets/images/main/feature_02.png';
import Button from '@/components/Button/Button';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <main className="mx-auto flex w-full max-w-300 flex-col items-center py-[60px]">
      <section className="bg-surface mb-[30px] flex h-[324px] w-[1200px] items-start justify-end gap-[152px] rounded-[16px] p-[60px_0_60px_60px]">
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
        <div className="flex h-[204px] w-[720px] items-center justify-center px-[40px] py-[21px]">
          <img
            src={featureImg01}
            alt="롤링페이퍼 생성 예시"
            className="h-full w-full flex-shrink-0 object-cover"
            width={268}
          />
        </div>
      </section>

      <section className="bg-surface mb-[48px] flex h-[324px] w-[1200px] items-start justify-start rounded-[16px] p-[60px_192px_60px_0]">
        <div className="flex h-[204px] w-[720px] items-center justify-center px-[125px]">
          <img
            src={featureImg02}
            alt="이모지 반응 예시"
            className="h-full w-full flex-shrink-0 object-cover"
          />
        </div>
        <FeatureCard
          point="02"
          title={
            <>
              서로에게 이모지로 감정을
              <br />
              표현해보세요
            </>
          }
          description="롤링 페이퍼에 이모지를 추가할 수 있어요."
          width={288}
        />
      </section>

      <div className="flex items-center justify-center">
        <Button size="medium" onClick={() => navigate('/list')}>
          구경해보기
        </Button>
      </div>
    </main>
  );
};

export default MainPage;
