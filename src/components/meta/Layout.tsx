import { useRouter } from 'next/router';
import { PropsWithChildren, useMemo, useState } from 'react';

import { NEXT_ROUTE_MAP, RESTRICTED_ROUTES } from '~/constants/routing';
import { AuthContext } from '~/contexts/authContext';

import AuthOverlay from './AuthOverlay';
import { Footer } from './Footer';
import Head from './Head';
import { NavBar } from './NavBar';

export function Layout({ children }: PropsWithChildren<unknown>) {
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
      <Head title="Casey Bradford" />
      <NavBar />
      {!isAuthorized && isRestricted ? <AuthOverlay /> : children}
      <Footer nextPath={nextPath} />
    </AuthContext.Provider>
  );
}
