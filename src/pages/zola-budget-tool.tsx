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

const ContainerBox = styled(Box)`
  width: 100%;
  display: flex;
  column-gap: 20px;
  margin-bottom: 40px;
`;

const UTBox = styled(Box)`
  background-color: white;
  width: 25%;
  padding: 12px;
`;

const ZolaBudgetTool: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Building an app-first wedding budget tool for Zola</Title>
      <Title bold>VIDEO</Title>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Our first goal, was to win back prospective couples explicitly searching for this budgeting tools and choosing competitors. Our second was to build an MVP buget tool and provide a simple and useful experience for early funnel users"
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
        I interviewed 5 users in the midst of wedding planning and actively
        involved in managing their budgets.
      </Body>
    </ContentBox>
    <ContentBox>
      <ContainerBox>
        <UTBox>
          <Body bold mb={8}>
            Phases of the journey 🗓️
          </Body>
          <Body mb={8}>
            Couples describe distinct phases to budgeting: Research and
            education, booking vendors, coasting period, making payments
          </Body>
        </UTBox>
        <UTBox>
          <Body bold mb={8}>
            Customization 🖌️
          </Body>
          <Body mb={8}>Every wedding is different!</Body>
        </UTBox>
        <UTBox>
          <Body bold mb={8}>
            Reminders ⏰
          </Body>
          <Body mb={8}>
            There is a large lag time between initial booking and making final
            payments.Most couples mentioned having reminders for payments being
            a dream feature
          </Body>
        </UTBox>
        <UTBox>
          <Body bold mb={8}>
            Spreadsheet vibes 📊
          </Body>
          <Body mb={8}>
            Most people we spoke to used a spreadsheet for their budget because
            it felt comfortable and flexible
          </Body>
        </UTBox>
      </ContainerBox>
    </ContentBox>
    <ContentBox column>
      <Title bold>Competetive Research</Title>
      <Body>
        I looked at a handful of budgeting tools, both wedding related and not.
        what did we learn?
      </Body>
    </ContentBox>
    <ContentBox column>
      <Title bold>Should this go in? What goes in the MVP?</Title>
      <Body>
        I looked at a handful of budgeting tools, both wedding related and not.
      </Body>
      <Image
        alt="Competitors"
        mb={80}
        src="/ZolaBudget/zola-budget-competitor.png"
      />
    </ContentBox>
    <ContentBox column>
      <Title bold>Our budget model</Title>
      <Body>xyz</Body>
      <GridBox center columnGap={20} mb={80}>
        <Box>
          <Heading bold mb={8}>
            Budget Categories
          </Heading>
          <Body mb={8}>
            A group of budget items, some predetermined by Zola and some custom
          </Body>
          <Body mb={20}>Example: Attire, Venues and Vendors</Body>
          <Heading bold mb={8}>
            Budget Items
          </Heading>
          <Body mb={8}>
            One actual expense within a category that can have multiple payments
            attached
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
      <GridBox center columnGap={20} mb={80}>
        <Box>
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
            An idea of what you can expect to spend in total. We get this number
            by adding up everything in your cost column.
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
  </Layout>
);

export default ZolaBudgetTool;
