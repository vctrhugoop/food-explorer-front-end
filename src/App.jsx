import { Toaster } from 'sonner';
import { Routes } from './routes';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { AuthProvider } from './hooks/auth';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Toaster
        richColors
        position='top-right'
        toastOptions={{
          className: 'my-toast',
        }}
      />
    </ThemeProvider>
  );
}
