import { Flex } from 'rebass';
import Layout from '~/components/meta/Layout';
import Body from '~/components/typography/Body';

const Home: React.FC = () => (
  <Layout>
    <Flex alignItems="center" justifyItems="center">
      <Body>Welcome to Next JS! Edit src/pages/Home.tsx to get started...</Body>
    </Flex>
  </Layout>
);

export default Home;
