import { useEffect, useRef, useState } from 'react';

export default function useInfiniteScrollMessages({ data, initialCount = 5, nextCount = 3 }) {
  const [displayedMessages, setDisplayedMessages] = useState(data.slice(0, initialCount));
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting || isLoading) return;
      if (displayedMessages.length >= data.length) return;

      setIsLoading(true);
      setTimeout(() => {
        const nextPage = page + 1;
        const nextCountTotal = initialCount + (nextPage - 1) * nextCount;
        const newItems = data.slice(0, nextCountTotal);

        setDisplayedMessages(newItems);
        setPage(nextPage);
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
  }, [displayedMessages.length, isLoading, data, page]);

  return { displayedMessages, observerRef, isLoading };
}
