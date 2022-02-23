import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/shared/globalStyle';
import theme from './components/shared/themeSettings';

import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main></main>
    </ThemeProvider>
  );
}

export default App;
