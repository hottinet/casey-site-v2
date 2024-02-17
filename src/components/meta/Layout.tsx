import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { NEXT_ROUTE_MAP } from '~/constants/routing';

import { FlexBox } from '../box/FlexBox';
import { Footer } from './Footer';
import Head from './Head';
import { NavBar } from './NavBar';

interface LayoutProps {
  pageTitle?: string;
  className?: string;
}

export function Layout({
  children,
  pageTitle,
  className,
}: PropsWithChildren<LayoutProps>) {
  const { pathname } = useRouter();
  const nextPath = NEXT_ROUTE_MAP[pathname];

  return (
    <>
      <Head title={pageTitle || 'Casey Bradford'} />
      <FlexBox
        className={className}
        flexDirection="column"
        height="100%"
        minHeight="100%"
        position="relative"
        width="100%"
      >
        <NavBar layoutClassName={className} />
        {children}
        <Footer nextPath={nextPath} />
      </FlexBox>
    </>
  );
}
