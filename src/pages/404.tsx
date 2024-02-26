import { FlexBox } from '~/components/box/FlexBox';
import { ContentContainer } from '~/components/ContentContainer';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';

function FourOhFourPage() {
  return (
    <Layout>
      <ContentContainer>
        <FlexBox height="100%" justifyContent="center" marginTop={24}>
          <Text as="h1">Page Not Found!</Text>
        </FlexBox>
      </ContentContainer>
    </Layout>
  );
}

export default FourOhFourPage;
