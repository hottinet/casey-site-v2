import Link from '~/components/Link';
import Layout from '~/components/meta/Layout';
import Body from '~/components/typography/Body';

const Home: React.FC = () => (
  <Layout title="Casey Bradford">
    <Link href="/dog">
      <Body>hi i am a link</Body>
    </Link>
  </Layout>
);

export default Home;
