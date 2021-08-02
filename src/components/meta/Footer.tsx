import styled from '@emotion/styled';

import FlexBox from '../box/FlexBox';
import Divider from '../Divider';
import Link from '../Link';
import NextProjectPickle from '../pickles/NextProjectPickle';
import Heading from '../typography/Heading';

const OuterFooterWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing[48]} ${theme.spacing[24]}`};
  ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.spacing[48]};
  }
`;

const FooterDivider = styled(Divider)`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
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

type FooterProps = {
  nextPath?: string;
};

const Footer: React.FC<FooterProps> = ({ nextPath }) => (
  <>
    {nextPath && (
      <FlexBox justifyContent="flex-end" mt={64}>
        <NextProjectPickle nextProjectPath={nextPath} />
      </FlexBox>
    )}
    <OuterFooterWrapper>
      <FooterDivider />
      <FooterWrapper justifyContent="space-between">
        <CaseyLink href="/" internal noHoverStyles>
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
          <FooterLink href="/Casey_Resume_082021.pdf">
            <Heading mb={0}>Resume</Heading>
          </FooterLink>
        </LinkWrapper>
      </FooterWrapper>
    </OuterFooterWrapper>
  </>
);

export default Footer;
