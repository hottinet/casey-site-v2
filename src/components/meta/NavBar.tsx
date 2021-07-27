import styled from '@emotion/styled';
import random from 'lodash.random';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

import CB from '~/components/icons/CB';
import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { BreakpointsContext } from '~/contexts/breakpointsContext';
import { Color } from '~/typings/theme';

import FlexBox from '../box/FlexBox';
import TextButton from '../buttons/TextButton';
import Link from '../Link';

const CaseyLink = styled(Link)`
  text-decoration: none;
  width: 80px;
  margin-top: 8px;
  height: min-content;
`;

const cbColors: Color[] = ['blue', 'red', 'green', 'text', 'yellow'];

const CBLink = () => {
  const [color, setColor] = useState<Color>('text');
  const nextColors = cbColors.filter((c) => c !== color);

  const onEnter = () => setColor(nextColors[random(0, cbColors.length - 1)]);

  return (
    <CaseyLink href="/" internal noHoverStyles onMouseEnter={onEnter}>
      <CB color={color} title="Casey Bradford Logo" titleId="cb-icon" />
    </CaseyLink>
  );
};

const NavBar: React.FC = () => {
  const breakpoints = useContext(BreakpointsContext);
  const { pathname } = useRouter();
  return (
    <FlexBox justifyContent="space-between" p={24} pb={80}>
      <CBLink />
      {breakpoints.includes('sm') && (
        <FlexBox>
          <Link href="/" internal noHoverStyles>
            <TextButton
              forceHover={pathname === HOME_ROUTE}
              label="Home"
              onClick={undefined}
            />
          </Link>
          <Link href="/about" internal noHoverStyles>
            <TextButton
              forceHover={pathname === ABOUT_ROUTE}
              label="About Me"
              onClick={undefined}
            />
          </Link>
        </FlexBox>
      )}
    </FlexBox>
  );
};

export default NavBar;
