import styled from '@emotion/styled';

import FlexBox from '../box/FlexBox';
import TextButton from '../buttons/TextButton';
import Link from '../Link';
import Title from '../typography/Title';

const NavWrapper = styled(FlexBox)`
  margin: ${({ theme }) => theme.spacing[48]};
`;

const NavLink = styled(Link)`
  :hover {
    background-color: transparent;
  }
`;

const NavBar: React.FC = () => (
  <NavWrapper justifyContent="space-between">
    <Title bold>Casey Bradford</Title>
    <FlexBox>
      <NavLink href="/" internal>
        <TextButton label="Home" onClick={undefined} />
      </NavLink>
      <NavLink href="/about" internal>
        <TextButton label="About Me" onClick={undefined} />
      </NavLink>
    </FlexBox>
  </NavWrapper>
);

export default NavBar;
