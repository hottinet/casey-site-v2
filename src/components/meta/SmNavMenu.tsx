import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';

import { FlexBox } from '../box/FlexBox';
import { IconButton } from '../buttons/IconButton';
import { ContentContainer } from '../ContentContainer';
import { X } from '../icons/X';
import { Link } from '../Link';
import { Text } from '../typography/Text';

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

const sharedLinkTextProps = {
  fontFamily: 'title',
  fontWeight: 600,
  lineHeight: 1.1,
  variant: 'title-lg',
} as const;

export function SmNavMenu({ isOpen, setIsOpen }: SmNavMenuProps) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setTop(window.scrollY);
    } else {
      setTop(0);
    }
  }, [isOpen]);

  return (
    <FlexBox
      backgroundColor="red"
      bottom={0}
      flexDirection="column"
      height="100%"
      left={isOpen ? 0 : '9999px'}
      position="absolute"
      top={`${top}px`}
      width="100%"
      zIndex={9999}
    >
      {isOpen && <Global styles={openGlobalStyles} />}
      <ContentContainer display="flex" flexDirection="column">
        <IconButton
          alignSelf="end"
          transform="translateX(25%)"
          width="fit-content"
          onClick={() => setIsOpen(false)}
        >
          <X color="text" title="Close menu" titleId="close-menu-icon" />
        </IconButton>
        <nav>
          <NavList>
            <li>
              <Link href={HOME_ROUTE} internal onClick={() => setIsOpen(false)}>
                <Text {...sharedLinkTextProps}>Home</Text>
              </Link>
            </li>
            <li>
              <Link
                href={ABOUT_ROUTE}
                internal
                onClick={() => setIsOpen(false)}
              >
                <Text {...sharedLinkTextProps}>About</Text>
              </Link>
            </li>
          </NavList>
        </nav>
      </ContentContainer>
    </FlexBox>
  );
}
