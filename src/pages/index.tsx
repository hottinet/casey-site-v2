import ArrowButton from '~/components/buttons/ArrowButton';
import Layout from '~/components/meta/Layout';

const Home: React.FC = () => (
  <Layout title="Casey Bradford">
    <div style={{ backgroundColor: 'black' }}>
      <ArrowButton title="some page" onClick={undefined} />
    </div>
  </Layout>
);

export default Home;
