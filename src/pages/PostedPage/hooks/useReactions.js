import { useEffect, useState, useCallback } from 'react';

import api from '@/api/api.js';

export const useReactions = (recipientId) => {
  const [reactions, setReactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!recipientId) return;

    const fetchReactions = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/19-8/recipients/${recipientId}/reactions/?limit=100`);
        setReactions(res.results || []);
      } catch (err) {
        console.error('useReactions error: ', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReactions();
  }, [recipientId]);

  const addReaction = useCallback(
    async (emoji) => {
      try {
        await api.post(`/19-8/recipients/${recipientId}/reactions/`, {
          emoji,
          type: 'increase',
        });
        const res = await api.get(`/19-8/recipients/${recipientId}/reactions/?limit=100`);
        setReactions(res.results || []);
      } catch (err) {
        console.error(err);
      }
    },
    [recipientId]
  );

  return { reactions, loading, error, addReaction };
};
