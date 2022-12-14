import styled from '@emotion/styled';

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

const ZolaOnboarding: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold mb={80}>
        Making a great first impression with iOS app onboarding
      </Title>
      <Title> image</Title>
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
          <Body>
            I had initially chosen to work on this project for a design
            hackathon. Because I was creating new accounts often to test new
            features in the app, I was going through the onboarding flow more
            often than any user ever would… and it was slow. The chatbot UX
            seemed outdated and waiting for &quot;Melissa&quot; to
            &quot;type&quot; a response slowed down the sign up process a lot.
            As we introduced new branding, this experience became even more
            disjointed from the rest of the UI. I wanted to spend some hackathon
            time thinking about how to add a bit of personality and sparkle to
            our design system since it’s not always something we make time for
            with day-to-day projects.
          </Body>
        </Box>
        <Title>gif of melissa onboarding</Title>
      </GridBox>
      <Divider />
    </ContentBox>
    <ContentBox column>
      <Title bold>Align on the flow</Title>
      <Body>
        align w web on essential questions, order, deviations for mobile. Show
        flow chart of questions
      </Body>
      <Divider />
    </ContentBox>
    <ContentBox column>
      <Title bold>Research?</Title>
      <Divider />
    </ContentBox>
    <ContentBox column>
      <Title bold>Bringing this to life with our new branding</Title>
      <Body>
        Zola was in the midst of a rebrand when I worked on this project and we
        were still figurig out exactly how the brand came to life in the
        product.
      </Body>
      <Divider />
    </ContentBox>
  </Layout>
);

export default ZolaOnboarding;
