import styled from '@emotion/styled';

import ContentBox from '~/components/box/ContentBox';
import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
import Divider from '~/components/Divider';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import NextProjectPickle from '~/components/pickles/NextProjectPickle';
import Pickle from '~/components/pickles/Pickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

const DetailPickle = styled(Pickle)`
  margin: ${({ theme }) => `${theme.spacing[64]} 0`};
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  width: 87%;
`;

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const CoreComponentLibrary: React.FC = () => (
  <Layout title="Irth">
    <ContentBox column>
      <GridBox>
        <Title bold>Title for Irth Project</Title>
        <Image alt="screens in phone" src="/Irth/IrthHero.gif" />
      </GridBox>
    </ContentBox>
    <DetailPickle>
      <ContentBox leftOnly>
        <PickleStack
          bottomText="Irth is an app for brown and black women to review doctors and hospitals involved in their birthing experiences"
          topText="What is Irth?"
        />
        <PickleStack
          bottomText="I was brought on to this project to make a few key design changes necessary to take the app to its first round of beta testing."
          topText="My Role"
        />
      </ContentBox>
    </DetailPickle>
    <ContentBox column>
      <Heading>Goal #1</Heading>
      <Title bold>Bring more warmth and joy to the app experience</Title>
      <Body>
        Writing reviews of bad experiences can be stressful and emotional. The
        app’s UI was very cold and stoic when I was brought on to the project
        and one of our main goals was to bring more of the brand personality to
        the designs.
      </Body>
      <Heading bold>Color Palette</Heading>
      <Body>
        Irth worked with another designer to update their branding and website.
        On of my goals was to adapt these colors and branding for the app to
        create an experience with more warmth and personality.
      </Body>
      <Image
        alt="two different color palettes"
        src="/Irth/BeforeAfterIrth.png"
      />
    </ContentBox>
    <ContentBox column>
      <GridBox>
        <StackedText
          bottomText="Irth is built for and by it’s community and we want to emphasize that you are not alone when going through the review process. To add a personal touch to the experience, we created “notes from the founder/team” to show up on first login and as soon as you finish writing a review. These screens give the founder an opportunity to speak directly to her audience."
          topText="Adding a human touch"
        />
        <Image alt="email screenshot" src="/Irth/Founder.png" />
      </GridBox>
      <Divider />
      <Heading>Goal #2</Heading>
      <Title bold>Increase responsiveness</Title>
      <Body>
        As I took over the product design portion of this project one of my
        responsibilities was to address questions from the iOS and Android devs
        about responsiveness.
      </Body>
      <Heading bold>Accommodating lengthy answer text</Heading>
      <Body>
        As the copy evolved, many of our answers became lengthy or had lots of
        options which required us to move from small tiles to full width list
        items.
      </Body>
      <Image alt="email screenshot" src="/Irth/LongForm.png" />
      <Heading bold>Showing the states of a started review</Heading>
      <Body>
        Because reviews take time to complete and users may want to take a
        break, we needed clear ways to show their drafts and the status of their
        completed reviews easily.
      </Body>
      <Image alt="email screenshot" src="/Irth/ReviewStates1.png" />
      <Divider />
      <Title bold>Key Learnings</Title>
      <Heading bold>Working within someone elses files</Heading>
      <Body>
        I picked up this project from another designer who had too much on her
        plate. This meanth that I had to dive into her files and design system
        without a lot of context. I think that having a fresh perspective can be
        helpful but is also hard at times when you dont know why certain
        assumptions were made.
      </Body>
      <Heading bold>Testflight and Firebase</Heading>
      <Body>
        I worked closely with an iOS and Android developer to build a product to
        be beta tested before launch. This helped me learn some of the nuances
        that go into each build from a design perspective.
      </Body>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CoreComponentLibrary;
