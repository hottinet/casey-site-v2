import styled from '@emotion/styled';
import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { Box } from '../box/Box';
import { FlexBox } from '../box/FlexBox';
import { IconButton } from '../buttons/IconButton';
import { NextProjectButton } from '../buttons/NextProjectNavButton';
import { ContentContainer } from '../ContentContainer';
import { Divider } from '../Divider';
import { Hamburger } from '../icons/Hamburger';
import { Link } from '../Link';
import { SmNavMenu } from './SmNavMenu';

interface NavBarProps {
  layoutClassName?: string;
  nextPageHref?: string;
}

const NavBackground = styled('div')(({ theme, className }) => ({
  position: 'absolute',
  width: '100%',
  zIndex: -1,
  opacity: 0.9,
  transition: 'transform 0.2s ease-in-out',
  ...(!className && {
    backgroundColor: theme.colors.background,
  }),
}));

const navGap = 32;

const Nav = styled('nav')`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing[navGap]};
  height: 100%;
  justify-content: flex-start;
`;

const linkTextProps = {
  fontWeight: 'bold',
  variant: 'bodySmall',
  noHoverStyles: true,
} as const;

export function NavBar({ layoutClassName, nextPageHref }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const smUp = useBreakpointsAtLeast('sm');
  const [bgRef, setBgRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = throttle(() => {
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      // On resize to sizes where scrollHeight === innerHeight,
      // both scrollY and maxHeight end up as 0
      // which causes a divide by zero error and returns NaN
      const scrollPercent = window.scrollY / maxHeight || 0;
      // The navbar changes colors faster than the body
      // because the scroll position is "below" the navbar position
      // so we just cap it at 70% to stop it from looking TOO off
      const maxScrollPercent = Math.min(0.7, scrollPercent);
      bgRef!.style.transform = `translateY(-${maxScrollPercent * 100}%)`;
    }, 200);

    if (bgRef) {
      const pageHeight = document.body.scrollHeight;
      bgRef.style.height = `${pageHeight}px`;

      window.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onScroll);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [bgRef]);

  const navHeight = smUp ? NAV_BAR_HEIGHT : SM_NAV_BAR_HEIGHT;

  return (
    <>
      <Box height={navHeight} width="100%" />
      <FlexBox
        alignItems="center"
        backdropFilter="blur(2px)"
        backgroundColor="transparent"
        flexDirection="column"
        overflow="hidden"
        position="fixed"
        top={0}
        width="100%"
        zIndex={999}
      >
        <NavBackground
          className={layoutClassName}
          ref={(node) => {
            if (node) {
              setBgRef(node);
            }
          }}
        />
        <ContentContainer metaPage width="100%">
          <FlexBox
            alignItems="center"
            gap={navGap}
            height={navHeight}
            justifyContent={smUp ? 'flex-start' : 'space-between'}
          >
            <Link
              fontWeight="bold"
              href={HOME_ROUTE}
              internal
              label="Casey Bradford"
              noHoverStyles
              textTransform="uppercase"
            />
            {smUp ? (
              <Nav>
                <Link
                  href={HOME_ROUTE}
                  internal
                  label="Home"
                  {...linkTextProps}
                />
                <Link
                  href={ABOUT_ROUTE}
                  internal
                  label="About"
                  {...linkTextProps}
                />
              </Nav>
            ) : (
              <IconButton
                transform="translateX(25%)"
                onClick={() => setMenuOpen(true)}
              >
                <Hamburger
                  color="text"
                  title="Open menu"
                  titleId="nav-menu-button"
                />
              </IconButton>
            )}
          </FlexBox>
        </ContentContainer>
        <Divider bottom={0} position="absolute" width="100vw" />
        {smUp && <NextProjectButton nextPageHref={nextPageHref} />}
      </FlexBox>
      {!smUp && <SmNavMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />}
    </>
  );
}
