import Layout from '~/components/meta/Layout';
import Link from '~/components/Link';
import Body from '~/components/typography/Body';

const Home: React.FC = () => (
  <Layout>
    <div>
      <Body>Welcome to Next JS! Edit src/pages/Home.tsx to get started...</Body>
    </div>
    <Link href="/dog">
      <Body>hi i am a link</Body>
    </Link>
  </Layout>
);

export default Home;
