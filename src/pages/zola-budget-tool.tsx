import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Image from '~/components/Image';
import Link from '~/components/Link';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import ExternalVideo from '~/components/videos/ExternalVideo';
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

const ZolaBudgetTool: React.FC = () => {
  const lessThanSm = useBreakpointsLessThan('sm');
  return (
    <Layout>
      <ContentBox column>
        <Title bold>Building an app-first wedding budget tool for Zola</Title>
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
      <DetailPickle>
        <StackedText
          bottomText="Our first goal, was to win back prospective couples who were explicitly searching for budgeting tools and choosing competitors. Our second was to build an MVP buget tool that would provide a simple and useful experience for early funnel users."
          topText="The Goal"
        />
        <StackedText
          bottomText="Lead the design process with support from design team, collaborate with copy, tech and product teams, execute research, user testing, etc."
          topText="My Role"
        />
      </DetailPickle>
      <ContentBox column>
        <Title bold>Getting in the user mindset</Title>
        <Body mb={20}>
          I interviewed 5 users who were in the midst of wedding planning and
          actively involved in managing their budgets.
        </Body>
        <Heading>Key Takeaways</Heading>
      </ContentBox>
      <ContentBox>
        <TwoByTwoGrid columnGap={20} columns={4} mb={40} rowGap={20}>
          <UTBox>
            <Body bold mb={8}>
              Phases of the journey 🗓️
            </Body>
            <Body mb={8}>
              Couples describe distinct phases to budgeting: Research and
              education, booking vendors, coasting period, making payments.
            </Body>
          </UTBox>
          <UTBox>
            <Body bold mb={8}>
              Customization 🖌️
            </Body>
            <Body mb={8}>
              Every wedding is different! Every budget will flex accordingly.
            </Body>
          </UTBox>
          <UTBox>
            <Body bold mb={8}>
              Reminders ⏰
            </Body>
            <Body mb={8}>
              There is a large lag time between initial booking and making final
              payments. Most couples mentioned payment reminders as a dream
              feature.
            </Body>
          </UTBox>
          <UTBox>
            <Body bold mb={8}>
              Spreadsheet vibes 📊
            </Body>
            <Body mb={8}>
              Most people we spoke to used a spreadsheet for their budget
              because it felt comfortable and flexible.
            </Body>
          </UTBox>
        </TwoByTwoGrid>
      </ContentBox>
      <ContentBox column>
        <Title bold>Competetive Research</Title>
        <Body>
          I looked at a handful of budgeting tools, both wedding related and
          not. Most wedding specific tools did not break down to a payment level
          or include the ability to set reminders. Many of them also started
          with lots of prepopulated items that could be overwhleming to the
          couple.
        </Body>
        <Image
          alt="Competitors"
          mb={80}
          src="/ZolaBudget/zola-budget-competitor.png"
        />
      </ContentBox>
      <ContentBox column>
        <Title bold>What goes in the MVP?</Title>
        <Body mb={0}>
          In our research we identified a wide variety of pain points across the
          entire wedding budget journey from initial research and sticker shock
          to keeping track of payments in the final days. For our MVP, we
          decided to focus in narrowly on allowing users to do the following:
        </Body>
        <ul>
          <li>
            <Body mb={8}>work towards a max budget</Body>
          </li>
          <li>
            <Body mb={8}>
              track both past and upcoming payments with reminders
            </Body>
          </li>
          <li>
            <Body mb={8}>
              start with a limited amount of prefilled budget items but
              customize as much as they please
            </Body>
          </li>
          <li>
            <Body mb={8}>access Zola budgeting tips where appropriate</Body>
          </li>
        </ul>
        <Body>
          For this version we did not focus on the very early stages of
          budgeting where couples are looking for budget education.
        </Body>
      </ContentBox>
      <ContentBox column>
        <Title bold>Our budget model</Title>
        <GridBox center columnGap={40} mb={80} smColumns={2}>
          <Box width="100%">
            <Heading bold mb={8}>
              Budget Categories
            </Heading>
            <Body mb={8}>
              A group of budget items, some predetermined by Zola and some
              custom
            </Body>
            <Body mb={20}>Example: Attire, Venues and Vendors</Body>
            <Heading bold mb={8}>
              Budget Items
            </Heading>
            <Body mb={8}>
              One actual expense within a category that can have multiple
              payments attached
            </Body>
            <Body mb={20}>Example: Photographer, Photo booth</Body>
            <Heading bold mb={8}>
              Payments
            </Heading>
            <Body mb={8}>
              Individual payments on an item, both upcoming and paid, that can
              have attached reminders
            </Body>
            <Body mb={20}>Example: $1,000 due on MM/DD/YYYY</Body>
          </Box>
          <Image
            alt="Flow chart of budget model"
            mb={80}
            src="/ZolaBudget/zola-budget-model.png"
          />
        </GridBox>
      </ContentBox>
      <ContentBox column>
        <Title bold>Our math</Title>
        <Body>
          Some competitors used confusing math to display the amounts left or
          paid. We wanted our numbers to be as straightforward as possible and
          we worked with the copy team to create simple names and descriptions
          for each.
        </Body>
        <GridBox center columnGap={40} mb={80} smColumns={2}>
          <Box width="100%">
            <Heading bold mb={8}>
              Max Spend
            </Heading>
            <Body mb={20}>
              The ceiling of your budget—AKA the amount you’d prefer not to go
              beyond. Edit it at any time.
            </Body>
            <Heading bold mb={8}>
              Total Cost
            </Heading>
            <Body mb={20}>
              An idea of what you can expect to spend in total. We get this
              number by adding up everything in your cost column.
            </Body>
            <Heading bold mb={8}>
              Total Due
            </Heading>
            <Body mb={20}>
              What you still have left to pay. We get this number by adding up
              everything in your due column.
            </Body>
          </Box>
          <Image
            alt="Bar graph of your budget"
            mb={80}
            src="/ZolaBudget/zola-budget-math.png"
          />
        </GridBox>
      </ContentBox>
      <ContentBox column>
        <Title bold>Design Iterations</Title>
        <Heading bold>How do we show all the necessary numbers?</Heading>
        <Heading>Iteration 1</Heading>
        <Body>
          Most wedding budgets include an estimate, total and balance for each
          budget item. We wanted to find a way to display these numbers in a way
          that made them easy to compare like the spreadsheets most of our
          couples were currently using. After exploring these three iterations,
          we decided that we would remove the concept of an estimate cost from
          our initial system to reduce complexity.
        </Body>
        <GridBox columnGap={20} columns={3} mb={80} rowGap={20} smColumns={2}>
          <Image
            alt="Iteration of the design with two separate views"
            fitParent
            src="/ZolaBudget/zola-main-1.png"
          />
          <Image
            alt="Iteration of the design where actual and estimate cost are in the same column"
            fitParent
            src="/ZolaBudget/zola-main-2.png"
          />
          <Image
            alt="Iteration of the design that shows three columns"
            fitParent
            src="/ZolaBudget/zola-main-3.png"
          />
        </GridBox>
        <Heading>Iteration 2</Heading>
        <Body>
          Once we narrowed down to two numbers per item, we ran a user test
          where we asked users to compare a version of the budget that showed
          the numbers side by side to a version with a segmented control. We
          found that an overwhelming number of people preferred to see the
          numbers next to each other.
        </Body>
        <GridBox columnGap={20} columns={2} mb={80} rowGap={20} smColumns={2}>
          <Image
            alt="Design with a tab to swap between cost and balance due"
            fitParent
            src="/ZolaBudget/zola-mainb-1.png"
          />
          <Image
            alt="Design with cost and balance due columns both showing"
            fitParent
            src="/ZolaBudget/zola-mainb-2.png"
          />
        </GridBox>
        <Heading bold>How do we relate payments and reminders?</Heading>
        <Body>
          We also had user testers compare a budget tool where the reminders and
          payments were separate to one where the two were combined. We found a
          slight lean towards combining the concepts.
        </Body>
        <GridBox columnGap={20} columns={2} mb={80} rowGap={20} smColumns={2}>
          <Image
            alt="Design with reminders and payments combined"
            fitParent
            src="/ZolaBudget/zola-pay-1.png"
          />
          <Image
            alt="Design with reminders separate from payments"
            fitParent
            src="/ZolaBudget/zola-pay-2.png"
          />
        </GridBox>
        <Heading bold>How do we treat the at-a-glance numbers?</Heading>
        <Body>
          We wanted to have a visual way to show a users progress with their
          budget. Below are three of the top contenders for displaying those
          main numbers. Internally, we decided to move forward with the bar
          graph option.
        </Body>
        <GridBox columnGap={20} columns={3} mb={80} rowGap={20} smColumns={2}>
          <Image
            alt="Design with three big numbers at the top"
            fitParent
            src="/ZolaBudget/zola-graph-1.png"
          />
          <Image
            alt="Design with overlapping bar graph"
            fitParent
            src="/ZolaBudget/zola-graph-2.png"
          />
          <Image
            alt="Design with three bar graph"
            fitParent
            src="/ZolaBudget/zola-graph-3.png"
          />
        </GridBox>
      </ContentBox>
      <ContentBox column>
        <Title bold>The MVP Final Product</Title>
        <Body mb={20}>
          Check out the tool on&thinsp;
          <Link
            hoverImgAlt="iOS"
            href="https://apps.apple.com/us/app/zola/id852691916"
          >
            iOS
          </Link>
          &thinsp;or&thinsp;
          <Link
            hoverImgAlt="Android"
            href="https://play.google.com/store/apps/details?id=com.zola.android.wedding&hl=en_US&gl=US"
          >
            Android.
          </Link>
        </Body>
        <Image
          alt="4 key screens"
          mb={40}
          src="/ZolaBudget/zola-budget-hero.png"
        />
        <Body mb={20}>
          Since launching the budget tool, we have refreshed our branding. See
          it below with a fresh new look.
        </Body>
        <Image
          alt="4 key screens"
          mb={80}
          src="/ZolaBudget/zola-budget-hero-2.png"
        />
      </ContentBox>
      <ContentBox column>
        <Title bold>Performance</Title>
        <Body mb={20}>
          In the first few weeks, we saw great adoption of the budget tool.
          Conversion to budget tool users hovered around 35% beating or goal of
          25%.
        </Body>
        <Body mb={20}>
          We ran a survey some time after launch that was completed by about 300
          regular budget tool users. We found that{' '}
          <b>53% of survey takers gave the tool 5 out of 5 stars</b> and another
          34% gave it 4 out of 5 stars.
        </Body>
        <Body mb={0}>The most highly requested additions were:</Body>
        <ul>
          <li>
            <Body mb={8}>Access to the tool on web</Body>
          </li>
          <li>
            <Body mb={8}>More budget setting guidance</Body>
          </li>
          <li>
            <Body mb={8}>Ability to include estimate costs</Body>
          </li>
        </ul>
        <Body>All things we would work on next!</Body>
      </ContentBox>
      <ContentBox column>
        <Title bold>What did I learn from this project?</Title>
        <Heading bold>Utlilize the copy team early and often.</Heading>
        <Body mb={20}>
          Not all product designers have the luxury of working with a copy
          writer. For small copy tweaks we usually pull in the copy team once
          designs are fairly final but for such a large project I would have
          loved to collaborate with them more from the start.
        </Body>
        <Heading bold>
          Use components for repetetive copy and clearly mark changes
        </Heading>
        <Body mb={20}>
          Because we were making a lot of copy changes toward the end of our
          process, it was sometimes hard for the developers to know what had
          changed. In the future, we hope to use components for any repetetive
          copy and clearly mark changes along the way.
        </Body>
        <Heading bold>Sticking to the scope</Heading>
        <Body mb={20}>
          One of our biggest struggles with this project was scope creep as we
          identifies features that could let us stand apart from competitors.
          From the start we could have been more clear about what we meant by
          MVP.
        </Body>
      </ContentBox>
    </Layout>
  );
};

export default ZolaBudgetTool;
