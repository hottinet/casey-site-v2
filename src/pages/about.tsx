import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import {
  AboutLinkButton as AboutLink,
  AboutLinkText,
} from '~/components/buttons/AboutLinkButton';
import { ContentContainer } from '~/components/ContentContainer';
import { BackgroundOverride } from '~/components/meta/BackgroundOverride';
import { Layout } from '~/components/meta/Layout';
import PortalImage from '~/components/PortalImage';
import { Text } from '~/components/typography/Text';
import { stickerHeight } from '~/constants/stickers';
import { useStickers } from '~/utils/stickers';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const AboutLayout = styled(Layout)(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.colors.blue}, ${theme.colors.blueLight})`,
  minHeight: '100vh',
}));

interface AboutLinkButtonProps {
  href: string;
  text: string;
}

function AboutLinkButton({ href, text }: AboutLinkButtonProps) {
  return (
    <AboutLink href={href}>
      <AboutLinkText>{text}</AboutLinkText>
    </AboutLink>
  );
}

const aboutLinks = [
  {
    text: 'View My Resume',
    href: '/CaseyBradfordResume.pdf',
  },
  {
    text: 'Find Me on LinkedIn',
    href: 'https://linkedin.com/in/caseyebradford/',
  },
];

function AboutPage() {
  const belowSm = useBreakpointsLessThan('sm');

  const stickers = useStickers();

  const gap = belowSm ? 32 : 40;
  return (
    <>
      <BackgroundOverride color="blue" />
      <AboutLayout fallbackNavBackground="blue">
        <ContentContainer metaPage>
          <FlexBox
            alignItems="center"
            flex={1}
            flexDirection="column"
            gap={gap}
            height="100%"
            marginTop={belowSm ? 96 : 128}
          >
            <Text
              as="h1"
              lineHeight={1}
              variant={belowSm ? 'headline3' : 'headline1'}
            >
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
        </ContentContainer>
      </AboutLayout>
      {stickers.map((s, i) => (
        <PortalImage
          coords={s.coords}
          imgAlt={s.alt}
          imgSrc={s.src}
          // eslint-disable-next-line react/no-array-index-key
          key={`${s.src}-${s.coords[0]}-${s.coords[1]}-${i}`}
          maxDimension={{ dimension: 'height', size: stickerHeight }}
        />
      ))}
    </>
  );
}

export default AboutPage;
