import { useState, useEffect, useCallback, useRef } from 'react';
import { getMessageList } from '@/api/messages';

export default function usePaginatedMessages(recipientId, initialLimit = 8, nextLimit = 3) {
  //메세지
  const [messages, setMessages] = useState([]);
  //다음
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const initialLoadDone = useRef(false);

  // recipientId 변경 시 초기화
  useEffect(() => {
    if (!recipientId) return;
    setMessages([]);
    setNextUrl(null);
    setHasMore(true);
    initialLoadDone.current = false;
  }, [recipientId, initialLimit, nextLimit]);

  const loadMore = useCallback(async () => {
    // 중복 요청 방지
    if (isLoading || !hasMore || !recipientId) return;
    setIsLoading(true);

    try {
      // 처음엔 initialLimit, 이후엔 nextLimit
      const options = nextUrl
        ? { next: nextUrl, limit: nextLimit } // 다음 페이지
        : { limit: initialLimit }; // 첫 페이지
      const res = await getMessageList(recipientId, options);

      setMessages((prev) => {
        // 중복 방지: 이미 있는 id는 제외
        const existingIds = new Set(prev.map((msg) => msg.id));
        const newMessages = (res.results || []).filter((msg) => !existingIds.has(msg.id));
        return [...prev, ...newMessages];
      });
      setNextUrl(res.next);
      setHasMore(Boolean(res.next));
    } catch (error) {
      console.error('메시지 불러오기 실패:', error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [recipientId, initialLimit, nextLimit, nextUrl, hasMore, isLoading]);

  useEffect(() => {
    if (recipientId && !initialLoadDone.current) {
      initialLoadDone.current = true;
      loadMore();
    }
  }, [recipientId, loadMore]);

  return { messages, setMessages, isLoading, hasMore, loadMore };
}
