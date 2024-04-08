import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import ExternalVideo from '~/components/videos/ExternalVideo';
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
            <Image alt="" src="/Culinistas/culinistas-hero.png" />
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
                as bring their admin driven booking process to the web.
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
          <Video sources={[{ src: '/Culinistas/culinistas-marketing2.mp4' }]} />
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Designing a new online booking experience for users
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
                Most existing customers book via a Customer Service rep. The
                existing web flow separated each field onto a new page which
                made the experience feel very long and there was no sense of
                progress for the user. The menu selection was also crammed into
                a small drawer which made it very hard to digest.
              </Text>
            </FlexBox>
            <Image
              alt="example of previous flow"
              src="/Culinistas/culinistas_old.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <FlexBox flexDirection="column" gap={24}>
            <Text as="p" variant="subtitle3">
              Mapping out a new and more concise user journey
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
            Using wireframes to establish consistent patterns
          </Text>
          <Text as="p" variant="bodySmall">
            After a few iterations, we decided to lean into a right rail as a
            consistent place to show users which dishes they have selected as
            well as their subtotal information. We could also use this space to
            open a drawer for special instructions for each dish.
          </Text>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <Image
              alt="wireframe showing selected dishes and subtotal in right rail"
              src="/Culinistas/wire_1.png"
            />
            <Image
              alt="wireframe showing dish special instructions in right drawer"
              src="/Culinistas/wire_2.png"
            />
            <Image
              alt="wireframe showing selected dishes and subtotal in right rail"
              src="/Culinistas/wire_3.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="p" variant="subtitle3">
            What it looks like to book a gathering via the website
          </Text>
          <ExternalVideo
            aspectRatio="16:9"
            src="https://player.vimeo.com/video/931558053"
            title="video of booking flow"
          />
          <Text as="p" variant="bodySmall">
            On top of just improving the user experience of booking a chef, we
            were also able to highlight revenue generating add-ons within the
            flow. Post-launch we saw that clients were much more likely to
            select these add-ons when booking online vs via an admin.
          </Text>
          <Image
            alt="screen pointing out where users can add extended menu or drink options"
            src="/Culinistas/culinistas-addons.png"
          />
          <Text as="p" variant="bodySmall">
            We would apply the same patterns and principles to the flows for
            booking other service types.
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="p" variant="subtitle3">
            Improving filtering for Meal Prep clients
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Layering on accounts so users can book again with saved info
          </Text>
          <Text as="p" variant="bodySmall">
            After launching the new and improved booking flows, we focused on
            building accounts to make booking as simple as possible for
            returning customers. With an account, users would be able to save
            their addresses and billing info to reuse in the future, as well as,
            see order history, track credits, and manage global settings.
          </Text>
          <Text as="p" variant="bodySmall">
            I worked specifically on a logged in state for the nav that would
            allow users to start a new booking quickly with their saved info. We
            also know that most users book the same service again, so we would
            default the service type to be the same as the last booked service.
          </Text>
          <Video sources={[{ src: '/Culinistas/loggedinnav.mp4' }]} />
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Impact
          </Text>
          <Text as="p" variant="bodySmall">
            After updating the online experience, we saw more and more users
            booking services via the website instead of an admin.
          </Text>
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default Culinistas;
