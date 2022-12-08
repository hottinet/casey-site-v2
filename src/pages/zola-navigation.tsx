import styled from '@emotion/styled';

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
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const TwoByTwoGrid = styled(GridBox)(({ theme, columns }) => ({
  [theme.breakpoints.sm]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.md]: {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  },
}));

const UTBox = styled(Box)`
  background-color: white;
  padding: 12px;
  border-radius: 10px;
`;

const ZolaNavigation: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold mb={80}>
        Re-designing the Zola iOS nav for scale
      </Title>
      <GridBox columnGap={20} columns={2} mb={40} rowGap={20} smColumns={2}>
        <Image
          alt="Old home page compared to new home page"
          src="/ZolaNav/zola-nav-hero-old-square.png"
        />
        <Image
          alt="Old home page compared to new home page"
          src="/ZolaNav/zola-nav-hero-new-square.png"
        />
      </GridBox>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Our previous navigation was extremely active but not very scalable. We wanted to have a design framework that would work well as we continued to add products. We also wanted to convert new users into more products."
        topText="The Goal"
      />
      <StackedText
        bottomText="Lead design process with support from other designers, create and execute user testing plan, collaborate with tech, copy and product teams."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>Our timeline</Title>
      <TwoByTwoGrid columnGap={20} columns={4} mb={80} rowGap={20}>
        <UTBox>
          <Body bold mb={8}>
            Week 1-2
          </Body>
          <Body mb={8}>
            Project kickoff. Plan and execute card sorts interviews.
          </Body>
        </UTBox>
        <UTBox>
          <Body bold mb={8}>
            Week 2-4
          </Body>
          <Body mb={8}>
            Apply learnings from card sort exercises to prototypes for another
            round of user testing. Present results to the team.
          </Body>
        </UTBox>
        <UTBox>
          <Body bold mb={8}>
            Week 5-8
          </Body>
          <Body mb={8}>
            Focus on moving designs to high fidelity, collaborating with copy
            team, incorporating new branding and mapping out changes on affected
            pages.
          </Body>
        </UTBox>
        <UTBox>
          <Body bold mb={8}>
            Week 9-13
          </Body>
          <Body mb={8}>Kick off with developers, answer questions, VQA.</Body>
        </UTBox>
      </TwoByTwoGrid>
    </ContentBox>
    <ContentBox column>
      <GridBox center columnGap={40} mb={80} smColumns={2}>
        <Box width="100%">
          <Title bold>The problem</Title>
          <Body>
            Our old navigation had a jump menu with 8 spots for products. This
            menu got a lot of action from users but had a limited number of
            spots. Therefore, every time we introduced a new product, we would
            have to have an debate about which items stayed and which left. We
            also found that no matter what we tested putting below the jump
            menu, we could not get anyone to scroll or interact.
          </Body>
        </Box>
        <Image
          alt="Focus on section of the nav with 8 links"
          mb={80}
          src="/ZolaNav/zola-oldnav.png"
        />
      </GridBox>
    </ContentBox>
    <ContentBox column>
      <Title bold>User testing strategy</Title>
      <Heading bold>Card Sort</Heading>
      <Body mb={20}>
        Internally, we had lots of ideas about how the ecosystem of Zola
        products might be organized but it was important for us to leave our own
        biases aside and understand how users would organize them.
      </Body>
      <Body>
        We set up a card sort activity to do with 6 real Zola users who were in
        the midst of wedding planning. We presented users with a
        &quot;pile&quot; of cards, each reflecting a different product or page
        in the Zola app and asked them to group the cards however made sense to
        them. After a user had grouped the cards how they saw fit, we would
        often ask them to consolidate down to 4 or 5 groups. Interviews were
        executed via Zoom.
      </Body>
      <Image
        alt="assortment of all of the cards shown in card sort"
        mb={80}
        src="/ZolaNav/zola-cards-pre.png"
      />
      <Heading bold>Three specific themes emerge from card sorting</Heading>
    </ContentBox>
    <ContentBox>
      <TwoByTwoGrid columnGap={20} columns={3} mb={80} rowGap={20}>
        <UTBox>
          <Body bold mb={8}>
            Inspiration 💡
          </Body>
          <Body mb={8}>
            Every person we interviewed created some sort of Inspiration
            grouping that included Community, Real Weddings and Expert Advice.
            This was also a theme we saw in interviews for other projects.
          </Body>
          <Body>
            &quot;I’m going there to engage with people or seek outside
            inspiration&quot;
          </Body>
        </UTBox>
        <UTBox>
          <Body bold mb={8}>
            Guests 💌
          </Body>
          <Body mb={8}>
            When forced to consolidate groups, many people combined either paper
            or website with the rest of the guest list tools
          </Body>
          <Body mb={8}>
            &quot;The guest group is like who you have and how you communicate
            with them&quot;
          </Body>
          <Body mb={8}>
            &quot;Put the paper samples, invites and save the dates with all
            this guest stuff sort of make that all go hand in hand&quot;
          </Body>
        </UTBox>
        <UTBox>
          <Body bold mb={8}>
            Planning Tools 🧰
          </Body>
          <Body mb={8}>
            Many participants grouped together things that felt like their
            to-dos
          </Body>
          <Body mb={8}>
            &quot;Something that I feel like i&apos;ll continue to check in
            on&quot;
          </Body>
          <Body mb={8}>
            &quot;That all seems to be things you&apos;re doing to keep track of
            your wedding holistically on Zola.&quot;
          </Body>
        </UTBox>
      </TwoByTwoGrid>
    </ContentBox>
    <ContentBox column>
      <Heading bold>The resulting structure</Heading>
      <Body mb={20}>
        From our interviews, we identified 4 main groups to start with. We
        planned to put this new grouping in a prototype and guage reactions in
        another round of testing.
      </Body>
      <Image
        alt="cards organized into 4 groups: planning, guests and paper, inspo, and registry"
        mb={80}
        src="/ZolaNav/zola-cards-post.png"
      />
    </ContentBox>
    <ContentBox column>
      <Heading bold>
        Prototypes: Two different ways to present this new structure
      </Heading>
      <Body mb={20}>
        When translating the groupings from our card sort into designs that we
        could put in front of users, we had two solutions in mind. One that
        continued to use the home page as navigation but in an even bigger way
        and a second that used sheets to expand each section in the bottom bar.
      </Body>
      <GridBox columnGap={20} columns={2} mb={40} rowGap={20} smColumns={2}>
        <Image
          alt="Home page prototype in which the home page is a niv list of navigation links"
          fitParent
          src="/ZolaNav/zola-navproto-1.png"
        />
        <Image
          alt="Home page design in which clicking on a tab in the bottom bar opens a sub-menu"
          fitParent
          src="/ZolaNav/zola-navproto-2.png"
        />
      </GridBox>
      <Body>
        4 out of 5 of the users prefered the giant jump menu option because they
        liked having a high level view of all of the things they could do on
        Zola. Most couples are not experienced wedding planners and seeing
        everything, helped them think about all the things they might need to do
        for their wedding.
      </Body>
    </ContentBox>
    <ContentBox column>
      <Title bold>Refining designs and applying new branding</Title>
      <Body mb={40}>
        At the same time that the mobile team was working on this project, Zola
        was refining some new branding. We decided that this project would be
        the first that we would execute in the new styling. In parallel, we
        worked on restyling all of our components across the app.
      </Body>
      <Image
        alt="Different design iterations of what the nav links might look like"
        mb={40}
        src="/ZolaNav/zola-nav-style.png"
      />
      <Body>
        {' '}
        For our final iteration of the nav links themselves, we decided to use
        our new brand colors to separate the sections. We worked with the copy
        team to create titles for each section and link. We explored lots of
        options for tapped states of these links.
      </Body>
      <Heading bold>Add video of the nav</Heading>
      <Image
        alt="Final design iteration of the nav links"
        mb={40}
        src="/ZolaNav/zola-nav-links-rectangle.png"
      />
      <Heading bold>Designing into the rest of the page</Heading>
      <Body mb={20}>
        After we felt good about the nav links and bottom bar, we turned our
        attention to the rest of the home page. The previous page included a lot
        of marketing, education and other modules that got little to no
        interaction.
      </Body>
      <Body>
        In the old version of the home page, we allowed users to upload a photo,
        but it was not very clear what the photo was connected to. For our new
        home page, we wanted to highlight our wedding countdown widget in that
        space. This would encourage couples to add a wedding date, get them
        familiar with the widget and personalize the home page.
      </Body>
      <Body>
        We tried a few other additions to the page inspired by our web team
        including allowing users to choose a theme color for the page and giving
        them easy access to their shareable links. Ultimately, we wanted to get
        more navigation above the fold so did not include either of those.
      </Body>
      <Heading bold>Add video of the nav</Heading>
    </ContentBox>
    <ContentBox column>
      <Title bold>Results</Title>
      <Body>
        we fit 125% more products in the nav, time spent in app in first session
        and number of clicks in nav are up
      </Body>
      <Body>
        # of app sign ups activating 1+ and 2+ products within 7 days up
      </Body>
      <Body>paper sign ups up 59%, rgp sign ups up 25%</Body>
      <Body>Registry slightly down</Body>
    </ContentBox>
  </Layout>
);

export default ZolaNavigation;
