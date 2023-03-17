import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Divider from '~/components/Divider';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import ExternalVideo from '~/components/videos/ExternalVideo';
import Video from '~/components/videos/Video';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const ZolaOnboarding: React.FC = () => {
  const lessThanSm = useBreakpointsLessThan('sm');
  return (
    <Layout>
      <ContentBox column>
        <Title bold mb={40}>
          Making a great first impression with iOS app onboarding
        </Title>
        <Video sources={[{ src: '/ZolaOnboarding/OnboardingHeroRect.mp4' }]} />
      </ContentBox>
      <DetailPickle>
        <StackedText
          bottomText="Because our onboarding flow already had a pretty high conversion rate, our main goal with the redesign was to create a great first impression on couples downloading the app by modernizing and rebranding the flow.
        "
          topText="The Goal"
        />
        <StackedText
          bottomText="My role was to own the design process from start to finish and to collaborate with copy, product and tech teams to come to a final solution."
          topText="My Role"
        />
      </DetailPickle>
      <ContentBox column>
        <GridBox center columnGap={40} mb={40} smColumns={2}>
          <Box width="100%">
            <Heading bold>Taking time to add some delight</Heading>
            <Body mb={20}>
              I had initially chosen to work on this project for a design
              hackathon. Because I was creating new accounts often to test new
              features in the app, I was going through the onboarding flow more
              often than any user ever would… and it was slow. The chatbot UX
              seemed outdated and waiting for &quot;Melissa&quot; to
              &quot;type&quot; a response slowed down the sign up process a lot.
              As we introduced new branding, this experience became even more
              disjointed from the rest of the UI. I wanted to spend some
              hackathon time thinking about how to add a bit of personality and
              sparkle to our design system since it’s not always something we
              make time for with day-to-day projects.
            </Body>
          </Box>
          <Video sources={[{ src: '/ZolaOnboarding/zola-melissa.mp4' }]} />
        </GridBox>
        <Divider />
      </ContentBox>
      <ContentBox column>
        <Title bold>Align on the flow</Title>
        <Body>
          The first thing I did was assess the questions that currently existed
          in the flow and their order. I worked with the web designer to
          understand how we could create more consistency between the two flows.
        </Body>
        <Image alt="xyz" mb={40} src="/ZolaOnboarding/zola-new-flow.png" />
        <Body>
          We didn’t make massive changes to the existing questions. We ended up
          adding one new question about what stage of planning the couple was
          in. We did not previously ask this question in the app, but it would
          help us customize the user experiencea cross platforms. We were able
          to combine this with an existing question about venues to keep the
          flow short.
        </Body>
        <Divider />
      </ContentBox>
      <ContentBox column>
        <Title bold>Bringing this to life with our new branding</Title>
        <Body>
          Zola was in the midst of a rebrand when I worked on this project and
          we were still figuring out exactly how the brand came to life in the
          product. I explored multiple visual directions that I thought would
          work with our new style guide.
        </Body>
        <Heading bold>Exploration A: Using Imagery</Heading>
        <Body>
          In marketing channels, our new brand came to life with lots of
          photography and not much graphic design or illustration. After trying
          to incorporate imagery in these screens, we decided that it would not
          be very scalable for the future and it was also difficult to make
          images of random couples feel personal to the new user.
        </Body>
        <Image
          alt="examples of the screens with imagery"
          mb={80}
          src="/ZolaOnboarding/zola-imagery.png"
        />
        <Heading bold>Exploration B: Graphic form fields</Heading>
        <Body>
          I looked at some other apps and websites that got playful with the
          design of certain form fields. I liked the idea of adding some brand
          personality while also allowing the user’s input to be the star.
          Focusing on one question at a time minimizes the perceived effort of
          onboarding and is a regular pattern on iOS apps. The full page form
          fields felt modern, easy, and allowed us to play with our new brand
          colors.
        </Body>
        <GridBox columnGap={20} columns={2} mb={40} rowGap={20} smColumns={2}>
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
        <Divider />
      </ContentBox>
      <ContentBox column>
        <Title bold>Refining the interaction</Title>
        <GridBox center columnGap={40} mb={80} smColumns={2}>
          <Box width="100%">
            <Heading bold>Providing simple feedback to the user</Heading>
            <Body>
              It was important for us to show the user that each response was
              tailoring their Zola experience. However, we did not want the
              feedback to massively slow down the process like it had been with
              the chat bot. For key questions in the flow, we animated the
              button to have a bit of personalized feedback before the screen
              changed over. I worked closely with the copy team to decide which
              questions would have feedback and what the text would be.
            </Body>
          </Box>
          <Video sources={[{ src: '/ZolaOnboarding/zola-buttons3.mp4' }]} />
        </GridBox>
        <GridBox center columnGap={40} mb={40} smColumns={2}>
          <Box width="100%">
            <Heading bold>Slick transitions between screens</Heading>
            <Body mb={0}>
              We also wanted to have slick transitions between questions to keep
              the flow moving. We explored many options, a few shown to the
              right, but ulitmately desicded to stick something simple -
              animating the questions in from right to left and keeping the
              button in place.
            </Body>
          </Box>
          <ExternalVideo
            aspectRatio="1:1"
            src="https://player.vimeo.com/video/803284017"
            title="Screen recording of prototype with different transitions"
          />
        </GridBox>
        <Divider />
      </ContentBox>
      <ContentBox column>
        <Title bold>Learning from the final product</Title>
        <Box mb={40}>
          {lessThanSm ? (
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
        </Box>
        <Heading bold>
          Prioritizing an emotional experience can move the needle
        </Heading>
        <Body>
          Even though our main goal with this project was not tied to a specific
          KPI, after launch we saw a huge increase in users completing the
          onboarding on their first session with the app. This means that
          couples are abandoning the flow less and they are getting into the app
          and Zola products faster.
        </Body>
      </ContentBox>
    </Layout>
  );
};

export default ZolaOnboarding;
