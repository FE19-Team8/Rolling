import { useParams } from 'react-router-dom';

import Layout from '@/pages/Layout';
import Background from '@/pages/PostedPage/components/Background/Background';
import MessageCardList from '@/pages/PostedPage/components/MessageCardList/MessageCardList';
import SubHeader from '@/pages/PostedPage/components/SubHeader/SubHeader';
import CommonHead from '@/meta/CommonHead';

const PostedPage = () => {
  const { id: recipientId } = useParams();
  const META_DATA = {
    title: '롤링 페이퍼를 편집하는 곳 입니다.',
    desc: '자유롭게 롤링 페이퍼를 편집해보세요',
    image: 'https://rolling-xsll.vercel.app/og/og_edit',
    canonical: `https://rolling-xsll.vercel.app/post/${recipientId}/edit`,
  };

  return (
    <Layout>
      <CommonHead
        title={META_DATA.title}
        description={META_DATA.desc}
        canonical={META_DATA.canonical}
        image={META_DATA.image}
      />
      <Background color={'beige'} imageURL={'https://picsum.photos/id/1058/3840/2160'} />
      <div className="flex min-h-screen flex-col">
        {/* SubHeader 영역 */}
        <div className="sticky top-[64px] z-40 w-full">
          <SubHeader />
        </div>
        {/* 카드 리스트 영역 */}
        <div className="mx-auto mt-8 w-full max-w-[1200px] p-5 sm:mt-8 sm:p-6 xl:mt-28 xl:p-0">
          <MessageCardList recipientId={recipientId} isEditMode={true} />
        </div>
      </div>
    </Layout>
  );
};

export default PostedPage;
