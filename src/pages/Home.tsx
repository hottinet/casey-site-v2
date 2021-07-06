import IconButton from '~/components/buttons/IconButton';
import Layout from '~/components/meta/Layout';
import Body from '~/components/typography/Body';

const Home: React.FC = () => (
  <Layout>
    <div>
      <Body>Welcome to Next JS! Edit src/pages/Home.tsx to get started...</Body>
    </div>
    <IconButton onClick={() => null}>
      <div style={{ height: 50, width: 50 }}>hi</div>
    </IconButton>
  </Layout>
);

export default Home;
