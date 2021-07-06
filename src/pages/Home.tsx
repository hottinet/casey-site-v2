import Button from '~/components/buttons/Button';
import Layout from '~/components/meta/Layout';
import Body from '~/components/typography/Body';

const Home: React.FC = () => (
  <Layout>
    <div>
      <Body>Welcome to Next JS! Edit src/pages/Home.tsx to get started...</Body>
    </div>
    <Button onClick={() => null}>hi i am a button</Button>
  </Layout>
);

export default Home;
