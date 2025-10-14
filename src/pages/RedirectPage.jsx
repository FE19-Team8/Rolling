import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectPage() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const to = params.get('to');

  useEffect(() => {
    if (to) {
      navigate(to, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [to, navigate]);
  return <div>Redirecting...</div>;
}
