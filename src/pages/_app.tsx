import { css, Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import type { AppProps /* , AppContext */ } from 'next/app';
import { useEffect, useRef, useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import theme from '~/constants/theme';
import { AuthorizationProvider } from '~/contexts/authorizationContext';
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
  @import url('https://use.typekit.net/lrw6qnz.css');
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  html {
    ${baseStyle};
  }
  body {
    ${baseStyle};
    position: relative;
    box-sizing: border-box;
    font-family: ${theme.fontFamily.normal};
    color: ${theme.colors.text};
  }
  #app,
  #__next {
    ${baseStyle};
  }
  div,
  input,
  select,
  textarea,
  ul,
  li,
  a {
    box-sizing: border-box;
  }
  p,
  h1,
  h2,
  h3,
  pre,
  figure,
  ul,
  li {
    ${marPadZero};
  }
  li {
    list-style: none;
  }
  ul {
    list-style: none;
  }
`;

const GlobalWrapper = styled(FlexBox)`
  width: 100%;
  overflow: hidden;
  cursor:
    url('/Misc/cursor.png') 12 12,
    auto;
`;

const HoverTarget = styled.div`
  position: relative;
  z-index: 999;
`;

function Page({ Component, pageProps }: AppProps) {
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
      <AuthorizationProvider>
        <BreakpointsContext.Provider value={windowBreakpoints}>
          <PortalImageContext.Provider value={portalImageRef}>
            <Global styles={globalStyles} />
            <GlobalWrapper flexDirection="column" minHeight="100%">
              <HoverTarget ref={portalImageRef} />
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Component {...pageProps} />
            </GlobalWrapper>
          </PortalImageContext.Provider>
        </BreakpointsContext.Provider>
      </AuthorizationProvider>
    </ThemeProvider>
  );
}

export default Page;
