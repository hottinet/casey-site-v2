import { useRouter } from 'next/router';
import { useState } from 'react';

import { NEXT_ROUTE_MAP, RESTRICTED_ROUTES } from '~/constants/routing';
import { AuthContext } from '~/contexts/authContext';

import AuthOverlay from './AuthOverlay';
import Footer from './Footer';
import Head from './Head';
import NavBar from './NavBar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { pathname } = useRouter();
  const isRestrited = RESTRICTED_ROUTES.includes(pathname);
  const nextPath = NEXT_ROUTE_MAP[pathname];

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      <Head title="Casey Bradford" />
      <NavBar />
      {!isAuthorized && isRestrited ? <AuthOverlay /> : children}
      <Footer nextPath={nextPath} />
    </AuthContext.Provider>
  );
};

export default Layout;
