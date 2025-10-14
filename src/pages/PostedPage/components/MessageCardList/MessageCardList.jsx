import { Link } from 'react-router-dom';

import Button from '@/components/Button/Button';
import MessageCard from '@/pages/PostedPage/components/MessageCard/MessageCard';
import Skeleton from '@/components/Skeleton/Skeleton';
import usePaginatedMessages from '@/pages/PostedPage/hooks/usePaginatedMessages';
import useInfiniteObserver from '@/pages/PostedPage/hooks/useIntersectionObserver';
import useDeleteMessage from '@/pages/PostedPage/hooks/useDeleteMessage';
const MessageCardList = ({ recipientId, isEditMode }) => {
  // 데이터 로딩 훅
  const { messages, setMessages, isLoading, hasMore, loadMore } = usePaginatedMessages(
    recipientId,
    5,
    3
  );
  // 스크롤 감지 훅
  const observerRef = useInfiniteObserver(loadMore, isLoading, hasMore);
  // 메세지 삭제
  const { handleDelete, isDeleting } = useDeleteMessage(setMessages);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {/* 첫 번째 메세지 카드 고정*/}
      <Link
        to={`/post/${recipientId}/message`}
        aria-label="새 메시지 작성 페이지로 이동"
        className="flex h-[280px] items-center justify-center rounded-[16px] bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
      >
        <Button shape="circle" iconName="plus" variant="gray" />
      </Link>
      {/* 카드 리스트 */}
      {messages.map((msg) => (
        <MessageCard
          key={msg.id}
          messageId={msg.id}
          sender={msg.sender}
          profileImageURL={msg.profileImageURL}
          relationship={msg.relationship}
          content={msg.content}
          createdAt={msg.createdAt}
          font={msg.font}
          deletable={isEditMode}
          onDelete={() => handleDelete(msg.id)}
        />
      ))}

      {isDeleting && <p>삭제 중입니다...</p>}

      {/* 로딩  스켈레톤 */}
      {isLoading && (
        <>
          {Array.from({ length: 3 }).map((_z, i) => (
            <Skeleton key={i} variant="base" shape="rect" width="100%" height="280px" />
          ))}
        </>
      )}

      {/* 감시용 div (맨 아래) */}
      <div ref={observerRef} className="col-span-full h-[1px] bg-transparent" />
    </div>
  );
};

export default MessageCardList;
