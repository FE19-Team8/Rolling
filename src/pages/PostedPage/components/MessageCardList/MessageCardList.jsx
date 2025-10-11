import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';
import MessageCard from '@/pages/PostedPage/components/MessageCard/MessageCard';
import { MOCK_MESSAGES } from '@/pages/PostedPage/components/MessageCardList/messages';

const MessageCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* 첫 번째 메세지 카드 고정*/}
      <Link
        to="/post"
        aria-label="새 메시지 작성 페이지로 이동"
        className="flex justify-center items-center h-[280px] rounded-[16px] bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
      >
        <Button shape="circle" iconName="plus" variant="gray" />
      </Link>
      {/* 카드 리스트 */}
      {MOCK_MESSAGES.map((msg) => (
        <MessageCard
          key={msg.id}
          sender={msg.sender}
          profileImageURL={msg.profileImageURL}
          relationship={msg.relationship}
          content={msg.content}
          createdAt={msg.createdAt}
        />
      ))}
    </div>
  );
};

export default MessageCardList;
