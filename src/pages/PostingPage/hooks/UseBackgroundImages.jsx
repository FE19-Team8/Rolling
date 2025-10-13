import { useEffect, useState } from 'react';

export default function useBackgroundImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('https://rolling-api.vercel.app/background-images/');
        const data = await res.json();
        if (mounted && Array.isArray(data.imageUrls)) {
          setImages(data.imageUrls.slice(0, 4));
        }
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return images;
}
