import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';
import MessageCard from '@/pages/PostedPage/components/MessageCard/MessageCard';
import { MOCK_MESSAGES } from '@/pages/PostedPage/components/MessageCardList/messages';
import Skeleton from '@/components/Skeleton/Skeleton';
import useInfiniteScrollMessages from '@/pages/PostedPage/hooks/useInfiniteScroll';

const MessageCardList = () => {
  const { displayedMessages, observerRef, isLoading } =
    useInfiniteScrollMessages({
      data: MOCK_MESSAGES,
      initialCount: 5,
      nextCount: 3,
    });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {/* 첫 번째 메세지 카드 고정*/}
      <Link
        to="/post"
        aria-label="새 메시지 작성 페이지로 이동"
        className="flex h-[280px] items-center justify-center rounded-[16px] bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
      >
        <Button shape="circle" iconName="plus" variant="gray" />
      </Link>
      {/* 카드 리스트 */}
      {displayedMessages.map((msg) => (
        <MessageCard
          key={msg.id}
          sender={msg.sender}
          profileImageURL={msg.profileImageURL}
          relationship={msg.relationship}
          content={msg.content}
          createdAt={msg.createdAt}
        />
      ))}

      {/* 감시용 div (맨 아래) */}
      <div ref={observerRef} className="h-[1px] col-span-full bg-transparent" />

      {/* 로딩  스켈레톤 */}
      {isLoading && (
        <>
          {Array.from({ length: 3 }).map((_z, i) => (
            <Skeleton
              key={i}
              variant="base"
              shape="rect"
              width="100%"
              height="280px"
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MessageCardList;
