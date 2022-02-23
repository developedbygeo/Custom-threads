import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/shared/globalStyle';
import theme from './components/shared/themeSettings';

import Header from './components/Header/Header';
import Landing from './pages/Landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
