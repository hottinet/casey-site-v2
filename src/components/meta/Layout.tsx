import { useRouter } from 'next/router';
import { PropsWithChildren, useContext } from 'react';

import { RESTRICTED_ROUTES } from '~/constants/routing';
import { AuthorizationContext } from '~/contexts/authorizationContext';
import { Color } from '~/typings/theme';

import { FlexBox, FlexBoxProps } from '../box/FlexBox';
import { Footer } from './Footer';
import Head from './Head';
import { NavBar } from './NavBar';
import { Unauthorized } from './Unauthorized';

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
  const { isAuthorized } = useContext(AuthorizationContext);
  const { pathname } = useRouter();
  const cantView = !isAuthorized && RESTRICTED_ROUTES.includes(pathname);

  return (
    <>
      <Head title={pageTitle || 'Casey Bradford'} />
      <FlexBox
        alignItems="center"
        className={className}
        flexDirection="column"
        height="100%"
        minHeight={cantView ? '100vh' : '100%'}
        position="relative"
        width="100%"
      >
        <NavBar
          fallbackNavBackground={fallbackNavBackground}
          layoutClassName={className}
          nextPageHref={nextPageHref}
          nextPageLabel={nextPageLabel}
        />
        {cantView ? <Unauthorized /> : children}
        <Footer
          nextPageHref={nextPageHref}
          nextPageLabel={nextPageLabel}
          paddingTop={footerPaddingTop}
        />
      </FlexBox>
    </>
  );
}
