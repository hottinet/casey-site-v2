import { PropsWithChildren } from 'react';

import { Color } from '~/typings/theme';

import { FlexBox, FlexBoxProps } from '../box/FlexBox';
import { Footer } from './Footer';
import Head from './Head';
import { NavBar } from './NavBar';

interface LayoutProps {
  pageTitle?: string;
  className?: string;
  nextPageHref?: string;
  nextPageLabel?: string;
  footerPaddingTop?: FlexBoxProps['paddingTop'];
  fallbackNavBackground?: Color;
}

export function Layout({
  children,
  pageTitle,
  className,
  nextPageHref,
  nextPageLabel,
  footerPaddingTop,
  fallbackNavBackground,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head title={pageTitle || 'Casey Bradford'} />
      <FlexBox
        alignItems="center"
        className={className}
        flexDirection="column"
        height="100%"
        minHeight="100%"
        position="relative"
        width="100%"
      >
        <NavBar
          fallbackNavBackground={fallbackNavBackground}
          layoutClassName={className}
          nextPageHref={nextPageHref}
          nextPageLabel={nextPageLabel}
        />
        {children}
        <Footer
          nextPageHref={nextPageHref}
          nextPageLabel={nextPageLabel}
          paddingTop={footerPaddingTop}
        />
      </FlexBox>
    </>
  );
}
