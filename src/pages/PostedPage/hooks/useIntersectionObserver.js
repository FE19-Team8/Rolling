import { useEffect, useRef } from 'react';

export default function useInfiniteObserver(onIntersect, isLoading, hasMore) {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting || isLoading || !hasMore) return;
      onIntersect();
    });

    const target = observerRef.current;
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [onIntersect, isLoading, hasMore]);

  return observerRef;
}
