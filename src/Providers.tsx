import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from 'state';
import { useTheme } from 'state/user/hooks';

const ThemeProvider: React.FC = ({ children }) => {
  const [componentMounted, setComponentMounted] = useState<boolean>(false);
  const [isDark] = useTheme();

  useEffect(() => {
    setComponentMounted(true);
    const timeOut = setTimeout(() => {
      document.documentElement.classList.add('nightwind');
    }, 100);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  if (!componentMounted) return <div />;
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
