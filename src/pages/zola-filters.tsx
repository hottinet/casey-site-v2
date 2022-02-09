import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

const ZolaFilters: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Auditing the Filter UI in the Zola App</Title>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Audit and create improved designs for the native filters. Create clear documentation about the resulting strategy."
        topText="The Goal"
      />
      <StackedText
        bottomText="Over time, the Zola app has come to have many different ways of filtering and sorting in different sections of the app. As a designer on the Core Native team, I wanted to audit existing designs, research best practices, and collaborate with the team to find improved solutions."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <GridBox center>
        <Box>
          <Title bold>Auditing our existing filters</Title>
          <Heading bold>Looking inward</Heading>
          <Body>
            The first task was to audit all of the different places that we used
            filters in different ways.
          </Body>
        </Box>
        <Heading>clicker goes here</Heading>
      </GridBox>
      <Heading bold>Looking outward</Heading>
      <Body>
        I looked to other apps, as well as Baymard research studies, to
        understand best practices and common patterns for native filters.
      </Body>
      <Image
        alt="Examples of filters in other apps"
        mb={80}
        src="/ZolaFilters/zola-filters-inspo.png"
      />
      <Heading bold>Key Takeaways</Heading>
      <Title bold>Start Sketching</Title>
      <Title bold>Pull in Key Stakeholders</Title>
      <Heading bold>Understand tech limitations</Heading>
      <Heading bold>Understand business implications</Heading>
      <Title bold>Small Wins</Title>
    </ContentBox>
  </Layout>
);

export default ZolaFilters;
