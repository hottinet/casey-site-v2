import { PropsWithChildren } from 'react';

import { FlexBox } from '../box/FlexBox';
import { Footer } from './Footer';
import Head from './Head';
import { NavBar } from './NavBar';

interface LayoutProps {
  pageTitle?: string;
  className?: string;
  nextPageHref?: string;
  nextPageLabel?: string;
}

export function Layout({
  children,
  pageTitle,
  className,
  nextPageHref,
  nextPageLabel,
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
          layoutClassName={className}
          nextPageHref={nextPageHref}
          nextPageLabel={nextPageLabel}
        />
        {children}
        <Footer />
      </FlexBox>
    </>
  );
}
