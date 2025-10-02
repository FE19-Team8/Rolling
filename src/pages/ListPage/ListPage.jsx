// import { useNavigate } from 'react-router-dom';
import { useRecipients } from './useRecipients';

import Button from '../../components/Button/Button';
import CardList from './components/CardList/CardList';

const ListPage = () => {
  // 페이지 이동
  // const navigate = useNavigate();

  const { recipients, loading, error } = useRecipients();
  const popularSorted = [...(recipients.results || [])].sort(
    (a, b) => b.messageCount - a.messageCount
  );
  const recentSorted = [...(recipients.results || [])].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;
  if (recipients.length === 0) return <div>no data...</div>;

  const sectionStyle = 'flex flex-col gap-[16px] m-[50px]';
  const titleStyle = 'font-bold text-[24px] leading-[36px] tracking-[-0.01em]';

  return (
    <div className="flex flex-col items-center mb-[218px]">
      <p className="border bg-amber-200 w-full h-[64px]">헤더 자리</p>
      <div className="mt-[50px] mb-[64px]">
        <section className={sectionStyle}>
          <h2 className={titleStyle}>인기 롤링 페이퍼🔥</h2>
          <CardList cards={popularSorted} />
        </section>
        <section className={sectionStyle}>
          <h2 className={titleStyle}>최근에 만든 롤링 페이퍼⭐</h2>
          <CardList cards={recentSorted} />
        </section>
      </div>
      {/* onClick={() => navigate('/PostedPage')} */}
      <Button size="medium">나도 만들어보기</Button>
    </div>
  );
};

export default ListPage;
