import { useEffect, useRef, useState } from 'react';

export default function useInfiniteScrollMessages({ data, initialCount = 5, nextCount = 3 }) {
  const [displayedMessages, setDisplayedMessages] = useState(data.slice(0, initialCount));
  const [currentIndex, setCurrentIndex] = useState(initialCount); // 현재까지 불러온 index
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting || isLoading) return;
      if (currentIndex >= data.length) return;

      setIsLoading(true);
      setTimeout(() => {
        // 다음 3개 항목만 추가
        const nextItems = data.slice(currentIndex, currentIndex + nextCount);
        setDisplayedMessages((prev) => [...prev, ...nextItems]);
        setCurrentIndex((prev) => prev + nextCount);
        setIsLoading(false);
      }, 500);
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px 0px 200px 0px',
      threshold: 0,
    });

    const target = observerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [isLoading, currentIndex, data]);

  return { displayedMessages, observerRef, isLoading };
}
