import { useNavigate } from 'react-router-dom';

import Skeleton from '@/components/Skeleton/Skeleton';
import CommonHead from '@/meta/CommonHead';

import { useRecipients } from './useRecipients';
import Button from '../../components/Button/Button';
import CardList from './components/CardList/CardList';

const ListPage = () => {
  const META_DATA = {
    title: '롤링페이퍼 리스트 | 인기 롤링페이퍼 & 갓 작성된 이야기들',
    desc: '지금 가장 사랑받는 롤링페이퍼부터 방금 작성된 따끈따끈한 새 이야기까지!',
    image: 'https://rolling-xsll.vercel.app/og/og_list',
    canonical: 'https://rolling-xsll.vercel.app/post/list',
  };

  const navigate = useNavigate();
  const { recipients, loading, showSkeleton } = useRecipients();

  const isEmpty =
    !loading && !recipients.popular?.results?.length && !recipients.recent?.results?.length;

  // STYLES
  const sectionStyle =
    'flex flex-col items-center gap-4 mx-5 md:mx-6 my-6 overflow-hidden lg:overflow-visible';
  const titleStyle = 'font-bold text-2xl leading-9 tracking-[-0.01em] w-full';
  const ListStyle = 'relative w-full';

  if (loading && showSkeleton)
    return (
      <div className="mb-[218px] flex flex-col lg:items-center">
        <CommonHead
          title={META_DATA.title}
          description={META_DATA.desc}
          canonical={META_DATA.canonical}
          image={META_DATA.image}
        />
        <div className="mt-0 xl:mt-[20px]">
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
      <>
        <CommonHead
          title={META_DATA.title}
          description={META_DATA.desc}
          canonical={META_DATA.canonical}
          image={META_DATA.image}
        />
        <div>
          <h1 className={titleStyle}>아직 등록된 롤링페이퍼가 없어요</h1>
        </div>
        <div className="sticky bottom-[20px] flex items-center justify-center px-5 md:px-6">
          <Button size="medium" onClick={() => navigate('/post')}>
            내 공간 만들어보기
          </Button>
        </div>
      </>
    );

  if (!recipients?.results?.length)
    return (
      <>
        <CommonHead
          title={META_DATA.title}
          description={META_DATA.desc}
          canonical={META_DATA.canonical}
          image={META_DATA.image}
        />
        <div className="mt-0 flex flex-col md:mt-[20px] lg:items-center">
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

        <div className="sticky bottom-0 flex w-full justify-center px-5 md:px-6">
          <div className="w-full bg-gradient-to-t from-white via-white/100 to-transparent pt-12 pb-6">
            <Button
              size="medium"
              className="mx-auto block w-full lg:w-[280px]"
              onClick={() => navigate('/post')}
            >
              나도 만들어보기
            </Button>
          </div>
        </div>
      </>
    );
};

export default ListPage;
