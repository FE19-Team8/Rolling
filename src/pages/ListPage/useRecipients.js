import api from '@/api/api';
import { useState, useEffect } from 'react';

export const useRecipients = () => {
  const [recipients, setRecipients] = useState({ popular: [], recent: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        setLoading(false);
      }
    };
    fetchRecipients();
  }, []);

  return { recipients, error, loading };
};
