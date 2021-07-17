import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import NextProjectPickle from '~/components/pickles/NextProjectPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import ExternalVideo from '~/components/videos/ExternalVideo';

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const PaddedExternalVideo = styled(ExternalVideo)`
  margin-bottom: 80px;
`;

const BodyOverBody = styled(Body)`
  margin-bottom: 24px;
`;

const CorePrograms: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Launching fitness programs on Core</Title>
      <Image
        alt="Program page on desktop and mobile"
        src="/Programs/programscover.png"
      />
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
      <GridBox center>
        <Box>
          <Heading>Example 1: Sculpt Society</Heading>
          <Body>
            Megan Roup is a popular fitness instructor with a great
            video-on-demand subscription business. Even as a top tier
            digital-first instructor, she was offering students interested in
            her program a pdf of a calendar with the titles of Vimeo videos on
            it for them to follow along with. We think this experience can be
            improved upon.
          </Body>
        </Box>
        <Image
          alt="Vimeo video and PDF Plan"
          src="/Programs/SculptSociety.png"
        />
      </GridBox>
      <GridBox columnGap={24}>
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
      <PickleStack
        bottomText="Create a streamlined way for instructors to create day by day, week by week programs for students to follow along with"
        topText="The Goal"
      />
      <PickleStack
        bottomText="My role ws to design both the instructor portal experience as well as the student experience across iOS and web. I worked with a team of developers to test and refine the feature, and executed user interviews throughout the process."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>Instructor Portal: Building the Program</Title>
      <Body>
        Programs are a great way for insturctors to re-use existing content and
        keep students engaged. It was important to make the CMS experience of
        building a program straight-forward so that our users could easily take
        advantage of the feature.
      </Body>
      <PaddedExternalVideo
        src="https://player.vimeo.com/video/574497344"
        title="Student experience following a program on web"
      />
      <Heading bold>
        Balancing flexibility with a guided user experience
      </Heading>
      <Body>
        The instructors we were working with had a variety of differnet formats
        for their programs. Some were based on weeks and some were divided into
        sections that didn&apos;t necessarily follow a 7 day cycle. In our first
        build we allowed for as much flexibility as possible, but after some
        user testing we found that we were giving users too much freedom and not
        clear enough guidance on how to structure Programs.
      </Body>
      <GridBox center>
        <Box>
          <Heading bold>Keeping it fitness specific</Heading>
          <Body>
            Letting your body recover is an important part of long term fitness
            programs. One of the more fitness-specific elements of Core programs
            is the ability to mark days in the cycle as Rest Days for students
            to mark off.
          </Body>
        </Box>
        <Image alt="Rest Day vs Regular Day" src="/Programs/RestDay.png" />
      </GridBox>
      <Heading bold>Iterating post-launch</Heading>
      <BodyOverBody>
        Programs offer students a more holistic and guided fitness experience.
        Many instructors wanted to attach additional resources to their program
        such as nutrition plans. As a fast follow to our initial launch, we
        added the ability for instructors to add both links and attachments.
      </BodyOverBody>
      <Body>
        After interviewing multiple instructors, we learned that most of them
        treat programs as a separate offering from their subscription business,
        either using it to funnel in new students or as an add on for
        subscribers. Our next iteration of programs would iclude the ability to
        have a one-off price.
      </Body>
      <Title bold>Student Experience: Following the Program</Title>
      <PaddedExternalVideo
        src="https://player.vimeo.com/video/574497383"
        title="Student experience following a program on web"
      />
      <GridBox center>
        <Box>
          <Heading bold>
            Ecouraging students to move through the program
          </Heading>
          <Body>
            To keep students engaged with any program they start, we prompt them
            to start their next session at the top of the home page.
          </Body>
        </Box>
        <Image
          alt="Screenshot of home page with next session prompt"
          src="/Programs/Progress.png"
        />
      </GridBox>
      <Title bold>Key Learnings</Title>
      <Heading bold>Flexibility vs Usability</Heading>
      <BodyOverBody>
        In building Core, we were constantly assessing the trade off between
        giving instructors freedom to personalize versus having a more
        straightrforward user experience. In our first iteration of Programs, we
        did not make users stick to a calendar based on weeks. In testing this
        with users, most were confused by the vague naming and I think this is a
        case where more structure would have been helpful.
      </BodyOverBody>
      <Heading bold>Desiging across platforms</Heading>
      <Body>
        In an effort to get this project out the door quickly, we focused a lot
        on iOs and mobile web first. Down the line we ran into some issues on
        desktop that we had overlooked which was a good reminder to keep all the
        devices we are serving in mind.
      </Body>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CorePrograms;
