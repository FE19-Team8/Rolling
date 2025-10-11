//import { useParams } from 'react-router-dom';
import SubHeader from './components/SubHeader/SubHeader';
import MessageCardList from './components/MessageCardList/MessageCardList';

const PostedPage = () => {
  // const { id } = useParams();
  return (
    //  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"></div>
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
  );
};

export default PostedPage;
