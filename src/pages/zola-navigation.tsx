import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import ExternalVideo from '~/components/videos/ExternalVideo';
import { CULINISTAS_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const UTBox = styled(FlexBox)`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;

function ZOLA_NAV() {
  const belowSm = useBreakpointsLessThan('sm');
  const belowMd = useBreakpointsLessThan('md');
  return (
    <Layout nextPageHref={CULINISTAS_ROUTE}>
      <FlexBox flexDirection="column" gap={80}>
        <ContentContainer
          gap={32}
          marginTop={belowSm ? SM_NAV_BAR_HEIGHT : NAV_BAR_HEIGHT}
        >
          <GridBox
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
                Designing a more scalable and effective home screen
              </Text>
            </FlexBox>
            <Image alt="Zola Home Page" src="/ZolaNav/nav-hero.png" />
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
                Increase the discoverability of new features and the scalability
                of our home page
              </Text>
            </FlexBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                My Role
              </Text>
              <Text as="p">
                Lead the design process, create and execute user testing plan,
                collaborate with tech, copy and product teams.
              </Text>
            </FlexBox>
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={24} justifyContent="center">
              <Text as="h1" lineHeight={1.1} variant="headline4">
                The problem
              </Text>
              <Text as="p" variant="bodySmall">
                Our old navigation had a jump menu with space for 8 products.
                This menu got a lot of action from users but had a limited
                number of spots. Therefore, every time we introduced a new
                feature, we would have to debate which items stayed and which
                went. We also found that no matter what we tested putting below
                the jump menu, no one interacted with it meaningfully.
              </Text>
            </FlexBox>
            <Image
              alt="Focus on section of the nav with 8 links"
              src="/ZolaNav/zola-oldnav.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            Getting in the user&apos;s mindset with a card sort activity
          </Text>
          <Text as="p" variant="bodySmall">
            Internally, we had lots of ideas about how the ecosystem of Zola
            products might be organized but it was important for us to leave our
            own biases aside and understand how users would organize them.
          </Text>
          <Text as="p" variant="bodySmall">
            We set up a card sort activity to do with 6 real Zola users who were
            in the midst of wedding planning. We presented users with a pile of
            cards, each reflecting a different product or page in the Zola app
            and asked them to group the cards however made sense to them. After
            a user had grouped the cards how they saw fit, we would often ask
            them to consolidate down to 4 or 5 groups. Interviews were executed
            via Zoom.
          </Text>
          <Image
            alt="assortment of all of the cards shown in card sort"
            src="/ZolaNav/zola-cards-pre.png"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            Takeaways from card sorting
          </Text>
          <GridBox
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(3, 1fr)',
            }}
          >
            <UTBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                Inspiration 💡
              </Text>
              <Text as="p" variant="bodySmall">
                Every person we interviewed created some sort of Inspiration
                grouping that included Community, Real Weddings and Expert
                Advice. This was also a theme we saw in interviews for other
                projects.
              </Text>
              <Text as="p" opacity=".5" variant="bodySmall">
                &quot;I’m going there to engage with people or seek outside
                inspiration&quot;
              </Text>
            </UTBox>
            <UTBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                Guests 💌
              </Text>
              <Text as="p" variant="bodySmall">
                When forced to consolidate groups, many people combined either
                paper or website with the rest of the guest list tools.
              </Text>
              <Text as="p" opacity=".5" variant="bodySmall">
                &quot;The guest group is like who you have and how you
                communicate with them&quot;
              </Text>
              <Text as="p" opacity=".5" variant="bodySmall">
                &quot;Put the paper samples, invites and save the dates with all
                this guest stuff sort of make that all go hand in hand&quot;
              </Text>
            </UTBox>
            <UTBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                Planning Tools 🧰
              </Text>
              <Text as="p" variant="bodySmall">
                Many participants grouped together things that felt like their
                personal to-dos.
              </Text>
              <Text as="p" opacity=".5" variant="bodySmall">
                &quot;That all seems to be things you&apos;re doing to keep
                track of your wedding holistically on Zola&quot;
              </Text>
              <Text as="p" opacity=".5" variant="bodySmall">
                &quot;Something that I feel like I&apos;ll continue to check in
                on&quot;
              </Text>
            </UTBox>
          </GridBox>
          <Text as="p" variant="bodySmall">
            From our interviews, we identified 4 main groups to start with. We
            planned to put this new grouping in a prototype and guage reactions
            in another round of testing.
          </Text>
          <Image
            alt="cards organized into 4 groups: planning, guests and paper, inspo, and registry"
            src="/ZolaNav/zola-nav-post.png"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            Prototypes for testing
          </Text>
          <Text as="p" variant="bodySmall">
            When translating the groupings from our card sort into designs that
            we could put in front of users, we had two solutions in mind. One
            that continued to use the home page as navigation but in an even
            bigger way and a second that used sheets to expand each section in
            the bottom bar.
          </Text>
          <GridBox
            columnGap={20}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
            rowGap={20}
          >
            <Image
              alt="Home page design in which clicking on a tab in the bottom bar opens a sub-menu"
              src="/ZolaNav/zola-navproto-2.png"
            />
            <Image
              alt="Home page prototype in which the home page is a niv list of navigation links"
              src="/ZolaNav/zola-navproto-1.png"
            />
          </GridBox>
          <Text as="p" variant="bodySmall">
            4 out of 5 of the users preferred the giant jump menu option because
            they liked having a high level view of all of the things they could
            do on Zola. Most couples are not experienced wedding planners and
            seeing everything, helped them think about all the things they might
            need to do for their wedding.
          </Text>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            Refining designs and applying new branding
          </Text>
          <Text as="p" variant="bodySmall">
            At the same time that I was working on this project, Zola was
            getting ready to roll out new branding. We decided that this project
            would be the first that we would execute in the new style. In
            parallel, we worked on updating the branding across all of our
            components and pages.
          </Text>
          <Image
            alt="Different design iterations of what the nav links might look like"
            src="/ZolaNav/zola-nav-style.png"
          />
          <Text as="p" variant="bodySmall">
            For our final iteration of the nav links themselves, we decided to
            use our new brand colors to separate the sections. We worked with
            the copy team to create titles for each section and link.
          </Text>
          <Image
            alt="Different design iterations of what the nav links might look like"
            src="/ZolaNav/zola-nav-links-rectangle.png"
          />
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
              <Text as="h1" lineHeight={1.1} variant="headline4">
                Interaction
              </Text>
              <Text as="p" variant="bodySmall">
                I also wanted to put more thought into the tapped states of the
                jump menu links. In our previous menu, the text changed colors
                when tapped. However, the change was not very noticeable when
                the user&apos;s finger was covering most of the icon and text. I
                worked on multiple iterations where the change could still be
                seen behind a finger.
              </Text>
            </FlexBox>
            <ExternalVideo
              aspectRatio="1:1"
              src="https://player.vimeo.com/video/779806553"
              title="exploration of tapped stated for jump menu items"
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
              <Text as="h1" lineHeight={1.1} variant="headline4">
                Designing into the rest of the page
              </Text>
              <Text as="p" variant="bodySmall">
                After we felt good about the nav links and bottom bar, we turned
                our attention to the rest of the home page. The previous page
                included a lot of marketing, education and other modules that
                got little to no interaction.
              </Text>
              <Text as="p" variant="bodySmall">
                In the old version of the home page, we allowed users to upload
                a photo, but it was not very clear what the photo was connected
                to. For our new home page, we wanted to highlight our wedding
                countdown widget in that space. This would encourage couples to
                add a wedding date, get them familiar with the widget and
                personalize the home page.
              </Text>
            </FlexBox>
            <Image
              alt="Image of widget on iOS home and in the Zola app home"
              src="/ZolaNav/Widget.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h1" lineHeight={1.1} variant="headline4">
            The final product
          </Text>
          {belowSm ? (
            <ExternalVideo
              aspectRatio="1:1"
              src="https://player.vimeo.com/video/780521056"
              title="Demo of home page and navgation"
            />
          ) : (
            <ExternalVideo
              aspectRatio="16:9"
              src="https://player.vimeo.com/video/780521675"
              title="Demo of home page and navgation"
            />
          )}
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Impact
          </Text>
          <FlexBox flexDirection="column" gap={8}>
            <Text as="p" variant="subtitle3">
              Improve Scalability
            </Text>
            <Text as="p" variant="bodySmall">
              This design solution increased the number of links that we could
              fit on our home page. With this new design, users were also more
              likely to scroll all the way to the bottom of the home page.
            </Text>
          </FlexBox>
          <FlexBox flexDirection="column" gap={8}>
            <Text as="p" variant="subtitle3">
              Increase performance
            </Text>
            <Text as="p" variant="bodySmall">
              Our main KPI was to increase the number of users signing up for
              more than 2 products in the first 7 days and we saw that number
              increase by 7%.
            </Text>
          </FlexBox>
          <FlexBox flexDirection="column" gap={8}>
            <Text as="p" variant="subtitle3">
              Enhance Adoption
            </Text>
            <Text as="p" variant="bodySmall">
              Secondarily, we saw clicks and time spent in the first session
              increase significantly.
            </Text>
          </FlexBox>
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default ZOLA_NAV;
