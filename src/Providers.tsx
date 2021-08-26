import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from 'state';
import { useTheme } from 'state/user/hooks';

const ThemeProvider: React.FC = ({ children }) => {
  const [isDark] = useTheme();

  if (isDark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      document.documentElement.classList.add('nightwind');
    }, 100);
    return () => clearTimeout(timeOut);
  }, []);

  return <>{children}</>;
};

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </HelmetProvider>
    </Provider>
  );
};

export default Providers;
