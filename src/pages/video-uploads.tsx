import styled from '@emotion/styled';

import Box from '~/components/box/Box';
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
import Video from '~/components/videos/Video';

const DetailPickle = styled(Pickle)`
  margin: ${({ theme }) => `${theme.spacing[64]} 0`};
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  width: 87%;
`;

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const BorderedImage = styled(Image)`
  border-top: 3px solid black;
`;

const CoreComponentLibrary: React.FC = () => (
  <Layout title="Video Upload">
    <ContentBox column>
      {/* <Video sources={[{ src: '/VideoUpload/videouploadcover.mp4' }]} /> */}
      <Title bold>Improving video upload flow for Core Instructors</Title>
      <Image alt="upload UI" src="/VideoUpload/videoupload.png" />
    </ContentBox>
    <DetailPickle>
      <ContentBox leftOnly>
        <PickleStack
          bottomText="Core was receiving an influx of support emails from instructors who had questions about their video uploads. There was no clear feedback for users about the status of their uploads and no clear errors when something went wrong."
          topText="The Problem"
        />
        <PickleStack
          bottomText="Design a solution that makes users feel more confident uploading videos. Create flows for the upload of local files, Dropbox files, or upload by URL. Work with backend and frontend engineers to understand tech implications."
          topText="My Role"
        />
      </ContentBox>
    </DetailPickle>
    <ContentBox column>
      <Title bold>
        Showing a visual representation of the file is important
      </Title>
      <Body>
        To start, I did some research on how best in class video platforms like
        YouTube and Vimeo handle uploads. One thing that stood out to me was
        that even if its just a preview, they show you a visual placeholder for
        the video. In Cores original upload flow, there was no visual cue that
        Core had the file after the initial load.
      </Body>
      <GridBox columnGap={24}>
        <Box>
          <Heading>Examples</Heading>
          <BorderedImage
            alt="Youtube and Vimeo examples"
            src="/VideoUpload/examples.png"
          />
        </Box>
        <Box>
          <Heading>Previous UI</Heading>
          <BorderedImage alt="Video UI" src="/VideoUpload/previous.png" />
        </Box>
      </GridBox>
      <Title bold>Creating a clear system for upload statuses</Title>
      <Body>
        It was difficult for us to assess the problems we were hearing about
        over email because we did not have clear error states or upload
        statuses. In Cores original flow, instructors often thought videos were
        published when they were really still being processed by our server
        because we did not have different states for those
      </Body>
      <Image alt="table view" fitParent src="/VideoUpload/uploadstatus.png" />
      <GridBox center>
        <Body>
          Many of our instructors are constantly multitasking to support their
          businesses and will start uploads and then walk away to do something
          else. To let instructors know when their sessions are ready, we send
          emails once they are ready for playback.
        </Body>
        <Image alt="email screenshot" src="/VideoUpload/videoemail.png" />
      </GridBox>
      <Title bold>Adapting designs for local, Dropbox and URL Uploads</Title>
      <Body>
        For each type of file upload there were different considerations. For
        Dropbox and URL uploads, we could not know the progress of the upload
        like we could for a local upload so the states became Downloading From
        Source and Ready for playback. For URL uploads we also had to show
        additional errors after validating the links that users were entering.
      </Body>
      <GridBox>
        <Image alt="oops not a video link" src="/VideoUpload/url-1.png" />
        <Image alt="Downloading" src="/VideoUpload/url-2.png" />
      </GridBox>
      <Title bold>Video Uploads in Context</Title>
      <Body>
        We got great feedback from instructors after launching this new
        experience. The biggest ask following these updates was for the ability
        to bulk upload which we would build in the future
      </Body>
      <Title bold>Key Learnings</Title>
      <Heading bold>Working with the Backend</Heading>
      <Body>xtz</Body>
      <Heading bold>Working with the Backend</Heading>
      <Body>xtz</Body>
      <Title bold>Other upload improvements</Title>
      <Heading>Schedule to publish</Heading>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CoreComponentLibrary;
