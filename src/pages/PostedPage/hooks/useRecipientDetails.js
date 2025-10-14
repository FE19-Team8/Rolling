// src/hooks/useRecipientDetails.js
import { useState, useEffect } from 'react';

import { getTargetPaper } from '@/api/papers.js';

export const useRecipientDetails = (recipientId) => {
  const [recipient, setRecipient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!recipientId) return;

    const fetchRecipientDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        // getTargetPaper는 axios 호출이므로 Promise 반환
        const data = await getTargetPaper(recipientId);
        setRecipient(data); // api.js에서 interceptor로 res.data 반환
      } catch (err) {
        console.error('Failed to fetch recipient details:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipientDetails();
  }, [recipientId]);

  return { recipient, loading, error };
};
