import { useParams } from 'react-router-dom';
import { useState } from 'react';

import Layout from '@/pages/Layout.jsx';
import Background from '@/pages/PostedPage/components/Background/Background.jsx';
import MessageCardList from '@/pages/PostedPage/components/MessageCardList/MessageCardList.jsx';
import SubHeader from '@/pages/PostedPage/components/SubHeader/SubHeader.jsx';
import useDeletePaper from '@/pages/PostedPage/hooks/useDeletePaper.js';
import Button from '@/components/Button/Button.jsx';

import { useRecipientDetails } from './hooks/useRecipientDetails.js';

const PostedPage = () => {
  const { id: recipientId } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);

  const onToggleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const { handleDeletePaper } = useDeletePaper();
  const { recipient } = useRecipientDetails(recipientId);

  return (
    <Layout>
      <Background color={'beige'} imageURL={'https://picsum.photos/id/1058/3840/2160'} />
      <div className="flex min-h-screen flex-col">
        {/* SubHeader 영역 */}
        <div className="sticky top-[64px] z-40 w-full">
          <SubHeader isEditMode={isEditMode} onToggleEdit={() => setIsEditMode(!isEditMode)} />
          <SubHeader recipient={recipient} recipientId={recipientId} />
        </div>

        <div className="mx-auto mt-8 w-full max-w-[1200px] p-5 sm:mt-8 sm:p-6 xl:mt-15 xl:p-0">
          {/* 버튼영역 */}
          <div className="mb-6 flex justify-end gap-3">
            <Button
              variant="outlined"
              size="custom"
              paddingX={16}
              paddingY={8}
              onClick={onToggleEdit}
            >
              {isEditMode ? '완료' : '편집'}
            </Button>
            {isEditMode ? (
              <Button
                variant="outlined"
                size="custom"
                paddingX={16}
                paddingY={8}
                onClick={() => handleDeletePaper(recipientId)}
              >
                <span className="text-[16px] font-bold">롤링페이퍼 삭제</span>
              </Button>
            ) : (
              ''
            )}
          </div>
          {/* 카드 리스트 영역 */}
          <MessageCardList recipientId={recipientId} isEditMode={isEditMode} />
        </div>
      </div>
    </Layout>
  );
};

export default PostedPage;
