import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from './components/shared/themeSettings';
import { store } from './app/store';

const AllProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';

export { customRender as render };
