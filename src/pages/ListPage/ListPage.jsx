import { useNavigate } from 'react-router-dom';

import Skeleton from '@/components/Skeleton/Skeleton';

import { useRecipients } from './useRecipients';
import Button from '../../components/Button/Button';
import CardList from './components/CardList/CardList';

const ListPage = () => {
  const navigate = useNavigate();
  const { recipients, loading, error, showSkeleton } = useRecipients();

  const isEmpty =
    !loading && !recipients.popular?.results?.length && !recipients.recent?.results?.length;

  // STYLES
  const sectionStyle =
    'flex flex-col items-center gap-4 mx-5 md:mx-6 my-13 overflow-hidden lg:overflow-visible';
  const titleStyle = 'font-bold text-2xl leading-9 tracking-[-0.01em] w-full';
  const ListStyle = 'relative w-full';

  if (loading && showSkeleton)
    return (
      <div className="mb-[218px] flex flex-col lg:items-center">
        <div className="mt-[50px] mb-[64px]">
          <section className={sectionStyle}>
            <h2 className={titleStyle}>인기 롤링 페이퍼🔥</h2>
            <div className="flex gap-[20px]">
              <Skeleton width={275} height={260} />
              <Skeleton width={275} height={260} />
              <Skeleton width={275} height={260} />
              <Skeleton width={275} height={260} />
            </div>
          </section>
          <section className={sectionStyle}>
            <h2 className={titleStyle}>최근에 만든 롤링 페이퍼⭐</h2>
            <div className="flex gap-[20px]">
              <Skeleton width={275} height={260} />
              <Skeleton width={275} height={260} />
              <Skeleton width={275} height={260} />
              <Skeleton width={275} height={260} />
            </div>
          </section>
        </div>
        <div className="flex w-full justify-center">
          <Skeleton width={275} height={60} />
        </div>
      </div>
    );

  if (isEmpty)
    return (
      <div>
        <h1 className={titleStyle}>아직 등록된 롤링페이퍼가 없어요</h1>
        <div className="flex items-center justify-center">
          <Button size="medium" onClick={() => navigate('/post')}>
            내 공간 만들어보기
          </Button>
        </div>
      </div>
    );
  if (!recipients?.results?.length)
    return (
      <div style={{ height: 'calc(100vh - 90px)' }}>
        <div className="flex h-full flex-col justify-between lg:items-center">
          <div className="mt-[50px] mb-[64px]">
            <section className={sectionStyle}>
              <h2 className={titleStyle}>인기 롤링 페이퍼🔥</h2>
              <div className={ListStyle}>
                <CardList cards={recipients.popular.results || []} />
              </div>
            </section>
            <section className={sectionStyle}>
              <h2 className={titleStyle}>최근에 만든 롤링 페이퍼⭐</h2>
              <div className={ListStyle}>
                <CardList cards={recipients.recent.results || []} />
              </div>
            </section>
          </div>
          {/* onClick={() => navigate('/PostedPage')} */}
          <div className="flex min-w-[280px] p-6 lg:mb-30">
            <Button size={'sm' ? 'large' : 'medium'} onClick={() => navigate('/post')}>
              나도 만들어보기
            </Button>
          </div>
        </div>
      </div>
    );
};
export default ListPage;
