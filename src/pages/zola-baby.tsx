import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import ExternalVideo from '~/components/videos/ExternalVideo';
import { ZOLA_NAVIGATION_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

function ZOLA_BABY() {
  const belowSm = useBreakpointsLessThan('sm');
  const belowMd = useBreakpointsLessThan('md');
  return (
    <Layout nextPageHref={ZOLA_NAVIGATION_ROUTE}>
      <FlexBox alignItems="center" flexDirection="column" gap={80}>
        <ContentContainer
          gap={32}
          marginTop={belowSm ? SM_NAV_BAR_HEIGHT : NAV_BAR_HEIGHT}
        >
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={32} justifyContent="center">
              <Text
                as="h1"
                lineHeight={1.2}
                variant={belowMd ? 'headline3' : 'headline2'}
              >
                Launching a baby registry app
              </Text>
            </FlexBox>
            <Image alt="Baby Regsistry Screen" src="/ZolaBaby/baby-hero.png" />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            border="1px solid black"
            borderRadius={pxToRem(16)}
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
            padding={32}
          >
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                The Goal
              </Text>
              <Text as="p">
                Create and launch an MVP of a baby registry app experience for
                expecting parents and a web shopping experience for gift givers.
              </Text>
            </FlexBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                My Role
              </Text>
              <Text as="p">
                Lead design from start to finish for Zola baby. Collab with
                other designers, tech, product, marketing and merch to execute.
              </Text>
            </FlexBox>
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Building a foundation from Zola&apos;s best-in-class weddings app
          </Text>
          <Text as="p" variant="bodySmall">
            Zola&apos;s original business is a one-stop-shop for planning your
            wedding. It is a platform that allows couples to create a registry,
            search for vendors, build a guest list, order invites, budget for
            their big day, and more.
          </Text>
          <Text as="p" variant="bodySmall">
            For the baby product, we aimed to leverage as much of the existing
            wedding registry app as possible to keep the scope low. As a first
            step, we conducted an audit of all the screens in the weddings app
            that might be re-used.
          </Text>
          <Image
            alt="sitemap of zola weddings app with parts relevant to baby highlighted"
            src="/ZolaBaby/zolababy-sitemap.png"
          />
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Using prototypes to drive product requirements
          </Text>
          <Text as="p" variant="bodySmall">
            Instead of waiting for a project document, we immediately started
            building a prototype from the relevant wedding screens. We noted
            where changes would be necessary for Zola Baby and used our
            prototype to facilitate discussions with the entire team regarding
            tech requirements, creative implications, merch contracts, and more.
          </Text>
          <Image
            alt="view of figma prototype"
            src="/ZolaBaby/zola-baby-proto-5.png"
          />
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Some screens stayed almost exactly the same between apps
          </Text>
          <GridBox
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
            rowGap={20}
          >
            <Image
              alt="Showing how similar the shop pages in the weddings and baby apps are"
              src="/ZolaBaby/zola-baby-same-1.png"
            />
            <Image
              alt="Showing how similar the shop pages in the weddings and baby apps are"
              src="/ZolaBaby/zola-baby-same-2.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            While others got some baby-centric upgrades
          </Text>
          <GridBox
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
            rowGap={20}
          >
            <Image
              alt="Showing how different the registry pages in the weddings and baby apps are"
              src="/ZolaBaby/zola-baby-different-1.png"
            />
            <Image
              alt="Showing how different the registry pages in the weddings and baby apps are"
              src="/ZolaBaby/zola-baby-different-2.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Getting in the baby mindset
          </Text>
          <Text as="p" variant="bodySmall">
            Both getting married and starting a family can be incredibly
            emotional life moments. As designers, it&apos;s crucial to be
            mindful of the user&apos;s state of mind. While it wasn&apos;t
            within our project&apos;s scope to conduct much formal user
            research, we talked with coworkers and friends to identify key
            principles we needed to consider when switching context from Zola
            Weddings to Zola Baby.
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            columnGap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={24} justifyContent="center">
              <Text as="h1" variant="subtitle3">
                New parents want guidance
              </Text>
              <Text as="p" variant="bodySmall">
                For a wedding registry, most users already have specific gifts
                in mind, like an upgraded vacuum or a coveted Dutch oven.
                However, expecting parents, especially first-time parents, might
                have no idea where to start with their baby registry and seek
                guidance.
              </Text>
              <Text as="p" variant="bodySmall">
                While we didn&apos;t have the resources to build an extensive
                backlog of expert advice content, we embraced the concept of
                guidance by creating a customizable registry checklist. This
                checklist helped parents identify which items were essential for
                their journey into parenthood.
              </Text>
            </FlexBox>
            <ExternalVideo
              aspectRatio="1:1"
              src="https://player.vimeo.com/video/877999210"
              title="Screen recording of checklist feature"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            columnGap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={24} justifyContent="center">
              <Text as="h1" variant="subtitle3">
                Variation of our iOS widgets
              </Text>
              <Text as="p" variant="bodySmall">
                Many parents we spoke to loved the novelty of other apps that
                allowed them to track their baby&apos;s size on a weekly basis.
                However, we understood that not all parents were interested in
                this feature, and not all were tracking a growing baby; some
                were on other paths to parenthood. We created multiple versions
                of our iOS home screen widget for parents to choose from.
              </Text>
            </FlexBox>
            <Image
              alt="Examples of Zola baby widgets that countdown to the due date or tell you what size your baby is relative to a food item"
              src="/ZolaBaby/zola-baby-widget.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            Utilizing existing website themes to let parents personalize their
            registry
          </Text>
          <Text as="p" variant="bodySmall">
            The Zola Weddings experience offers hundreds of wedding website
            designs for couples to choose from. With Zola Baby, we curated a
            select handful of those themes for users to choose from.
          </Text>
          <ExternalVideo
            aspectRatio="16:9"
            src="https://player.vimeo.com/video/878718473"
            title="Showing off the many website themes available for Zola baby registries"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            General UX improvements
          </Text>
          <Text as="p" variant="bodySmall">
            Introducing a new app into the Zola universe prompted us to make
            some long-awaited UX improvements. This included maintaining a
            persistent bottom tab bar across pages, implementing the ability to
            quickly add gifts from specific screens, and enhancing our
            third-party gift adding experience significantly.
          </Text>
          <Image
            alt="baby registry with blue and gold theme"
            src="/ZolaBaby/zola-baby-improvements.png"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            Zola Baby&apos;s web presence
          </Text>
          <Text as="p" variant="bodySmall">
            Along with the users&apos; public-facing registry pages, we created
            an informational landing page for Zola Baby on the web. From this
            page visitors could download our app or search for a registry.
          </Text>
          <Image
            alt="Web page for Zola Baby with QR code to download the app"
            marginBottom={80}
            src="/ZolaBaby/zola-baby-web-noshadow.png"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            Working with the creative team to pressure test new branding
          </Text>
          <Text as="p" variant="bodySmall">
            The creative team worked in parallel with us to craft a distinct
            brand for Zola Baby. We collaborated closely with them to test
            various color palettes in the app and make sure that their choices
            were accessible.
          </Text>
          <Image
            alt="Screenshot of various text and background color combos with accessability ratings"
            marginBottom={80}
            src="/ZolaBaby/zola-baby-accessibility.png"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            Launching Zola Baby
          </Text>
          <Text as="p" variant="bodySmall">
            In the first month after launch we saw thousands of registries being
            created by couples who had used Zola for their wedding. More results
            coming soon!
          </Text>
          {belowSm ? (
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
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default ZOLA_BABY;
