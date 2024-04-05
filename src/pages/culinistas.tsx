import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import Video from '~/components/videos/Video';
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
                The Culinistas wanted to improve their marketing website as well
                as bring their analog booking process to the web.
              </Text>
            </FlexBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                My Role
              </Text>
              <Text as="p">
                I worked directly with the Culinistas Design Director to provide
                product design expertise, do research, design screens and create
                prototypes.
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
          <Video sources={[{ src: '/Culinistas/culinistas_marketing.mp4' }]} />
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Building a flow for users to book their own services online
          </Text>
          <Text as="p" variant="bodySmall">
            Next, we focused on allowing customers to book their own services
            directly through the website. The Culinistas offer Weekly Meal Prep,
            Gatherings and Cooking Classes and we created journeys for each of
            these booking types.
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={24} justifyContent="center">
              <Text as="h3" lineHeight={1.1} variant="subtitle3">
                Looking at the existing flow
              </Text>
              <Text as="p" variant="bodySmall">
                The existing flow separated each field onto a new page which
                made the experience feel very long and there was no sense of
                progress for the user. The menu selection was also crammed into
                a small drawer which made it very hard to digest.
              </Text>
            </FlexBox>
            <Image alt="" src="/Culinistas/culinistas_old.png" />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <FlexBox flexDirection="column" gap={24}>
            <Text as="p" variant="subtitle3">
              Mapping out a new user journey
            </Text>
            <Text as="p" variant="bodySmall">
              For our new user flow, we wanted to group related fields into more
              simple and cohesive steps. After many iterations of this journey,
              we also decided that we wanted to move the dish selection toward
              the beginning of the flow, only collecting blocking fields before
              showing users a menu.
            </Text>
          </FlexBox>
          <Image alt="" src="/Culinistas/culinistas_userjourney.png" />
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="p" variant="subtitle3">
            Using wireframes to establish patterns
          </Text>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(3, 1fr)',
            }}
          >
            <Image alt="" src="/Culinistas/wire_1.png" />
            <Image alt="" src="/Culinistas/wire_2.png" />
            <Image alt="" src="/Culinistas/wire_3.png" />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="p" variant="subtitle3">
            Booking a gathering
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="p" variant="subtitle3">
            Adding filtering
          </Text>
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default Culinistas;
