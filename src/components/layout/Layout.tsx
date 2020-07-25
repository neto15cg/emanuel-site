import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global.styles';
import { LayoutProps } from './Layout.types';
import { theme } from '@styles/theme/theme';

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
