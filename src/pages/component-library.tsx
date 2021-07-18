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
import Video from '~/components/videos/Video';

// const DetailStack = styled(StackedText)`
//   margin-bottom: ${({ theme }) => theme.spacing[80]};
// `;

const BorderedVideo = styled(Video)`
  border: 2px solid black;
  border-radius: 30px;
  margin-bottom: 48px;
`;

const CoreComponentLibrary: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Core Component Library</Title>
      <Image
        alt="session card components"
        fitParent
        src="/ComponentLibrary/componentscover.png"
      />
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Make it easier to move quickly in Figma and keep designs up to date across the team."
        topText="Goal"
      />
      <StackedText
        bottomText="Create, manage and document the component library"
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>Audit, organize, build</Title>
      <Body>
        When I started at Core, we did not have a component library which meant
        that designers were starting from scratch or copy pasting too much every
        time they needed to create a new mockup. With each new project that I
        took on, I built components as I worked or kept a list of which needed
        to be added to the library.
      </Body>
      <Heading bold>Manging two style guides</Heading>
      <Body mb={80}>
        As a B2B2C business we were designing for both our instructor portal and
        also the student-facing experience for each project. Since there was
        some overlap in the two, I created two pages in our library - one for
        Instructor components and one for Student components.
      </Body>
      <GridBox columnGap={24} mb={80} rowGap={24}>
        <Image
          alt="Screenshots of the instructor portal"
          src="/ComponentLibrary/portal.png"
        />
        <Image
          alt="Screenshots of the student facing product"
          src="/ComponentLibrary/studentfacing.png"
        />
      </GridBox>
      <GridBox center>
        <Box>
          <Heading bold>Designing for multiple themes</Heading>
          <Body>
            Core supported about 50 different color schemes for instructors to
            use on their site. These 50 were split among Dark and Light schemes
            and each had a Primary and Secondary color. To make testing designs
            across themes easier, we creates a group of color styles that
            allowed designers to switch between 2 light and 2 dark themes
            easily.
          </Body>
        </Box>
        <Image alt="theme colors" src="/ComponentLibrary/ThemeControls.png" />
      </GridBox>
      <Image
        alt="Same screen in 4 themes"
        mb={80}
        src="/ComponentLibrary/Themes.png"
      />
      <Heading bold>Creating flexible components and documentation</Heading>
      <Body>In order to move quickly</Body>
      <BorderedVideo
        sources={[{ src: '/ComponentLibrary/IconComponent.mp4' }]}
      />
      <Image
        alt="Icons, names and uses"
        mb={80}
        src="/ComponentLibrary/iconDocumentation.png"
      />
      <Title bold>Moving Quickly</Title>
      <Title bold>Key Learnings</Title>
      <Heading bold>Building the components the right way is worth it</Heading>
      <Body>
        In a fast-paced environment, it is easy to race to a finished design
        without doing the leg work of organizing the files well. The more
        projects I worked on at Core, the more helpful I found it to have teh
        basic components mapped out and built with flexibilty in mind.
      </Body>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CoreComponentLibrary;
