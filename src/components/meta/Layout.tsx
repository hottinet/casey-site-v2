import { useRouter } from 'next/router';
import { PropsWithChildren, useMemo, useState } from 'react';

import { NEXT_ROUTE_MAP, RESTRICTED_ROUTES } from '~/constants/routing';
import { AuthContext } from '~/contexts/authContext';

import { FlexBox } from '../box/FlexBox';
import AuthOverlay from './AuthOverlay';
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
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { pathname } = useRouter();
  const isRestricted = RESTRICTED_ROUTES.includes(pathname);
  const nextPath = NEXT_ROUTE_MAP[pathname];

  const authContextVal = useMemo(
    () => ({
      isAuthorized,
      setIsAuthorized,
    }),
    [isAuthorized, setIsAuthorized]
  );

  return (
    <AuthContext.Provider value={authContextVal}>
      <Head title={pageTitle || 'Casey Bradford'} />
      <FlexBox
        backgroundColor="red"
        className={className}
        flexDirection="column"
        height="100%"
        width="100%"
      >
        <NavBar layoutClassName={className} />
        {!isAuthorized && isRestricted ? <AuthOverlay /> : children}
        <Footer nextPath={nextPath} />
      </FlexBox>
    </AuthContext.Provider>
  );
}
