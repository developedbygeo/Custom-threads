import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  const main = document.querySelector('main');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (main) {
      main.scrollTo(0, 0);
    }
  }, [pathname, main]);

  return <>{children}</>;
};

export default ScrollToTop;
