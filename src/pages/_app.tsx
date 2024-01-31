import { css, Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import type { AppProps /* , AppContext */ } from 'next/app';
import { useEffect, useRef, useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import theme from '~/constants/theme';
import { BreakpointsContext } from '~/contexts/breakpointsContext';
import { PortalImageContext } from '~/contexts/portalImageContext';
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
    color: ${theme.colors.text};
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

const GlobalWrapper = styled(FlexBox)`
  width: 100%;
  overflow: hidden;
  ${theme.breakpoints.sm} {
    cursor: url('/Misc/cursor.png'), auto;
  }
`;

const HoverTarget = styled.div`
  position: relative;
  z-index: 999;
`;

const Page: React.FC<AppProps> = ({ Component, pageProps }) => {
  const portalImageRef = useRef<HTMLDivElement>(null);

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
        <PortalImageContext.Provider value={portalImageRef}>
          <Global styles={globalStyles} />
          <GlobalWrapper flexDirection="column">
            <HoverTarget ref={portalImageRef} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </GlobalWrapper>
        </PortalImageContext.Provider>
      </BreakpointsContext.Provider>
    </ThemeProvider>
  );
};

export default Page;
