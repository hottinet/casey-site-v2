import TextButton from '~/components/buttons/TextButton';
import Layout from '~/components/meta/Layout';
import Body from '~/components/typography/Body';

const Home: React.FC = () => (
  <Layout>
    <div>
      <Body>Welcome to Next JS! Edit src/pages/Home.tsx to get started...</Body>
    </div>
    <TextButton label="Hi I am a button" onClick={() => null} />
  </Layout>
);

export default Home;
