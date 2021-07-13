import styled from '@emotion/styled';

import Box from '~/components/box/Box';
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

const CorePrograms: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Programs on Core</Title>
      <Heading bold>The Problem</Heading>
      <Body>
        Fitness students are looking for ways to be held accountable and see
        results. Some instructors have identified that offering and day-by-day
        program for students to follow along with keeps them engaged, and
        selling access to that plan creates passive revenue. However, most
        instructors offering programs now are using a static PDF to set the
        schedule or stringing togther multiple tools to create a digital
        experience.
      </Body>
      <GridBox>
        <Box>
          <Heading>Example 1: Sculpt Society</Heading>
          <Body>
            Megan Roup is a popular fitness instructor with a great
            video-on-demand subscription business. Even as a top tier
            digital-first instructor, she was offering students interested in
            her program a pdf of a calendar with the titles of Vimeo videos on
            it for them to follow along with.
          </Body>
        </Box>
      </GridBox>
      <GridBox>
        <Box>
          <Heading>Example 2: GymHooky</Heading>
          <Body>
            “I use 3 main platforms - PTDistinction, Vimeo, and Facebook… oh and
            Calendly... and Pinterest”
          </Body>
        </Box>
        <Box>
          <Heading>Example 3: Rip then Rock</Heading>
          <Body>
            “I shoot the video at home, upload it to Teachable, send it out via
            MailChimp, and my clients use MyPTHub synched with Fitbit or Apple
            Watch.”
          </Body>
        </Box>
      </GridBox>
    </ContentBox>
    <DetailPickle>
      <ContentBox leftOnly>
        <PickleStack
          bottomText="Create a streamlined way for instructors to create day by day week by week programs for students to follow along with"
          topText="The Goal"
        />
        <PickleStack bottomText="xyz." topText="My Role" />
      </ContentBox>
    </DetailPickle>
    <ContentBox column>
      <Title bold>Instructor Portal: Building the Program</Title>
      <Title bold>Student Side: Following the Program</Title>
      <Title bold>Key Learnings</Title>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CorePrograms;
