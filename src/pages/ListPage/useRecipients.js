import { useState, useEffect } from 'react';
import api from '../../api/api';

const useRecipients = () => {
  const [recipients, setRecipients] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        const res = await api.get('/19-8/recipients/');
        setRecipients(res);
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

export default useRecipients;
