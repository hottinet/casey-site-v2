// import { useRouter } from 'next/router';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { FlexBox } from '../box/FlexBox';
import { ContentContainer } from '../ContentContainer';
import Link from '../Link';
import Body from '../typography/Body';

export function NavBar() {
  // const { pathname } = useRouter();
  const smUp = useBreakpointsAtLeast('sm');

  if (smUp) {
    return (
      <ContentContainer>
        <FlexBox gap={48} height="fit-content">
          <Link href={HOME_ROUTE}>
            <Body bold>Home</Body>
          </Link>
          <Link href={ABOUT_ROUTE}>
            <Body bold>About</Body>
          </Link>
        </FlexBox>
      </ContentContainer>
    );
  }

  return <div>sm screen nav</div>;
}
