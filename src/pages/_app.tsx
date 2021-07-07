import type { AppProps /* , AppContext */ } from 'next/app';
import { css, Global, ThemeProvider } from '@emotion/react';
import theme from '~/constants/theme';

const marPadZero = css`
  margin: 0;
  padding: 0;
`;

const baseStyle = css`
  height: 100%;
  width: 100%;
  ${marPadZero};
  font-size: 1rem;
  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
`;

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
  html {
    ${baseStyle};
  }
  body {
    ${baseStyle};
    position: relative;
    box-sizing: border-box;
  }
  #app {
    ${baseStyle};
  }
  div {
    box-sizing: border-box;
  }
  p {
    ${marPadZero};
  }
  h1 {
    ${marPadZero};
  }
  h2 {
    ${marPadZero};
  }
  h3 {
    ${marPadZero};
  }
`;

const Page: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ThemeProvider>
);

export default Page;
