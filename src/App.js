import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchDataAPI } from './features/dataApi';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/shared/globalStyle';
import theme from './components/shared/themeSettings';

import Skeleton from './components/UI/Skeleton';
import Header from './components/Header/Header';

const Landing = React.lazy(() => import('./pages/Landing'));
const Home = React.lazy(() => import('./pages/Home'));
const Men = React.lazy(() => import('./pages/Men'));
const Women = React.lazy(() => import('./pages/Women'));
const Jewelry = React.lazy(() => import('./pages/Jewelry'));
const Electronics = React.lazy(() => import('./pages/Electronics'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAPI());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Suspense fallback={<Skeleton />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="home" element={<Home />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="jewelry" element={<Jewelry />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </ThemeProvider>
  );
};

export default App;
