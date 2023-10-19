import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Divider from '~/components/Divider';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import ExternalVideo from '~/components/videos/ExternalVideo';
import Video from '~/components/videos/Video';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const ZolaBaby: React.FC = () => {
  const lessThanSm = useBreakpointsLessThan('sm');
  return (
    <Layout>
      <ContentBox column>
        <Title bold mb={40}>
          Launching Zola&apos;s first baby registry product
        </Title>
      </ContentBox>
      <DetailPickle>
        <StackedText
          bottomText="Create and launch an MVP of a baby registry app experience for expecting parents and a web shopping experience for gift givers."
          topText="The Goal"
        />
        <StackedText
          bottomText="Lead design from start to finish for Zola baby. Collab with other designers, tech, product, marketing and merch to execute."
          topText="My Role"
        />
      </DetailPickle>
      <ContentBox column>
        <Heading bold mb={40}>
          Building a foundation from the weddings app
        </Heading>
        <Body>
          We wanted to use as much of the existing wedding registry app as
          possible for our baby product to keep the scope low. As a first step,
          we did an audit of all of the screens in the weddings app that might
          be used in baby.
        </Body>
        <Image
          alt="sitemap of zola weddings app with parts relevant to baby highlighted"
          mb={80}
          src="/ZolaBaby/zolababy-sitemap.png"
        />
        <Heading bold mb={40}>
          Using prototypes to drive product requirements
        </Heading>
        <Body>
          Instead of waiting for a project doc, we almost immediately started
          building a prototype from the relevant wedding screens. We noted where
          things would have to change for Zola Baby and used our prototype to
          drive product conversations with the whole team regarding tech
          requirements, creative implications, logo placements, etc.
        </Body>
        <Body>put an image or video of prototype</Body>
      </ContentBox>
      <ContentBox>
        {lessThanSm ? (
          <ExternalVideo
            aspectRatio="1:1"
            src="https://player.vimeo.com/video/750455888"
            title="video of budget tool features"
          />
        ) : (
          <ExternalVideo
            aspectRatio="16:9"
            src="https://player.vimeo.com/video/750456231"
            title="video of budget tool features"
          />
        )}
      </ContentBox>
    </Layout>
  );
};

export default ZolaBaby;
