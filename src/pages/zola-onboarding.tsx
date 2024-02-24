import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import ExternalVideo from '~/components/videos/ExternalVideo';
import Video from '~/components/videos/Video';
import { NON_BREAKING_SPACE } from '~/constants/characterEntitites';
import { HOME_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

function ZOLA_ONBOARDING() {
  const belowSm = useBreakpointsLessThan('sm');
  return (
    <Layout
      nextPageHref={HOME_ROUTE}
      nextPageLabel={`Back${NON_BREAKING_SPACE}to${NON_BREAKING_SPACE}Home`}
    >
      <FlexBox flexDirection="column" gap={80}>
        <ContentContainer
          gap={32}
          marginTop={belowSm ? SM_NAV_BAR_HEIGHT : NAV_BAR_HEIGHT}
        >
          <GridBox
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={32} justifyContent="center">
              <Text
                as="h1"
                lineHeight={1.2}
                variant={belowSm ? 'headline3' : 'headline2'}
              >
                Making a great first impression with onboarding
              </Text>
            </FlexBox>
            <Image
              alt="Zola Home Page"
              src="/ZolaOnboarding/onboarding-hero.png"
            />
          </GridBox>
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
                Because our onboarding flow already had a pretty high conversion
                rate, our main goal with the redesign was to create a great
                first impression on couples downloading the app by modernizing
                and rebranding the flow.
              </Text>
            </FlexBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                My Role
              </Text>
              <Text as="p">
                My role was to own the design process from start to finish and
                to collaborate with copy, product and tech teams to come to a
                final solution.
              </Text>
            </FlexBox>
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={32} justifyContent="center">
              <Text as="h1" lineHeight={1.2} variant="headline4">
                Taking time to add some delight
              </Text>
              <Text as="p" variant="bodySmall">
                I had initially chosen to work on this project for a design
                hackathon. Because I was creating new accounts often to test new
                features in the app, I was going through the onboarding flow
                more often than any user ever would… and it was slow. The
                chatbot UX seemed outdated and waiting for &quot;Melissa&quot;
                to &quot;type&quot; a response slowed down the sign up process a
                lot. As we introduced new branding, this experience became even
                more disjointed from the rest of the UI. I wanted to spend some
                hackathon time thinking about how to add a bit of personality
                and sparkle to our design system since it&apos;s not always
                something we make time for with day-to-day projects.
              </Text>
            </FlexBox>
            <Video sources={[{ src: '/ZolaOnboarding/zola-melissa.mp4' }]} />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h1" lineHeight={1.2} variant="headline4">
            Aligning on the flow
          </Text>
          <Text as="p" variant="bodySmall">
            The first thing I did was assess the questions that currently
            existed in the flow and their order. I worked with the web designer
            to understand how we could create more consistency between the two
            flows.
          </Text>
          <Image alt="xyz" mb={40} src="/ZolaOnboarding/zola-new-flow.png" />
          <Text as="p" variant="bodySmall">
            We didn&apos;t make massive changes to the existing questions. We
            ended up adding one new question about what stage of planning the
            couple was in. We did not previously ask this question in the app,
            but it would help us customize the user experiencea cross platforms.
            We were able to combine this with an existing question about venues
            to keep the flow short.
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h1" lineHeight={1.2} variant="headline4">
            Bringing it to life with our new branding
          </Text>
          <Text as="p" variant="bodySmall">
            Zola was in the midst of a rebrand when I worked on this project and
            we were still figuring out exactly how the brand came to life in the
            product. I explored multiple visual directions that I thought would
            work with our new style guide.
          </Text>
          <FlexBox flexDirection="column" gap={8}>
            <Text as="h3" variant="subtitle3">
              Exploration A: Using Imagery
            </Text>
            <Text as="p" variant="bodySmall">
              In marketing channels, our new brand came to life with lots of
              photography and not much graphic design or illustration. After
              trying to incorporate imagery in these screens, we decided that it
              would not be very scalable for the future and it was also
              difficult to make images of random couples feel personal to the
              new user.
            </Text>
          </FlexBox>
          <Image
            alt="examples of the screens with imagery"
            mb={80}
            src="/ZolaOnboarding/zola-imagery.png"
          />
          <FlexBox flexDirection="column" gap={8}>
            <Text as="h3" variant="subtitle3">
              Exploration B: Graphic form fields
            </Text>
            <Text as="p" variant="bodySmall">
              I looked at some other apps and websites that got playful with the
              design of certain form fields. I liked the idea of adding some
              brand personality while also allowing the user’s input to be the
              star. Focusing on one question at a time minimizes the perceived
              effort of onboarding and is a regular pattern on iOS apps. The
              full page form fields felt modern, easy, and allowed us to play
              with our new brand colors.
            </Text>
          </FlexBox>

          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <Image
              alt="Examples of other apps with colorful full-page fields"
              fitParent
              src="/ZolaOnboarding/zola-formfield-example.png"
            />
            <Image
              alt="Vision of how this would come to life for Zola"
              fitParent
              src="/ZolaOnboarding/zola-formfield.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={32} justifyContent="center">
              {' '}
              <Text as="h1" lineHeight={1.2} variant="headline4">
                Refining the interaction
              </Text>
              <Text as="h3" variant="subtitle3">
                Simple user feedback
              </Text>
              <FlexBox flexDirection="column" gap={8} justifyContent="center">
                <Text as="p" variant="bodySmall">
                  It was important for us to show the user that each response
                  was tailoring their Zola experience. However, we did not want
                  the feedback to massively slow down the process like it had
                  been with the chat bot. For key questions in the flow, we
                  animated the button to have a bit of personalized feedback
                  before the screen changed over. I worked closely with the copy
                  team to decide which questions would have feedback and what
                  the text would be.
                </Text>
              </FlexBox>
            </FlexBox>
            <Video sources={[{ src: '/ZolaOnboarding/zola-buttons3.mp4' }]} />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={8} justifyContent="center">
              <Text as="h3" variant="subtitle3">
                Slick transitions between screens
              </Text>
              <Text as="p" variant="bodySmall">
                We also wanted to have slick transitions between questions to
                keep the flow moving. We explored many options, a few shown to
                the right, but ulitmately desicded to stick something simple -
                animating the questions in from right to left and keeping the
                button in place.
              </Text>
            </FlexBox>
            <ExternalVideo
              aspectRatio="1:1"
              src="https://player.vimeo.com/video/803284017"
              title="Screen recording of prototype with different transitions"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h1" lineHeight={1.2} variant="headline4">
            Learning from the final product
          </Text>
          {belowSm ? (
            <ExternalVideo
              aspectRatio="1:1"
              src="https://player.vimeo.com/video/802475446"
              title="Demo of zola onboarding"
            />
          ) : (
            <ExternalVideo
              aspectRatio="16:9"
              src="https://player.vimeo.com/video/802474956"
              title="Demo of zola onboarding"
            />
          )}
          <FlexBox flexDirection="column" gap={8}>
            <Text as="h3" variant="subtitle3">
              Prioritizing an emotional experience can move the needle
            </Text>
            <Text as="p" variant="bodySmall">
              Even though our main goal with this project was not tied to a
              specific KPI, after launch we saw a huge increase in users
              completing the onboarding on their first session with the app.
              This means that couples are abandoning the flow less and they are
              getting into the app and Zola products faster.
            </Text>
          </FlexBox>
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default ZOLA_ONBOARDING;
