import { css, Global, ThemeProvider } from '@emotion/react';
import type { AppProps /* , AppContext */ } from 'next/app';
import { useEffect, useState } from 'react';

import theme from '~/constants/theme';
import { BreakpointsContext } from '~/contexts/breakpointsContext';
import { BreakpointSize } from '~/typings/theme';

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

const Page: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [windowBreakpoints, setWindowBreakpoints] = useState<BreakpointSize[]>([
    'xxs',
  ]);

  useEffect(() => {
    Object.keys(theme.breakpointValues).forEach((key, i, arr) => {
      const queryAdjective = key === 'xss' ? 'max' : 'min';
      const query = window.matchMedia(
        `(${queryAdjective}-width: ${
          theme.breakpointValues[key as BreakpointSize]
        }px)`
      );
      if (query.matches) {
        setWindowBreakpoints(arr.slice(0, i + 1) as BreakpointSize[]);
      }
      query.addEventListener('change', (e) => {
        setWindowBreakpoints(
          arr.slice(0, e.matches ? i + 1 : i) as BreakpointSize[]
        );
      });
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BreakpointsContext.Provider value={windowBreakpoints}>
        <Global styles={globalStyles} />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </BreakpointsContext.Provider>
    </ThemeProvider>
  );
};

export default Page;
