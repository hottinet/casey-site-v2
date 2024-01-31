import { FlexBox } from '~/components/box/FlexBox';
import { Layout } from '~/components/meta/Layout';
import Body from '~/components/typography/Body';

function HomePage() {
  return (
    <Layout>
      <FlexBox flexDirection="column" height="100%" width="100%">
        <Body>hey</Body>
      </FlexBox>
    </Layout>
  );
}

export default HomePage;
