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
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const ZolaBaby: React.FC = () => {
  const lessThanSm = useBreakpointsLessThan('sm');
  return (
    <Layout>
      <ContentBox column>
        <Title bold mb={40}>
          Launching Zola&apos;s first baby registry product
        </Title>
        {lessThanSm ? (
          <Image
            alt="key screens from the baby app"
            src="/ZolaBaby/zola-baby-hero-sm.png"
          />
        ) : (
          <Image
            alt="key screens from the baby app"
            src="/ZolaBaby/zola-baby-hero.png"
          />
        )}
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
        <Heading bold mb={20}>
          Building a foundation from Zola&apos;s best-in-class weddings app
        </Heading>
        <Body mb={20}>
          Zola&apos;s original business is a one-stop-shop for planning your
          wedding. It is a platform that allows couples to create a registry,
          search for vendors, build a guest list, order invites, budget for
          their big day, and more.
        </Body>
        <Body>
          For the baby product, we aimed to leverage as much of the existing
          wedding registry app as possible to keep the scope low. As a first
          step, we conducted an audit of all the screens in the weddings app
          that might be re-used.
        </Body>
        <Image
          alt="sitemap of zola weddings app with parts relevant to baby highlighted"
          mb={80}
          src="/ZolaBaby/zolababy-sitemap.png"
        />
      </ContentBox>
      <ContentBox column mb={80}>
        <Heading bold mb={20}>
          Using prototypes to drive product requirements
        </Heading>
        <Body>
          Instead of waiting for a project document, we immediately started
          building a prototype from the relevant wedding screens. We noted where
          changes would be necessary for Zola Baby and used our prototype to
          facilitate discussions with the entire team regarding tech
          requirements, creative implications, merch contracts, and more.
        </Body>
        <Image
          alt="view of figma prototype"
          mb={80}
          src="/ZolaBaby/zola-baby-proto-5.png"
        />
      </ContentBox>
      <ContentBox column>
        <Heading bold mb={20}>
          Some screens stayed almost exactly the same between apps
        </Heading>
        <GridBox columnGap={20} columns={2} mb={80} rowGap={20} smColumns={2}>
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
        <Heading bold mb={20}>
          While others got some baby-centric upgrades
        </Heading>
        <GridBox columnGap={20} columns={2} mb={80} rowGap={20} smColumns={2}>
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
        <Divider />
        <Title bold>Getting in the baby mindset</Title>
        <Body>
          Both getting married and starting a family can be incredibly emotional
          life moments. As designers, it&apos;s crucial to be mindful of the
          user&apos;s state of mind. While it wasn&apos;t within our
          project&apos;s scope to conduct much formal user research, we talked
          with coworkers and friends to identify key principles we needed to
          consider when switching context from Zola Weddings to Zola Baby.
        </Body>

        <GridBox center columnGap={40} mb={40} smColumns={2}>
          <Box width="100%">
            <Heading bold>
              New parents want guidance about what to put on their registry
            </Heading>
            <Body mb={20}>
              For a wedding registry, most users already have specific gifts in
              mind, like an upgraded vacuum or a coveted Dutch oven. However,
              expecting parents, especially first-time parents, might have no
              idea where to start with their baby registry and seek guidance.
            </Body>
            <Body>
              While we didn&apos;t have the resources to build an extensive
              backlog of expert advice content, we embraced the concept of
              guidance by creating a customizable registry checklist. This
              checklist helped parents identify which items were essential for
              their journey into parenthood.
            </Body>
          </Box>
          <ExternalVideo
            aspectRatio="1:1"
            src="https://player.vimeo.com/video/877999210"
            title="Screen recording of checklist feature"
          />
        </GridBox>
        <GridBox center columnGap={40} mb={40} smColumns={2}>
          <Box width="100%">
            <Heading bold>Variation of our iOS widgets</Heading>
            <Body>
              Many parents we spoke to loved the novelty of other apps that
              allowed them to track their baby&apos;s size on a weekly basis.
              However, we understood that not all parents were interested in
              this feature, and not all were tracking a growing baby; some were
              on other paths to parenthood. We created multiple versions of our
              iOS home screen widget for parents to choose from.
            </Body>
          </Box>
          <Image
            alt="Examples of Zola baby widgets that countdown to the due date or tell you what size your baby is relative to a food item"
            src="/ZolaBaby/zola-baby-widget.png"
          />
        </GridBox>
        <Box mb={80}>
          <Heading bold mb={20}>
            Utilizing existing website themes to let parents personalize their
            registry
          </Heading>
          <Body mb={40}>
            The Zola Weddings experience offers hundreds of wedding website
            designs for couples to choose from. With Zola Baby, we curated a
            select handful of those themes for users to choose from.
          </Body>
          <ExternalVideo
            aspectRatio="16:9"
            src="https://player.vimeo.com/video/878718473"
            title="Showing off the many website themes available for Zola baby registries"
          />
        </Box>
        <Heading bold mb={20}>
          General UX improvments
        </Heading>
        <Body>
          Introducing a new app into the Zola universe prompted us to make some
          long-awaited UX improvements. This included maintaining a persistent
          bottom tab bar across pages, implementing the ability to quickly add
          gifts from specific screens, and enhancing our third-party gift adding
          experience significantly.
        </Body>
        <Image
          alt="baby registry with blue and gold theme"
          mb={80}
          src="/ZolaBaby/zola-baby-improvements.png"
        />
        <Heading bold mb={20}>
          Zola Baby&apos;s web presence
        </Heading>
        <Body>
          Along with the users&apos; public-facing registry pages, we created an
          informational landing page for Zola Baby on the web. From this page
          visitors could download our app or search for a registry.
        </Body>
        <Image
          alt="Web page for Zola Baby with QR code to download the app"
          mb={80}
          src="/ZolaBaby/zola-baby-web-noshadow.png"
        />
        <Heading bold mb={20}>
          Working with the creative team to pressure test new branding
        </Heading>
        <Body>
          The creative team worked in parallel with us to craft a distinct brand
          for Zola Baby. We collaborated closely with them to test various color
          palettes in the app and make sure that their choices were accessible.
        </Body>
        <Image
          alt="Screenshot of various text and background color combos with accessbility ratings"
          mb={80}
          src="/ZolaBaby/zola-baby-accessibility.png"
        />
        <Heading bold mb={20}>
          Launching Zola Baby
        </Heading>
        <Body>
          In the first month after launch we saw thousands of registries being
          created by couples who had used Zola for their wedding. More results
          coming soon!
        </Body>
        {lessThanSm ? (
          <ExternalVideo
            aspectRatio="1:1"
            src="https://player.vimeo.com/video/878773013"
            title="video of a few key baby features"
          />
        ) : (
          <ExternalVideo
            aspectRatio="16:9"
            src="https://player.vimeo.com/video/878771980"
            title="video of a few key baby features"
          />
        )}
      </ContentBox>
    </Layout>
  );
};

export default ZolaBaby;
