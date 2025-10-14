import { useParams } from 'react-router-dom';
import { useState } from 'react';

import Layout from '@/pages/Layout.jsx';
import Background from '@/pages/PostedPage/components/Background/Background.jsx';
import MessageCardList from '@/pages/PostedPage/components/MessageCardList/MessageCardList.jsx';
import SubHeader from '@/pages/PostedPage/components/SubHeader/SubHeader.jsx';
import useDeletePaper from '@/pages/PostedPage/hooks/useDeletePaper.js';
import Button from '@/components/Button/Button.jsx';
import CommonHead from '@/meta/CommonHead.jsx';

import { useRecipientDetails } from './hooks/useRecipientDetails.js';

const PostedPage = () => {
  const { id: recipientId } = useParams();
  const META_DATA = {
    title: '롤링페이퍼 구경하기 | 따뜻한 마음이 담긴 이야기들',
    desc: '소중한 사람에게 전해진 진심 어린 메시지들을 만나보세요.',
    image: 'https://rolling-xsll.vercel.app/og/og_posted.png',
    canonical: `https://rolling-xsll.vercel.app/post/${recipientId}`,
  };
  const [isEditMode, setIsEditMode] = useState(false);

  const onToggleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const { handleDeletePaper } = useDeletePaper();
  const { recipient } = useRecipientDetails(recipientId);

  if (recipient == null) return;
  const color = recipient.backgroundColor;
  const imageURL = recipient.backgroundImageURL;

  return (
    <Layout>
      <Background color={color} imageURL={imageURL} />
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
