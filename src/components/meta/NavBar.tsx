import styled from '@emotion/styled';
import throttle from 'lodash.throttle';
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
`;

interface NavBarProps {
  layoutClassName?: string;
}

export function NavBar({ layoutClassName }: NavBarProps) {
  const smUp = useBreakpointsAtLeast('sm');
  const [bgRef, setBgRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = throttle(() => {
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = window.scrollY / maxHeight;
      // The navbar changes colors faster than the body
      // because the scroll position is "below" the navbar position
      // so we just cap it at 80% to stop it from looking TOO off
      const maxScrollPercent = Math.min(0.8, scrollPercent);
      bgRef!.style.transform = `translateY(-${maxScrollPercent * 100}%)`;
    }, 100);

    if (bgRef) {
      const pageHeight = document.body.scrollHeight;
      bgRef.style.height = `${pageHeight}px`;

      window.addEventListener('scroll', onScroll);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
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
