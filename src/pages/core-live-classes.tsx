import styled from '@emotion/styled';

import ContentBox from '~/components/box/ContentBox';
import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import NextProjectPickle from '~/components/pickles/NextProjectPickle';
import Pickle from '~/components/pickles/Pickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import ExternalVideo from '~/components/videos/ExternalVideo';

const DetailPickle = styled(Pickle)`
  margin: ${({ theme }) => `${theme.spacing[64]} 0`};
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  width: 87%;
`;

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const CoreComponentLibrary: React.FC = () => (
  <Layout title="Live Classes">
    <ContentBox column>
      <Title bold>Designing a live class experience for fitness</Title>
      <Heading>Video</Heading>
    </ContentBox>
    <DetailPickle>
      <ContentBox leftOnly>
        <PickleStack
          bottomText="Create a way for fitness instructors on Core to host live classes for their students."
          topText="The Goal"
        />
        <PickleStack
          bottomText="I was the primary product designer working with both the content and payment workstreams on the live classes feature."
          topText="My Role"
        />
      </ContentBox>
    </DetailPickle>
    <ContentBox column>
      <Title bold>Building a Zoom integration for instructors</Title>
      <GridBox center>
        <Body>
          We originally launched live classes with just an input for any live
          stream URL. However, for instructors hosting lots of events, it can be
          cumbersome to have to leave Core, go make a Zoom link, come back and
          paste that link intpo the form. With our Zoom integration, after
          instructors log in to their Zoom account, we can make the meetings for
          them. We just need them to input a Title and Date first.
        </Body>
        <Image alt="Create a zoom meeting" src="/LiveClasses/Zoom.png" />
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
      <ExternalVideo
        aspectRatio="16:9"
        src="https://vimeo.com/574090584"
        title="Google Maps Selector"
      />
      <Title bold>Creating flexible pricing options</Title>
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
        <Image alt="Pricing Controls" src="/LiveClasses/Pricing.png" />
      </GridBox>
      <Title bold>Creating accountability for students</Title>
      <Body>
        Most of our instructors are after more ways to create accountability for
        their students. With live classes, we implemented this through
        confirmation and reminder emails for classes and an add-to-calendar
        functionality.
      </Body>
      <Image alt="Class Booking Screens" src="/LiveClasses/confirmremind.png" />
      <Title bold>Key Learnings</Title>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CoreComponentLibrary;
