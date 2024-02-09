import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { Box } from '../box/Box';
import { FlexBox } from '../box/FlexBox';
import { ContentContainer } from '../ContentContainer';
import { Divider } from '../Divider';
import { Link } from '../Link';
import { Text } from '../typography/Text';

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
          top={0}
          width="100%"
          zIndex={999}
        >
          <ContentContainer>
            <FlexBox gap={32} height="fit-content" marginY={16}>
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
