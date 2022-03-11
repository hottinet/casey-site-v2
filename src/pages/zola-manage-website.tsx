import ContentBox from '~/components/box/ContentBox';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

const ZolaManageWebsite: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Manage Website Dashboard</Title>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="The Manage Website page hosts all of the global settings for a couple's wedding website. As we have added functionality to the website product we have continued to add to this page without thinking about the page holistically."
        topText="The Goal"
      />
      <StackedText
        bottomText="Collaborate with the web designers to acheive a cohesive experience on native. Execute user testing, solicit feedback and work closely with engineers to QA changes."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>
        How do we organize dashboards within the Zola experience?
      </Title>
      <Body>xyz</Body>
      <Title bold>Getting into the user mindset</Title>
      <Body>xyz</Body>
      <Title bold>Simplifying and building for scale</Title>
      <Body>current, sectioned, new</Body>
      <Heading>Making the Edit Content CTA more prominent</Heading>
      <Body>diagram of old and new page</Body>
      <Title bold>Creating cross platform consistency</Title>
      <Body>xyz</Body>
      <Heading>Design system updates</Heading>
      <Body>Reorder icon, not visible icon</Body>
      <Heading>Native Share Action Sheet</Heading>
      <Title bold>User Testing</Title>
      <Body>xyz</Body>
    </ContentBox>
  </Layout>
);

export default ZolaManageWebsite;
