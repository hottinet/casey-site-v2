import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import { HOME_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const UTBox = styled(FlexBox)`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;

function EXAMPLE_PAGE_CHANGE_ME() {
  const belowSm = useBreakpointsLessThan('sm');
  return (
    <Layout nextPageHref={HOME_ROUTE}>
      <FlexBox flexDirection="column" gap={80}>
        {/**
         *
         *  ContentContainer is for bounded countent
         *
         */}
        <ContentContainer
          gap={32}
          marginTop={belowSm ? SM_NAV_BAR_HEIGHT : NAV_BAR_HEIGHT}
        >
          <Text
            as="h1"
            lineHeight={1.2}
            variant={belowSm ? 'headline4' : 'headline3'}
          >
            Redesigning the Zola app home page
          </Text>
          <FlexBox gap={40}>
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
          </FlexBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="h4" variant="headline4">
                The Problem
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
        <ContentContainer gap={32}>
          <Text as="h4" variant="headline4">
            User testing strategy
          </Text>
          <Text as="p" variant="subtitle3">
            Getting in the couple&apos;s mindset via card sorting
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
          <Text as="p" variant="subtitle3">
            Three themes emerge from card sorting
          </Text>
          <GridBox columns={3}>
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
            </UTBox>
            <UTBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                Guests 💌
              </Text>
              <Text as="p" variant="bodySmall">
                When forced to consolidate groups, many people combined either
                paper or website with the rest of the guest list tools.
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
            </UTBox>
          </GridBox>
          <Text as="p" variant="subtitle3">
            Proposing new groupings based on our learnings
          </Text>
          <Text as="p" variant="bodySmall">
            From our interviews, we identified 4 main groups to start with. We
            planned to put this new grouping in a prototype and guage reactions
            in another round of testing.
          </Text>
          <Image
            alt="cards organized into 4 groups: planning, guests and paper, inspo, and registry"
            src="/ZolaNav/zola-cards-post.png"
          />
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="p" variant="subtitle3">
            Prototypes: Presenting two directions for organizing our menu
          </Text>
          <Text as="p" variant="bodySmall">
            When translating the groupings from our card sort into designs that
            we could put in front of users, we had two solutions in mind. One
            that continued to use the home page as navigation but in an even
            bigger way and a second that used sheets to expand each section in
            the bottom bar.
          </Text>
          <GridBox columnGap={20} columns={2} rowGap={20}>
            <Image
              alt="Home page design in which clicking on a tab in the bottom bar opens a sub-menu"
              fitParent
              src="/ZolaNav/zola-navproto-2.png"
            />
            <Image
              alt="Home page prototype in which the home page is a niv list of navigation links"
              fitParent
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
        <ContentContainer>
          <Text as="h4" variant="headline4">
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
        </ContentContainer>

        {/**
         *
         * Anything outside of a content container will go full width
         *
         */}
      </FlexBox>
    </Layout>
  );
}

export default EXAMPLE_PAGE_CHANGE_ME;
