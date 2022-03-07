import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchDataAPI } from './features/dataApi';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/shared/globalStyle';
import theme from './components/shared/themeSettings';

import Header from './components/Header/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Jewelry from './pages/Jewelry';
import Electronics from './pages/Electronics';
import Checkout from './pages/Checkout';

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
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
