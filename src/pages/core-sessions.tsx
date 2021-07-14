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
import Video from '~/components/videos/Video';

const DetailPickle = styled(Pickle)`
  margin: ${({ theme }) => `${theme.spacing[64]} 0`};
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  width: 87%;
`;

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const BodyOverBody = styled(Body)`
  margin-bottom: 24px;
`;

const CoreSessions: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Video content creation</Title>
    </ContentBox>
    <DetailPickle>
      <ContentBox leftOnly>
        <PickleStack
          bottomText="Improve the process for uploading and organizing video content"
          topText="The Goal"
        />
        <PickleStack
          bottomText="As the product designer dedicated to the Content workstream. I worked with developers to improve the process for creating on Core."
          topText="My Role"
        />
      </ContentBox>
    </DetailPickle>
    <ContentBox column>
      <Title bold>Building the CMS</Title>
      <Heading>Video</Heading>
      <Heading bold>Improving the video upload flow</Heading>
      <BodyOverBody>
        Core was receiving an influx of support emails from instructors who had
        questions about their video uploads. There was no clear feedback for
        users about the status of their uploads and no clear errors when
        something went wrong.
      </BodyOverBody>
      <Video sources={[{ src: '/VideoUpload/videouploadcover.mp4' }]} />
      <BodyOverBody>
        It was difficult for us to assess the problems we were hearing about
        over email because we did not have clear error states or upload
        statuses. In Core&apos;s original flow, instructors often thought videos
        were published when they were really still being processed by our server
        because we did not have clear statuses.
      </BodyOverBody>
      <Image alt="table view" fitParent src="/Sessions/uploadstatus.png" />
      <GridBox center>
        <Body>
          Many of our instructors are constantly multitasking to support their
          businesses and will start uploads and then walk away to do something
          else. To let instructors know when their sessions are ready, we send
          emails once they are ready for playback.
        </Body>
        <Image alt="email screenshot" src="/Sessions/videoemail.png" />
      </GridBox>
      <Divider />
      <Title bold>Designing the student experience</Title>
      <Heading>Video</Heading>
      <Heading bold>Browsing Experience</Heading>
      <Heading bold>Feedback</Heading>
      <Heading bold>Downloading videos via iOS</Heading>
      <Body>
        For students on the go, the ability to download video sessions was very
        important. This allowed them to workout in locations without a good wifi
        connection.
      </Body>
      <GridBox center>
        <Image alt="Download States" src="/Sessions/Downloads_1.png" />
        <Image alt="Downloaded Session" src="/Sessions/Downloads_2.png" />
        <Image alt="All Downloads" src="/Sessions/Downloads_3.png" />
      </GridBox>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CoreSessions;
