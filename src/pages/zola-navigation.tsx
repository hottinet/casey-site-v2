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
      <Title bold>FPO idk ehat the title is</Title>
      <Title bold>Image?</Title>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Our previous navigation was extremely active but not very scalable. We wanted to have a design framework that would work well as we continued to add products. We also wanted to convert new users into multiple products better."
        topText="The Goal"
      />
      <StackedText
        bottomText="Lead design process with support from other designers, create and execute user testing plan, collaborate with tech, copy and product teams"
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>explain problem better?</Title>
      <Title bold>process image?</Title>
      <Title bold>FPO User testing strategy</Title>
      <Body>Card sort and prototypes</Body>
      <Heading bold>FPO Card Sort</Heading>
      <Body mb={20}>
        Internally, we had lots of ideas about how the ecosystem of Zola
        products might be organized but it was important for us to leave our own
        biases aside and understand how users would organize them.
      </Body>
      <Body>
        We set up a card sort activity to do with 6 real Zola users who were in
        the midst of wedding planning. We presented users with a
        &quot;pileß&quot; of cards, each reflecting a different product or page
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
      <Heading bold>fpo Card sort key learnings</Heading>
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
            &quot; I’m going there to engage with people or like seek outside
            inspiration &quot;
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
            &quot; The guest group is like who you have and how you communicate
            with them &quot;
          </Body>
          <Body mb={8}>
            &quot; put the paper samples, invites and save the dates with all
            this guest stuff sort of make that all go hand in hand &quot;
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
            &quot; Something that I feel like i&apos;ll continue to like check
            in on &quot;
          </Body>
          <Body mb={8}>
            &quot; That all seems to be like things you&apos;re doing to keep
            track of your wedding holistically on Zola. &quot;
          </Body>
        </UTBox>
      </TwoByTwoGrid>
    </ContentBox>
    <ContentBox column>
      <Heading bold>The resulting organization</Heading>
      <Image
        alt="cards organized into 4 groups: planning, guests and paper, inspo, and registry"
        mb={80}
        src="/ZolaNav/zola-cards-post.png"
      />
    </ContentBox>
    <ContentBox column>
      <Heading bold>fpo Protoypes</Heading>
      <Body>
        When translating the groupings from our card sort into designs that we
        could put in front of users, we had two solutions in mind. One that
        continued to use the home page as navigation but in an even bigegr way
        and a second that used sheets to expand each section in the bottom bar.
      </Body>
      <Body> show two protos in two side by side images</Body>
    </ContentBox>
    <ContentBox column>
      <Title bold>FPO Refining designs and applying new branding</Title>
    </ContentBox>
  </Layout>
);

export default ZolaNavigation;
