import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

const ZolaPaper: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>
        Increasing Conversion on Zola Invites and Save the Dates
      </Title>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Increase conversion on invites and save the dates in the Zola app."
        topText="The Goal"
      />
      <StackedText
        bottomText="Work on several parts on the paper experience to increase conversion on ordering samples and paper purchases"
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>Increasing traffic to the samples flow</Title>
      <Heading>Changing Order a Proof to Order a Sample</Heading>
      <Heading>Use universal photos in promos if available</Heading>
      <Heading>Reinforce FREE messaging</Heading>
      <Body>
        Drafts page coupon code and free message on plp, push notification
      </Body>
      <Title bold>Improve the Samples Flow</Title>
      <GridBox>
        <Box>
          <Heading bold>Browsing with intent</Heading>
          <ul>
            <li>
              <Body mb={20}>
                Introduce filtering so that couples can find exactly what
                they&apos;re looking for
              </Body>
            </li>
            <li>
              <Body mb={20}>
                Allow the images to be viewed full screen so that couples can
                see designs better before commiting
              </Body>
            </li>
            <li>
              <Body mb={20}>
                Reiterate &quot;FREE&quot; messaging in the browsing experience
              </Body>
            </li>
          </ul>
        </Box>
        <Heading>Video of browse flow</Heading>
      </GridBox>
      <Heading bold>Customization</Heading>
      <Body>photo first step and universal photo flow</Body>
      <Title bold>Faster Review to Checkout</Title>
      <Body>skip cart step</Body>
      <Body>add discount code and free shipping message above fold</Body>
      <Title bold>Results!</Title>
    </ContentBox>
  </Layout>
);

export default ZolaPaper;
