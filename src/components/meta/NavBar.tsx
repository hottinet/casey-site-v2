import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { Box } from '../box/Box';
import { FlexBox } from '../box/FlexBox';
import { ContentContainer } from '../ContentContainer';
import { Divider } from '../Divider';
import { Link } from '../Link';
import { Text } from '../typography/Text';

const NavBackground = styled('div')`
  position: absolute;
  width: 100%;
  z-index: -1;
  opacity: 0.9;
  /* backdrop-filter: blur(100px); */
`;

interface NavBarProps {
  layoutClassName?: string;
}

export function NavBar({ layoutClassName }: NavBarProps) {
  const smUp = useBreakpointsAtLeast('sm');
  const [bgRef, setBgRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bgRef) {
      const pageHeight = document.getElementsByTagName('html')[0].scrollHeight;
      bgRef.style.height = `${pageHeight}px`;

      // const onScroll =
    }
  }, [bgRef]);

  if (smUp) {
    return (
      <>
        {/* Height of the navbar */}
        <Box height={pxToRem(66)} width="100%" />
        <Box
          backdropFilter="blur(2px)"
          backgroundColor="transparent"
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
          <ContentContainer>
            <FlexBox
              alignItems="center"
              gap={32}
              height="fit-content"
              marginY={16}
            >
              <Text as="p" fontWeight={600} textTransform="uppercase">
                Casey Bradford
              </Text>
              <Link href={HOME_ROUTE} internal>
                <Text fontWeight={600}>Home</Text>
              </Link>
              <Link href={ABOUT_ROUTE} internal>
                <Text fontWeight={600}>About</Text>
              </Link>
            </FlexBox>
          </ContentContainer>
          <Divider />
        </Box>
      </>
    );
  }

  return <div>sm screen nav</div>;
}
