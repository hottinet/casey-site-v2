import styled from '@emotion/styled';

import Box from '../box/Box';
import FlexBox from '../box/FlexBox';
import Divider from '../Divider';
import Link from '../Link';
import Heading from '../typography/Heading';

const FooterDivider = styled(Divider)`
  margin-bottom: ${({ theme }) => theme.spacing[24]};
`;

const FooterLink = styled(Link)`
  margin-right: ${({ theme }) => theme.spacing[24]};
  :last-child {
    margin-right: 0;
  }
`;

const CaseyLink = styled(Link)`
  text-decoration: none;
`;

const Footer: React.FC = () => (
  <Box p={48}>
    <FooterDivider />
    <FlexBox alignItems="center" justifyContent="space-between">
      <CaseyLink href="/" internal noHover>
        <Heading bold>Casey Bradford</Heading>
      </CaseyLink>
      <FlexBox>
        <FooterLink href="mailto:caseyebradford@gmail.com">
          <Heading>Email</Heading>
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/caseyebradford/">
          <Heading>LinkedIn</Heading>
        </FooterLink>
        <FooterLink href="https://troychryssos.com/">
          <Heading>Resume</Heading>
        </FooterLink>
      </FlexBox>
    </FlexBox>
  </Box>
);

export default Footer;
