// import { useRouter } from 'next/router';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { Box } from '../box/Box';
import { FlexBox } from '../box/FlexBox';
import { ContentContainer } from '../ContentContainer';
import { Divider } from '../Divider';
import { Link } from '../Link';
import Body from '../typography/Body';

export function NavBar() {
  // const { pathname } = useRouter();
  const smUp = useBreakpointsAtLeast('sm');

  if (smUp) {
    return (
      <>
        {/* Height of the navbar */}
        <Box height={pxToRem(66)} width="100%" />
        <Box
          backgroundColor="background"
          position="fixed"
          width="100%"
          zIndex={999}
        >
          <ContentContainer>
            <FlexBox gap={48} height="fit-content" marginY={16}>
              <Link href={HOME_ROUTE}>
                <Body bold mb={0}>
                  Home
                </Body>
              </Link>
              <Link href={ABOUT_ROUTE}>
                <Body bold mb={0}>
                  About
                </Body>
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
