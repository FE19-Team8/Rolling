//import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button/Button';

const MessageCardList = () => {
  const PER_PAGE = 9;

  const messages = Array.from({ length: 80 }, (__, i) => ({
    id: i + 1,
    author: `작성자 ${i + 1}`,
    content: `축하 메시지 ${i + 1}`,
  }));

  //현재 보여줄 메세지 (6개씩)
  const [displayedMessages, setDisplayedMessages] = useState(
    messages.slice(0, PER_PAGE),
  );
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // 관찰 대상 div를 위한 ref
  // useRef는 React에서 변경되어도 리렌더링을 일으키지 않는 값 저장소
  // 아직 DOM이 만들어지기 전(초기 렌더 직전)에는 값이 null
  const observerRef = useRef(null);

  useEffect(() => {
    // 감시 콜백 함수
    // div가 화면에 나타났을 때 실행할 함수
    const callback = (entries) => {
      const entry = entries[0];

      if (!entry.isIntersecting || isLoading) return;
      if (displayedMessages.length >= messages.length) return;

      setIsLoading(true);
      setTimeout(() => {
        const nextPage = page + 1;
        const nextCount = Math.min(nextPage * PER_PAGE, messages.length);
        const newItems = messages.slice(0, nextCount);

        setDisplayedMessages(newItems);
        setPage(nextPage);
        setIsLoading(false);
      }, 500);
    };

    // 옵저버 생성
    // 스크롤 감시 객체 만들기
    // IntersectionObserver: 브라우저 내장 클래스, 특정 요소가 화면(또는 특정 스크롤 영역)에 들어왔는지 감시
    // .observe(element)	특정 요소 감시 시작
    // .unobserve(element)	특정 요소 감시 중단
    // .disconnect()	모든 감시 종료 및 해제
    const observer = new IntersectionObserver(callback, {
      root: null, // null이면 뷰포트 기준
      rootMargin: '0px 0px 200px 0px', // 바닥 200px 전에 미리 감지
      threshold: 0, // 0이면 '한 픽셀이라도 보이면' 감지
    });

    // div를 관찰 시작
    const target = observerRef.current;
    if (target) observer.observe(target);

    // 클린업 (컴포넌트 언마운트 시 관찰 해제)
    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [displayedMessages.length, isLoading]);

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
      {displayedMessages.map((msg) => (
        <div
          key={msg.id}
          className="rounded-xl border p-4 bg-white flex flex-col gap-2"
        >
          <p className="font-semibold">{msg.author}</p>
          <p className="text-gray-700">{msg.content}</p>
        </div>
      ))}
      {/* 감시용 div (맨 아래) */}
      <div ref={observerRef} className="h-10 col-span-full bg-transparent" />

      {/* 로딩 상태 표시 */}
      {isLoading && (
        <p className="col-span-full text-center text-gray-500 py-4">
          로딩 중...
        </p>
      )}
    </div>
  );
};

export default MessageCardList;
