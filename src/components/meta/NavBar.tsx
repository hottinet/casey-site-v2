import styled from '@emotion/styled';

import FlexBox from '../box/FlexBox';
import TextButton from '../buttons/TextButton';
import Link from '../Link';
import Title from '../typography/Title';

const NavWrapper = styled(FlexBox)`
  padding: ${({ theme }) => theme.spacing[48]};
`;

const CaseyLink = styled(Link)`
  text-decoration: none;
`;

const NavBar: React.FC = () => (
  <NavWrapper justifyContent="space-between">
    <CaseyLink href="/" internal noHover>
      <Title bold>Casey Bradford</Title>
    </CaseyLink>
    <FlexBox>
      <Link href="/" internal noHover>
        <TextButton label="Home" onClick={undefined} />
      </Link>
      <Link href="/about" internal noHover>
        <TextButton label="About Me" onClick={undefined} />
      </Link>
    </FlexBox>
  </NavWrapper>
);

export default NavBar;
