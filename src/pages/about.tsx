import { css, Global, Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { Link } from '~/components/Link';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const makeAboutGlobalStyles = (theme: Theme) => css`
  body,
  html,
  #__next {
    background-color: ${theme.colors.blue};
  }
`;

const AboutLayout = styled(Layout)(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.colors.blue}, ${theme.colors.blueLight})`,
  minHeight: '100vh',
}));

const AboutLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.colors.yellow,
  borderColor: theme.colors.text,
  borderWidth: theme.borderWidth['3'],
  borderStyle: 'solid',
  borderRadius: theme.borderRadius[200],
  ':hover': {
    backgroundColor: theme.colors.red,
  },
}));

interface AboutLinkButtonProps {
  href: string;
  text: string;
}

function AboutLinkButton({ href, text }: AboutLinkButtonProps) {
  return (
    <AboutLink href={href}>
      <Text
        fontWeight="bold"
        paddingX={32}
        paddingY={16}
        textAlign="center"
        textTransform="uppercase"
        variant="bodySmall"
        width="100%"
      >
        {text}
      </Text>
    </AboutLink>
  );
}

const aboutLinks = [
  {
    text: 'Download My Resume',
    href: '/CaseyBradfordResume.pdf',
  },
  {
    text: 'Find Me on LinkedIn',
    href: 'https://linkedin.com/in/caseyebradford/',
  },
];

function AboutPage() {
  const belowSm = useBreakpointsLessThan('sm');
  const theme = useTheme();

  const gap = belowSm ? 32 : 40;
  return (
    <AboutLayout>
      <Global styles={makeAboutGlobalStyles(theme)} />
      <FlexBox
        alignItems="center"
        flex={1}
        flexDirection="column"
        gap={gap}
        height="100%"
        marginTop={belowSm ? 96 : 128}
      >
        <Text as="h1" variant={belowSm ? 'headline3' : 'headline1'}>
          About Casey
        </Text>
        <FlexBox flexDirection={belowSm ? 'column' : 'row'} gap={gap}>
          {aboutLinks.map((link) => (
            <AboutLinkButton
              href={link.href}
              key={link.href}
              text={link.text}
            />
          ))}
        </FlexBox>
        <Text as="p" variant={belowSm ? 'bodySmall' : 'bodyLarge'}>
          click anywhere to learn about me
        </Text>
      </FlexBox>
    </AboutLayout>
  );
}

export default AboutPage;
