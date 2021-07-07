import Layout from '~/components/meta/Layout';
import Pickle from '~/components/Pickle';
import Body from '~/components/typography/Body';

const Home: React.FC = () => (
  <Layout>
    <div>
      <Body>Welcome to Next JS! Edit src/pages/Home.tsx to get started...</Body>
    </div>
    <Pickle>
      <div
        style={{
          height: 100,
          width: 200,
          margin: 16,
          border: '1px solid black',
        }}
      >
        okay heres some text or whatever
      </div>
      <div
        style={{
          height: 100,
          width: 200,
          margin: 16,
          border: '1px solid black',
        }}
      >
        okay heres some text or whatever
      </div>
    </Pickle>
    <Pickle origin="right">
      <div
        style={{
          height: 100,
          width: 200,
          margin: 16,
          border: '1px solid black',
        }}
      >
        okay heres some text or whatever
      </div>
      <div
        style={{
          height: 100,
          width: 200,
          margin: 16,
          border: '1px solid black',
        }}
      >
        okay heres some text or whatever
      </div>
    </Pickle>
  </Layout>
);

export default Home;
