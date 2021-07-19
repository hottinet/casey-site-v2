import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import FlexBox from '~/components/box/FlexBox';
// import GridBox from '~/components/box/GridBox';
// import Divider from '~/components/Divider';
// import Image from '~/components/Image';
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
      <Body>Migrating Students, Migrating Videos, lack of features</Body>
      <Title bold>Our Hypothesis</Title>
      <Body>
        As we experienced sticking points with our current clients, we turned
        our sights down stream to less established instructors. Our hypothesis
        was that these budding instructors might be easier to migrate onto our
        platform as we worked towards feature parody with our competitors.
      </Body>
      <Body>
        Our goal was to interview 20 less established intructors and identify
        their main pain points and their interest in Core.
      </Body>
      <Heading bold>The Process</Heading>
      <Heading>
        Outreach, Interview, Identify Common Pain Points, Identify solutions, in
        parallel competitive research
      </Heading>
      <Title bold>Competitive Landscape</Title>
      <Title bold>Key Takeaways</Title>
      <Title bold>Key Learnings</Title>
    </ContentBox>
    <FlexBox justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CustomerDiscovery;
