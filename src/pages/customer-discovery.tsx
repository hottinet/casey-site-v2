import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
// import Divider from '~/components/Divider';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import NextProjectPickle from '~/components/pickles/NextProjectPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
// import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const BlueBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: ${({ theme }) => theme.spacing[48]};
  border-radius: 50px;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing[80]};
`;

const GreenBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.green};
  padding: ${({ theme }) => theme.spacing[48]};
  border-radius: 50px;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing[80]};
`;

const RedBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.red};
  padding: ${({ theme }) => theme.spacing[48]};
  border-radius: 50px;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing[80]};
`;

const OutlineBox = styled(Box)`
  border-style: solid;
  border-width: 5px;
  border-color: ${({ theme }) => theme.colors.blue};
  border-radius: 100px;
  padding: 48px 80px;
  margin-bottom: ${({ theme }) => theme.spacing[80]};
`;

const CustomerDiscovery: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Rediscovering the Core Customer</Title>
    </ContentBox>
    <DetailPickle>
      <PickleStack
        bottomText="Identify the painpoints of a Tier 3 intructor and solutions we can provide."
        topText="Goal"
      />
      <PickleStack
        bottomText="Reach out to and conduct interviews with potential users. Identify common pain points and possible solutions to present to investors."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>Identifying the problem</Title>
      <Body>
        Core is an early stage company on a mission to help fitness instructors
        launch and scale their digital business. During the first few months,
        Core was targeting an audience of established instructors with existing
        subscription businesses. Although we garnered a good amount of interest
        from this group, we found it difficult to migrate them from their
        existing platforms for a few reasons.
      </Body>
      <GridBox columnGap={24}>
        <Box>
          <Heading bold>Migrating Students</Heading>
          <Body>
            It&apos;s hard to get students to move off of platforms that they
            are familiar with and might have purchased long-term subscriptions
            on.
          </Body>
        </Box>
        <Box>
          <Heading bold>Migrating Videos</Heading>
          <Body>
            Although Core offered unlimited video storage and white-glove
            migration for a fee, Migrating all of their existing content was
            still an obstacle for instructors.
          </Body>
        </Box>
        <Box>
          <Heading bold>Feature Set</Heading>
          <Body>
            As a very new company, Core was lacking some basic features that
            competitors offered.
          </Body>
        </Box>
      </GridBox>
      <Title bold>Our Hypothesis</Title>
      <Body>
        As we experienced sticking points with our current clients, we turned
        our sights down stream to less established instructors. Our hypothesis
        was that these budding instructors might be easier to migrate onto our
        platform as we worked towards feature parody with our competitors.
      </Body>
      <OutlineBox>
        <Heading bold>
          Our goal was to interview 20+ less established intructors to identify
          their main pain points and how Core could solve them.
        </Heading>
        <Heading>Our Process</Heading>
      </OutlineBox>
      <Title bold>Competitive Landscape</Title>
      <Title bold>Key Takeaways</Title>
      <BlueBox>
        <Heading bold>Marketing</Heading>
        <Image alt="test" mb={80} src="/CustomerDiscovery/Marketing.png" />
        <GridBox columnGap={24}>
          <Box>
            <Body mb={16}>Pain Point</Body>
            <Title bold>Instructors need help attracting new students</Title>
          </Box>
          <Box>
            <Body mb={16}>What we build</Body>
            <Heading bold>Explore</Heading>
          </Box>
        </GridBox>
      </BlueBox>
      <GreenBox>
        <Heading bold>Flexibility</Heading>
        <Image alt="test" mb={80} src="/CustomerDiscovery/Flexibility.png" />
        <GridBox columnGap={24}>
          <Box>
            <Body mb={16}>Pain Point</Body>
            <Title bold>
              Instructors are constantly experimenting with their offerings to
              engage students
            </Title>
          </Box>
          <Box>
            <Body mb={16}>What we build</Body>
            <Heading bold>Explore</Heading>
          </Box>
        </GridBox>
      </GreenBox>
      <RedBox>
        <Heading bold>Accountability</Heading>
        <Image alt="test" mb={80} src="/CustomerDiscovery/Accountability.png" />
        <GridBox columnGap={24}>
          <Box>
            <Body mb={16}>Pain Point</Body>
            <Title bold>
              Instructors are constantly experimenting with their offerings to
              engage students
            </Title>
          </Box>
          <Box>
            <Body mb={16}>What we build</Body>
            <Heading bold>Explore</Heading>
          </Box>
        </GridBox>
      </RedBox>
      <Title bold>Key Learnings</Title>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CustomerDiscovery;
