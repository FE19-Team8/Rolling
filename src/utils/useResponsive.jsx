import { useState, useEffect } from 'react';

const BREAK_POINT = {
  md: 768,
  xl: 1280,
};

export default function useResponsive() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < BREAK_POINT.md;
  const isTablet = width >= BREAK_POINT.md && width < BREAK_POINT.xl;
  const isDeskTop = BREAK_POINT.xl <= width;

  return { isMobile, isTablet, isDeskTop };
}
