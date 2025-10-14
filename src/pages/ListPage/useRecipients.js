import { useState, useEffect } from 'react';

import api from '@/api/api';

export const useRecipients = () => {
  const [recipients, setRecipients] = useState({ popular: [], recent: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    const skeletonDlay = 200; // 0.2초 로딩일 때 스켈레톤 표시
    const skeletonTimer = setTimeout(() => setShowSkeleton(true), skeletonDlay);

    const fetchRecipients = async () => {
      try {
        const [popularRes, recentRes] = await Promise.all([
          api.get('/19-8/recipients/?sort=like'),
          api.get('/19-8/recipients/'),
        ]);
        setRecipients({ popular: popularRes, recent: recentRes });
      } catch (error) {
        setError(error);
        console.log('data loading error');
      } finally {
        clearTimeout(skeletonTimer); // 스켈레톤 타이머 유지 중일 시 취소
        setLoading(false);
      }
    };
    fetchRecipients();
  }, []);

  return { recipients, error, loading, showSkeleton };
};
