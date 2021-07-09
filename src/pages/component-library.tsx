import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentFlex';
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
  <Layout title="Component Library">
    <ContentBox column>
      <Title bold>Core Component Library</Title>
      <Image alt="upload UI" src="/VideoUpload/videoupload.png" />
    </ContentBox>
    <DetailPickle>
      <ContentBox leftOnly>
        <PickleStack
          bottomText="Make it easier to move quickly in Figma and keep designs up to date across the team."
          topText="Goal"
        />
        <PickleStack
          bottomText="Create, manage and document the component library"
          topText="My Role"
        />
      </ContentBox>
    </DetailPickle>
    <ContentBox column>
      <Title bold>Staying up to date</Title>
      <Box mt={40}>
        <Body>
          In a rapidly growing start-up, our files were becoming outdated
          quickly without the use of components. As new pages were added to the
          navigation constantly changed. By componentizing pieces like this it
          was much easier to keep all our files up to date.
        </Body>
      </Box>
      <Title bold>Moving Quickly</Title>
      <Box mt={40}>
        <Body>
          With a few people acting as designers on our team, it was important
          that each of us wasnt starting from scratch each time we needed to
          design something new. Instead of scouring files for the right piece to
          copy and paste over, we would be able to pull in basic elements like
          navigation, buttons, etc from the library.
        </Body>
      </Box>
      <Title bold>Organization</Title>
      <Heading>Theming, Light and Dark Modes</Heading>
      <Heading>Icon Library</Heading>
      <Heading>Icon Library</Heading>
      <Body>xyz</Body>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CoreComponentLibrary;
