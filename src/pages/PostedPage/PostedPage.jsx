import { useParams } from 'react-router-dom';

import Layout from '@/pages/Layout.jsx';
import Background from '@/pages/PostedPage/components/Background/Background';
import MessageCardList from '@/pages/PostedPage/components/MessageCardList/MessageCardList';
import SubHeader from '@/pages/PostedPage/components/SubHeader/SubHeader';

const PostedPage = () => {
  const { id: recipientId } = useParams();

  return (
    <Layout>
      <Background color={'beige'} imageURL={'https://picsum.photos/id/1058/3840/2160'} />
      <div className="flex min-h-screen flex-col">
        {/* SubHeader 영역 */}
        <div className="sticky top-[64px] z-40 w-full">
          <SubHeader />
        </div>
        {/* 카드 리스트 영역 */}
        <div className="mx-auto mt-8 w-full max-w-[1200px] p-5 sm:mt-8 sm:p-6 xl:mt-28 xl:p-0">
          <MessageCardList recipientId={recipientId} />
        </div>
      </div>
    </Layout>
  );
};

export default PostedPage;
