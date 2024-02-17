import { ContentContainer } from '~/components/ContentContainer';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import { HOME_ROUTE } from '~/constants/routing';

function EXAMPLE_PAGE_CHANGE_ME() {
  return (
    <Layout nextPageHref={HOME_ROUTE}>
      <ContentContainer>
        <Text as="h1" variant="headline3">
          Building an app-first wedding budget tool for Zola
        </Text>
      </ContentContainer>
    </Layout>
  );
}

export default EXAMPLE_PAGE_CHANGE_ME;
