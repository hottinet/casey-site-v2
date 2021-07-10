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

const CoreComponentLibrary: React.FC = () => (
  <Layout title="Customer Discovery">
    <ContentBox column>
      <Title bold>Rediscovering the Core Customer</Title>
      <Image alt="upload UI" src="/VideoUpload/videoupload.png" />
    </ContentBox>
    <DetailPickle>
      <ContentBox leftOnly>
        <PickleStack
          bottomText="Identify what features we need to build to support a smaller time instructor and differentiate from our competitors."
          topText="Goal"
        />
        <PickleStack
          bottomText="Reach out to and conduct interviews with potential users. Identify common pain points and possible solutions."
          topText="My Role"
        />
      </ContentBox>
    </DetailPickle>
    <ContentBox column>
      <Title bold>Sddddddd</Title>
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
