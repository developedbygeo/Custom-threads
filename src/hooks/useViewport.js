import { useState, useEffect } from 'react';

const useViewport = () => {
  const [windowWidth, setwindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};
export default useViewport;
