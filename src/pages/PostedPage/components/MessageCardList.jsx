//import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';

const MessageCardList = () => {
  // 임시 데이터
  const messages = [
    { id: 1, author: '유진', content: '축하해 🎉' },
    { id: 2, author: '톰', content: '행복하길 바래 😄' },
    { id: 3, author: '수지', content: '화이팅!' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* 첫 번째 메세지 카드 고정*/}
      <div className="flex justify-center items-center h-[280px] rounded-[16px] bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]">
        <Button shape="circle" iconName="plus" variant="gray" />
      </div>
      {/* <Link
          to="/post"
          aria-label="새 메시지 작성 페이지로 이동"
          className="flex justify-center items-center h-[280px] rounded-[16px] bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
        >
          <Button shape="circle" iconName="plus" variant="gray" />
        </Link> */}
      {/* 임시 카드 리스트*/}
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="rounded-xl border p-4 bg-white flex flex-col gap-2"
        >
          <p className="font-semibold">{msg.author}</p>
          <p className="text-gray-700">{msg.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageCardList;
