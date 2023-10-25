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
import ExternalVideo from '~/components/videos/ExternalVideo';
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
      </ContentBox>
      <ContentBox column mb={80}>
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
        <ExternalVideo
          aspectRatio="16:9"
          src="https://player.vimeo.com/video/876404091"
          title="Screen recording of prototype"
        />
      </ContentBox>
      <ContentBox column>
        <Heading bold mb={40}>
          Some screens were stayed almost exactly the same between apps.
        </Heading>
        <GridBox columnGap={20} columns={2} mb={40} rowGap={20} smColumns={2}>
          <Image
            alt="Showing how similar the shop pages in the weddings and baby apps are"
            fitParent
            src="/ZolaBaby/zola-baby-same-1.png"
          />
          <Image
            alt="Showing how similar the shop pages in the weddings and baby apps are"
            fitParent
            src="/ZolaBaby/zola-baby-same-2.png"
          />
        </GridBox>
        <Heading bold mb={40}>
          While others got some baby-centric upgrades
        </Heading>
        <GridBox columnGap={20} columns={2} mb={40} rowGap={20} smColumns={2}>
          <Image
            alt="Showing how different the registry pages in the weddings and baby apps are"
            fitParent
            src="/ZolaBaby/zola-baby-different-1.png"
          />
          <Image
            alt="Showing how different the registry pages in the weddings and baby apps are"
            fitParent
            src="/ZolaBaby/zola-baby-different-2.png"
          />
        </GridBox>
        <Heading bold mb={40}>
          General UX improvments - leave it better than you found it - move this
          section?
        </Heading>
        <Body>
          Putting a new app into the Zola universe gave us a chance to make some
          long-awaited UX improvements such as, keeping the bottom tab bar
          persistent across pages, building the ability to quick add gifts from
          a shop page, and significantly improving our third-party gift adding
          experience.
        </Body>
        <Image
          alt="baby registry with blue and gold theme"
          mb={80}
          src="/ZolaBaby/zola-baby-improvements.png"
        />
        <GridBox center columnGap={40} mb={40} smColumns={2}>
          <Box width="100%">
            <Title bold>Checklist</Title>
            <Body>
              Compared to a wedding registry user, expecting parents need more
              guidance about what type of gifts to add to a baby registry -
              especially if they are a first time parent.
            </Body>
            <Body>
              Although we didn’t have the resources to build up a backlog of
              expert advice articles, we leaned into guidance by creating a
              registry checklist that was accessible via the tab bar navigation.
            </Body>
          </Box>
          <ExternalVideo
            aspectRatio="1:1"
            src="https://player.vimeo.com/video/877999210"
            title="Screen recording of checklist feature"
          />
        </GridBox>
        <Title bold>Emotion</Title>
        <Body>
          playing into emotion and adding nice moments without being overbearing
          or excluding anyone
        </Body>
        <GridBox center columnGap={40} mb={40} smColumns={2}>
          <Box width="100%">
            <Heading bold>
              &quot;What size is your baby?&quot; iOS widget
            </Heading>
            <Body>
              We also wanted to lean into the emotional side of becoming a
              parent by including an optional “What size is your baby?”
              countdown. A fun thing that many other baby related apps include.
            </Body>
          </Box>
          <ExternalVideo
            aspectRatio="1:1"
            src="https://player.vimeo.com/video/877999210"
            title="Screen recording of checklist feature"
          />
        </GridBox>
        <Heading bold mb={40}>
          Website themes - show off multiple
        </Heading>
        <Body>
          For baby we extracted a handful of wedding website themes to use to
          allow expecting parents to personalize their registry - something not
          a lot of competitors are doing.
        </Body>
        <ExternalVideo
          aspectRatio="16:9"
          src="https://player.vimeo.com/video/878013239"
          title="Showing off the many website themes available for Zola baby registries"
        />
        <Heading bold mb={40}>
          Web pre auth page
        </Heading>
        <Heading bold mb={40}>
          Working w creative
        </Heading>
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
