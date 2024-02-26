import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';

import { FlexBox } from '../box/FlexBox';
import { IconButton } from '../buttons/IconButton';
import { ContentContainer } from '../ContentContainer';
import { X } from '../icons/X';
import { Link } from '../Link';
import { BackgroundOverride } from './BackgroundOverride';
import { footerLinks } from './Footer';

const NavList = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[32]};
`;

const openGlobalStyles = css`
  body {
    overflow: hidden;
  }
`;

interface SmNavMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const linkButtonData: {
  href: string;
  text: string;
}[] = [
  {
    href: HOME_ROUTE,
    text: 'Home',
  },
  {
    href: ABOUT_ROUTE,
    text: 'About',
  },
];

export function SmNavMenu({ isOpen, setIsOpen }: SmNavMenuProps) {
  const [top, setTop] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTop(window.scrollY);
    } else {
      setTop(0);
    }
  }, [isOpen]);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setIsOpen(false));
    router.events.on('routeChangeError', () => setIsOpen(false));

    return () => {
      router.events.off('routeChangeComplete', () => setIsOpen(false));
      router.events.off('routeChangeError', () => setIsOpen(false));
    };
  });

  return (
    <>
      {isOpen && <BackgroundOverride color="red" />}

      <FlexBox
        backgroundColor="red"
        bottom={0}
        flexDirection="column"
        height="100vh"
        left={isOpen ? 0 : '9999px'}
        overflow="scroll"
        position="absolute"
        top={`${top}px`}
        width="100%"
        zIndex={9999}
      >
        {isOpen && <Global styles={openGlobalStyles} />}
        <ContentContainer flexDirection="column" height="100%">
          <IconButton
            alignSelf="end"
            // X button is slightly misalgined with menu underneath, so we just scoot it
            transform="translate(25%, -6px)"
            width="fit-content"
            onClick={() => setIsOpen(false)}
          >
            <X color="text" title="Close menu" titleId="close-menu-icon" />
          </IconButton>
          <nav>
            <NavList>
              {linkButtonData.map((ld) => (
                <li key={ld.href}>
                  <Link
                    href={ld.href}
                    internal
                    label={ld.text}
                    variant="headline2"
                  />
                </li>
              ))}
            </NavList>
          </nav>
          <FlexBox
            alignItems="center"
            flexDirection="column"
            gap={32}
            marginBottom={32}
            marginTop="auto"
          >
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                label={link.text}
                variant="subtitle2"
              />
            ))}
          </FlexBox>
        </ContentContainer>
      </FlexBox>
    </>
  );
}
