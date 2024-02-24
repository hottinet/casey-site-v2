import styled from '@emotion/styled';

import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

import { Box } from '../box/Box';
import { FlexBox } from '../box/FlexBox';
import { NextProjectButton } from '../buttons/NextProjectNavButton';
import { ContentContainer } from '../ContentContainer';
import { Divider } from '../Divider';
import { Link } from '../Link';

const FooterWrapper = styled(FlexBox)`
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: row;
    justify-content: center;
  }
`;

const FooterLink = styled(Link)`
  text-transform: uppercase;
`;

const FooterNext = styled(NextProjectButton)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const footerLinks = [
  {
    href: '/CaseyBradfordResume.pdf',
    text: 'Resume',
  },
  {
    href: 'https://www.linkedin.com/in/caseyebradford/',
    text: 'LinkedIn',
  },
  {
    href: 'mailto:caseyebradford@gmail.com',
    text: 'Email',
  },
];

interface FooterProps {
  nextPageHref?: string;
  nextPageLabel?: string;
}

export function Footer({ nextPageHref, nextPageLabel }: FooterProps) {
  const lessThanSm = useBreakpointsLessThan('sm');
  return (
    <FlexBox
      alignItems="center"
      flexDirection="column"
      marginTop="auto"
      paddingTop={pxToRem(136)}
      width="100%"
    >
      {lessThanSm && (
        <Box paddingBottom={20} paddingX={20} width="100%">
          <FooterNext
            nextPageHref={nextPageHref}
            nextPageLabel={nextPageLabel}
          />
        </Box>
      )}
      <Divider width="100%" />
      <ContentContainer metaPage>
        <FooterWrapper
          alignItems="center"
          gap={40}
          justifyContent="space-between"
          paddingY={40}
          width="100%"
        >
          {footerLinks.map((link) => (
            <FooterLink
              href={link.href}
              key={link.href}
              label={link.text}
              variant={lessThanSm ? 'subtitle2' : 'subtitle1'}
            />
          ))}
        </FooterWrapper>
      </ContentContainer>
    </FlexBox>
  );
}
