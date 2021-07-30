import styled from '@emotion/styled';

import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
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

const CoreLiveClasses: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Designing a live class experience for fitness</Title>
      <Image
        alt="Multiple views of live class feature."
        src="/LiveClasses/LiveClassCover.png"
      />
    </ContentBox>
    <DetailPickle>
      <PickleStack
        bottomText="Create a way for fitness instructors on Core to host live classes for their students."
        topText="The Goal"
      />
      <PickleStack
        bottomText="I was the primary product designer working with both the content and payment workstreams on the live classes feature. I designed across the instructor portal and student experience for both iOS and Web."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>The feature in use</Title>
      <PaddedExternalVideo
        src="https://player.vimeo.com/video/574465157"
        title="Process of creating and signing up for live class on Core"
      />
      <Title bold>Building a Zoom integration for instructors</Title>
      <GridBox center>
        <Body>
          We originally launched live classes with just an input for any live
          stream URL. However, for instructors hosting lots of events, it can be
          cumbersome to have to leave Core, go make a Zoom link, come back and
          paste that link into the form. With our Zoom integration, after
          instructors log in to their Zoom account, we can make the meetings for
          them. We just need them to input a Title and Date first.
        </Body>
        <Image
          alt="Create a zoom meeting"
          mb={80}
          src="/LiveClasses/Zoom.png"
        />
      </GridBox>
      <Title bold>
        Using Google Maps to set locations for in-person classes
      </Title>
      <Body>
        We started Live Classes as a digital-only feature since we launched Core
        during the covid pandemic. As restrictions lifted we saw more and more
        studios doing classes outside and we wanted to support that use case. As
        well as being able to choose a business through Google Maps, we allowed
        users to move their pin on the map and add a description to accomodate
        for the case where instructors wanted to guide student to a specific
        spot in Central Park or any park.
      </Body>
      <PaddedExternalVideo
        src="https://player.vimeo.com/video/574090584"
        title="Google Maps Selector"
      />
      <Title bold>Builidng toward flexible pricing options</Title>
      <GridBox center>
        <Body>
          In interviewing instructors who host Live Classes one of the biggest
          things I learned was the importance they placed on flexible pricing.
          Many of them used live classes as a funnel to monthly subscriptions.
          They wanted to set different prices for different classes and even
          have a pay-what-you-can model. Our first step towards a more flexible
          pricing model was to allow instructors to choose if classes were
          included in their subscription or not and to set a specific non-member
          price for each event.
        </Body>
        <Image alt="Pricing Controls" mb={80} src="/LiveClasses/Pricing.png" />
      </GridBox>
      <Title bold>Creating accountability for students</Title>
      <Body>
        Most of our instructors are after more ways to create accountability for
        their students. With live classes, we implemented this through
        confirmation and reminder emails for classes and an add-to-calendar
        functionality.
      </Body>
      <Image
        alt="Class Booking Screens"
        mb={80}
        src="/LiveClasses/confirmremind.png"
      />
      <Title bold>Key Learnings</Title>
      <Heading bold>Product Integrations </Heading>
      <BodyOverBody>
        This project was one of my first times working with Zoom, Google Maps
        and add-to-calednar functionality both on iOS and Web. It was a great
        experience to learn how we could leverage existing tools that users are
        familiar with to improve our product.
      </BodyOverBody>
      <Heading bold>Getting in the mindset of the user</Heading>
      <BodyOverBody>
        In building this feature, I learned a lot from user interviews. Research
        helped me understand the complexity of most instructors&apos; offerings
        and how they leverage live classes as a top of funnel mechanism to gain
        new students.
      </BodyOverBody>
    </ContentBox>
  </Layout>
);

export default CoreLiveClasses;
