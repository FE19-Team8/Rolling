// import { useParams } from 'react-router-dom';
import Background from './components/Background/Background';
import Layout from '../Layout';
import SubHeader from './components/SubHeader/SubHeader';
import MessageCardList from './components/MessageCardList/MessageCardList';

const PostedPage = () => {
  // const { id } = useParams();
  return (
<<<<<<< HEAD
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
=======
    <div className="flex min-h-screen flex-col">
      {/* SubHeader 영역 */}
      <div className="sticky top-[64px] z-40 w-full">
        <SubHeader />
      </div>
      {/* 카드 리스트 영역 */}
      <div className="mx-auto mt-8 w-full max-w-[1200px] p-5 sm:mt-8 sm:p-6 xl:mt-28 xl:p-0">
        <MessageCardList />
      </div>
    </div>
>>>>>>> 4f8c98a (chore: 머지 컨플릭트 해결 prettier (#134))
  );
};

export default PostedPage;
