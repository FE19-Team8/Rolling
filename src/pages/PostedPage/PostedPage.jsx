// import { useParams } from 'react-router-dom';
import Background from './components/Background/Background';
import Layout from '../Layout';
import SubHeader from './components/SubHeader/SubHeader';
import MessageCardList from './components/MessageCardList/MessageCardList';

const PostedPage = () => {
  // const { id } = useParams();
  return (
    <Layout>
      <Background
        color={'beige'}
        imageURL={'https://picsum.photos/id/1058/3840/2160'}
      />
      <div className="min-h-screen flex flex-col">
        {/* SubHeader 영역 */}
        <div className="sticky top-[64px] z-40 w-full ">
          <SubHeader />
        </div>
        {/* 카드 리스트 영역 */}
        <div className="w-full max-w-[1200px] mx-auto xl:mt-28 xl:p-0 sm:mt-8  sm:p-6 mt-8 p-5">
          <MessageCardList />
        </div>
      </div>
    </Layout>
  );
};

export default PostedPage;
