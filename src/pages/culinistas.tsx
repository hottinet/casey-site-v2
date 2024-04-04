import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import { ZOLA_ONBOARDING } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

function Culinistas() {
  const belowSm = useBreakpointsLessThan('sm');
  const belowMd = useBreakpointsLessThan('md');
  return (
    <Layout nextPageHref={ZOLA_ONBOARDING}>
      <FlexBox alignItems="center" flexDirection="column" gap={80}>
        <ContentContainer
          gap={32}
          marginTop={belowSm ? SM_NAV_BAR_HEIGHT : NAV_BAR_HEIGHT}
        >
          <FlexBox flexDirection="column" gap={32} justifyContent="center">
            <Text
              as="h1"
              lineHeight={1.2}
              variant={belowMd ? 'headline3' : 'headline2'}
            >
              Connecting users with private chefs
            </Text>
          </FlexBox>
          <Image
            alt="Program page on desktop and mobile"
            src="/Programs/programscover.png"
          />
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            border="1px solid black"
            borderRadius={pxToRem(16)}
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
            padding={32}
          >
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                The Goal
              </Text>
              <Text as="p">
                The Culinistas was hoping to improve their marketing website as
                well as bring their analog booking process to the web
              </Text>
            </FlexBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                My Role
              </Text>
              <Text as="p">
                I worked directly with the Culinistas Design Director to provide
                product design expertise, do research, mock up screens and
                create prototypes.
              </Text>
            </FlexBox>
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Redesigning the marketing site
          </Text>
          <Text as="p" variant="bodySmall">
            The first project that I supported was rebranding the marketing
            site. I worked with the design director to create a style guide,
            component library and documentation for developers. I also worked to
            ensure designs were responsive and create mobile web versions of
            each screen.
          </Text>
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default Culinistas;
