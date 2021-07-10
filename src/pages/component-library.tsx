import styled from '@emotion/styled';

import ContentBox from '~/components/box/ContentBox';
import FlexBox from '~/components/box/FlexBox';
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

const PickleGrid = styled(ContentBox)`
  grid-column-gap: 7%;
`;

const DetailStack = styled(StackedText)`
  margin-bottom: ${({ theme }) => theme.spacing[80]};
`;

const CoreComponentLibrary: React.FC = () => (
  <Layout title="Component Library">
    <ContentBox column>
      <Title bold>Core Component Library</Title>
      <Image alt="upload UI" src="/VideoUpload/videoupload.png" />
    </ContentBox>
    <DetailPickle>
      <PickleGrid grid widthRatio={1.13}>
        <StackedText
          bottomText="Make it easier to move quickly in Figma and keep designs up to date across the team."
          topText="Goal"
        />
        <StackedText
          bottomText="Create, manage and document the component library"
          topText="My Role"
        />
      </PickleGrid>
    </DetailPickle>
    <ContentBox column>
      <DetailStack
        bottomText="In a rapidly growing start-up, our files were becoming outdated
        quickly without the use of components. As new pages were added to the
        navigation constantly changed. By componentizing pieces like this it
        was much easier to keep all our files up to date."
        title
        topText="Staying up to date"
      />
      <DetailStack
        bottomText="With a few people acting as designers on our team, it was important
        that each of us wasnt starting from scratch each time we needed to
        design something new. Instead of scouring files for the right piece to
        copy and paste over, we would be able to pull in basic elements like
        navigation, buttons, etc from the library."
        title
        topText="Moving Quickly"
      />
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
