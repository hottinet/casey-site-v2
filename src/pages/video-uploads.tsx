import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import FlexBox from '~/components/box/FlexBox';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import NextProjectPickle from '~/components/pickles/NextProjectPickle';
import Pickle from '~/components/pickles/Pickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Title from '~/components/typography/Title';
import Video from '~/components/Video';

const DetailPickle = styled(Pickle)`
  margin: ${({ theme }) => `${theme.spacing[64]} 0`};
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  width: 87%;
`;

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const CoreComponentLibrary: React.FC = () => (
  <Layout title="Video Upload">
    <ContentBox column>
      <Video sources={[{ src: '/VideoUpload/videouploadcover.mp4' }]} />
      {/* <Title bold>Improving video upload flow for Core Instructors</Title> */}
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
      <Box mt={40}>
        <Body>
          To start, I did some research on how best in class video platforms
          like YouTube and Vimeo handle uploads. One thing that stood out to me
          was that even if its just a preview, they show you a visual
          placeholder for the video. In Cores original upload flow, there was no
          visual cue that Core had the file after the initial load.
        </Body>
        <Image alt="examples" fitParent src="/VideoUpload/videoexample.png" />
      </Box>
      <Title bold>Creating a clear system for upload statuses</Title>
      <Box mt={40}>
        <Body>
          It was difficult for us to assess the problems we were hearing about
          over email because we did not have clear error states or upload
          statuses. In Cores original flow, instructors often thought videos
          were published when they were really still being processed by our
          server because we did not have different states for those
        </Body>
        <Image alt="table view" fitParent src="/VideoUpload/uploadstatus.png" />
      </Box>
      <Title bold>Adapting designs for local, Dropbox and URL Uploads</Title>
      <Box mt={40}>
        <Body>xyz</Body>
      </Box>
      <Title bold>Cut from scope</Title>
      <Box mt={40}>
        <Body>xyz</Body>
      </Box>
      <Title bold>Final Product</Title>
      <Box mt={40}>
        <Body>xyz</Body>
      </Box>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CoreComponentLibrary;
