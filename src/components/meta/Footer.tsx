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
  :last-child {
    margin-right: 0;
  }
  margin-top: ${({ theme }) => theme.spacing[12]};
  width: min-content;
  ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 0;
    margin-right: ${({ theme }) => theme.spacing[24]};
  }
`;

const CaseyLink = styled(Link)`
  text-decoration: none;
`;

const FooterWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: row;
    align-items: center;
  }
`;

const LinkWrapper = styled(FlexBox)`
  flex-direction: column;
  margin-left: -0.25rem;
  ${({ theme }) => theme.breakpoints.sm} {
    margin-left: 0;
    flex-direction: row;
  }
`;

const Footer: React.FC = () => (
  <Box p={48}>
    <FooterDivider />
    <FooterWrapper justifyContent="space-between">
      <CaseyLink href="/" internal noHover>
        <Heading bold mb={0}>
          Casey Bradford
        </Heading>
      </CaseyLink>
      <LinkWrapper>
        <FooterLink href="mailto:caseyebradford@gmail.com">
          <Heading mb={0}>Email</Heading>
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/caseyebradford/">
          <Heading mb={0}>LinkedIn</Heading>
        </FooterLink>
        <FooterLink href="https://troychryssos.com/">
          <Heading mb={0}>Resume</Heading>
        </FooterLink>
      </LinkWrapper>
    </FooterWrapper>
  </Box>
);

export default Footer;
