import styled from '@emotion/styled';

// import { useBreakpointsLessThan } from '~/utils/useBreakpoints';
import { FlexBox } from '../box/FlexBox';
import { ContentContainer } from '../ContentContainer';
import { Divider } from '../Divider';
import { Link } from '../Link';
import { Text } from '../typography/Text';

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

type FooterProps = {
  nextPath?: string;
};

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

export function Footer({ nextPath }: FooterProps) {
  // const lessThanSm = useBreakpointsLessThan('sm');
  return (
    <FlexBox
      flex={1}
      flexDirection="column"
      marginTop="auto"
      paddingTop={40}
      width="100%"
    >
      <Divider width="100%" />
      <ContentContainer>
        <FooterWrapper
          alignItems="center"
          gap={40}
          justifyContent="space-between"
          paddingY={40}
          width="100%"
        >
          {footerLinks.map((link) => (
            <FooterLink href={link.href} key={link.href}>
              <Text fontWeight={600} variant="title">
                {link.text}
              </Text>
            </FooterLink>
          ))}
        </FooterWrapper>
      </ContentContainer>
    </FlexBox>
  );
}
