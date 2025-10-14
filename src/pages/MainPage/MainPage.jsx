import { useNavigate } from 'react-router-dom';

import FeatureCard from '@/pages/MainPage/components/FeatureCard';
import featureImg01 from '@/assets/images/main/feature_01.png';
import featureImg02 from '@/assets/images/main/feature_02.png';
import Button from '@/components/Button/Button';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-3 py-[30px] pb-0 md:px-6 md:py-[60px] md:pb-0 xl:px-0 xl:py-[60px] xl:pb-0">
        <section className="bg-surface mb-[30px] flex h-auto w-full flex-col items-start justify-end gap-[40px] rounded-[16px] p-[6px] md:p-[40px] xl:h-[324px] xl:flex-row xl:gap-[152px] xl:px-0 xl:py-[60px] xl:pl-[60px]">
          <FeatureCard
            point="01"
            className="p-[20px] md:p-0 xl:px-0"
            title={
              <>
                누구나 손쉽게, 온라인
                <br />
                롤링페이퍼를 만들 수 있어요
              </>
            }
            description="로그인 없이 자유롭게 만들어요."
          />
          <div className="flex h-[204px] w-full max-w-[720px] items-center justify-center p-0 md:mx-auto xl:mx-0 xl:w-[720px] xl:px-[40px] xl:py-[21px]">
            <img
              src={featureImg01}
              alt="롤링페이퍼 생성 예시"
              className="h-full w-full flex-shrink-0 object-cover"
              width={268}
            />
          </div>
        </section>

        <section className="bg-surface mb-[20px] flex h-auto w-full max-w-[1200px] flex-col-reverse items-start justify-start gap-[40px] rounded-[16px] p-[6px] md:p-[40px] xl:h-[324px] xl:flex-row xl:gap-0 xl:p-[60px_192px_60px_0]">
          <div className="flex h-[204px] w-full max-w-[720px] items-center justify-center p-0 md:mx-auto xl:mx-0 xl:w-[720px] xl:px-[125px]">
            <img
              src={featureImg02}
              alt="이모지 반응 예시"
              className="h-full w-full max-w-full flex-shrink-0 object-cover"
            />
          </div>
          <FeatureCard
            point="02"
            className="p-[20px] md:p-0 xl:px-0"
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
      </main>

      <div className="sticky bottom-0 flex w-full justify-center px-5 md:px-6">
        <div className="w-full bg-gradient-to-t from-white via-white/100 to-transparent pt-12 pb-6">
          <Button
            size="medium"
            className="mx-auto block w-full xl:w-[280px]"
            onClick={() => navigate('/list')}
          >
            구경해보기
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
