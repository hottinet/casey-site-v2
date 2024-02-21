import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import ExternalVideo from '~/components/videos/ExternalVideo';
import { HOME_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

const DetailBox = styled(FlexBox)`
  border: 1px solid black;
  padding: 32px;
  border-radius: 10px;
`;

const UTBox = styled(FlexBox)`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;

function EXAMPLE_PAGE_CHANGE_ME() {
  const belowSm = useBreakpointsLessThan('sm');
  return (
    <Layout nextPageHref={HOME_ROUTE}>
      <FlexBox alignItems="center" flexDirection="column" gap={80}>
        {/** START INTRO */}
        <ContentContainer
          gap={32}
          marginTop={belowSm ? SM_NAV_BAR_HEIGHT : NAV_BAR_HEIGHT}
        >
          <Text
            as="h1"
            lineHeight={1.2}
            variant={belowSm ? 'headline4' : 'headline3'}
          >
            Building an app-first wedding budget tool for Zola
          </Text>
          <ExternalVideo
            aspectRatio="16:9"
            src="https://player.vimeo.com/video/881214462"
            title="video of budget tool features"
          />
          <Text as="p" variant="bodySmall">
            Note: This video has been updated to reflect new Zola branding as
            well as a few new features added after this case study was created.
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <DetailBox gap={40}>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                The Goal
              </Text>
              <Text as="p">
                Win back prospective couples who were explicitly searching for
                budgeting tools and choosing competitors.
              </Text>
            </FlexBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                My Role
              </Text>
              <Text as="p">
                Lead the design process, collaborate with copy, tech and product
                teams, execute research, user testing, etc.
              </Text>
            </FlexBox>
          </DetailBox>
        </ContentContainer>
        {/** END INTRO */}
        {/** START USER RESEARCH */}
        <ContentContainer gap={32}>
          <Text as="h2" variant="headline4">
            Getting in the user mindset
          </Text>
          <Text as="p" variant="bodySmall">
            I interviewed 5 users who were in the midst of wedding planning and
            actively involved in managing their budgets. Below are the themes
            that emerged.
          </Text>
          <GridBox columns={4}>
            <UTBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                Phases of the journey 🗓️
              </Text>
              <Text as="p" variant="bodySmall">
                Couples describe distinct phases to budgeting: Research and
                education, booking vendors, coasting period, making payments.
              </Text>
            </UTBox>
            <UTBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                Customization 🖌️
              </Text>
              <Text as="p" variant="bodySmall">
                Every wedding is different! Every budget will flex accordingly.
              </Text>
            </UTBox>
            <UTBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                Reminders ⏰
              </Text>
              <Text as="p" variant="bodySmall">
                There is a large lag time between initial booking and making
                final payments. Most couples mentioned payment reminders as a
                dream feature.
              </Text>
            </UTBox>
            <UTBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                Spreadsheet vibes 📊
              </Text>
              <Text as="p" variant="bodySmall">
                Most people we spoke to used a spreadsheet for their budget
                because it felt comfortable and flexible.
              </Text>
            </UTBox>
          </GridBox>
        </ContentContainer>
        {/** END USER RESEARCH */}
        {/** START COMPETETIVE */}
        <ContentContainer gap={32}>
          <Text as="h2" variant="headline4">
            Competetive research
          </Text>
          <Text as="p" variant="bodySmall">
            I looked at a handful of budgeting tools, both wedding related and
            not. Most wedding specific tools did not break down to a payment
            level or include the ability to set reminders. Many of them also
            started with lots of prepopulated items that could be overwhleming
            to the couple.
          </Text>
          <Image
            alt="Competitors"
            src="/ZolaBudget/zola-budget-competitor.png"
          />
        </ContentContainer>
        {/** END COMPETETIVE */}
        {/** START MVP */}
        <ContentContainer gap={32}>
          <Text as="h2" variant="headline4">
            What goes in the MVP?
          </Text>
          <Text as="p" variant="bodySmall">
            In our research we identified a wide variety of pain points across
            the entire wedding budget journey from initial research and sticker
            shock to keeping track of payments in the final days. For our MVP,
            we decided to focus in narrowly on allowing users to do the
            following:
          </Text>
          <ul>
            <li>
              <Text as="p" variant="bodySmall">
                work towards a max budget
              </Text>
            </li>
            <li>
              <Text as="p" variant="bodySmall">
                track both past and upcoming payments with reminders
              </Text>
            </li>
            <li>
              <Text as="p" variant="bodySmall">
                start with a limited amount of prefilled budget items but
                customize as much as they please
              </Text>
            </li>
            <li>
              <Text as="p" variant="bodySmall">
                access Zola budgeting tips where appropriate
              </Text>
            </li>
          </ul>
          <Text as="p" variant="bodySmall">
            For this version we did not focus on the very early stages of
            budgeting where couples are looking for budget education.
          </Text>
        </ContentContainer>
        {/** END MVP */}
        {/** START MODEL */}
        <ContentContainer gap={32}>
          <GridBox gap={40}>
            <FlexBox flexDirection="column" gap={32}>
              <FlexBox flexDirection="column" gap={32}>
                <Text as="h2" variant="headline4">
                  Our budget model
                </Text>
                <FlexBox flexDirection="column" gap={8}>
                  <Text as="p" variant="subtitle3">
                    Budget Categories
                  </Text>
                  <Text as="p" variant="bodySmall">
                    A group of budget items, some predetermined by Zola and some
                    custom
                  </Text>
                  <Text as="p" variant="bodySmall">
                    Example: Attire, Venues and Vendors
                  </Text>
                </FlexBox>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Budget Items
                </Text>
                <Text as="p" variant="bodySmall">
                  One actual expense within a category that can have multiple
                  payments attached
                </Text>
                <Text as="p" variant="bodySmall">
                  Example: Photographer, Photo booth
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Payments
                </Text>
                <Text as="p" variant="bodySmall">
                  Individual payments on an item, both upcoming and paid, that
                  can have attached reminders
                </Text>
                <Text as="p" variant="bodySmall">
                  Example: $1,000 due on MM/DD/YYYY
                </Text>
              </FlexBox>
            </FlexBox>
            <Image
              alt="Flow chart of budget model"
              src="/ZolaBudget/zola-budget-model.png"
            />
          </GridBox>
        </ContentContainer>
        {/** END MODEL */}
        {/** START MATH */}
        <ContentContainer gap={32}>
          <Text as="h2" variant="headline4">
            Our math
          </Text>
          <Text as="p" variant="bodySmall">
            Some competitors used confusing math to display the amounts left or
            paid. We wanted our numbers to be as straightforward as possible and
            we worked with the copy team to create simple names and descriptions
            for each.
          </Text>
          <GridBox gap={40}>
            <FlexBox flexDirection="column" gap={32}>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Max spend
                </Text>
                <Text as="p" variant="bodySmall">
                  The ceiling of your budget—AKA the amount you’d prefer not to
                  go beyond. Edit it at any time.
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Total cost
                </Text>
                <Text as="p" variant="bodySmall">
                  An idea of what you can expect to spend in total. We get this
                  number by adding up everything in your cost column.
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Total due
                </Text>
                <Text as="p" variant="bodySmall">
                  What you still have left to pay. We get this number by adding
                  up everything in your due column.
                </Text>
              </FlexBox>
            </FlexBox>
            <Image
              alt="Bar graph of your budget"
              src="/ZolaBudget/zola-budget-math.png"
            />
          </GridBox>
        </ContentContainer>
        {/** END MATH */}
        {/** START DESIGN */}
        <ContentContainer gap={32}>
          <Text as="h2" variant="headline4">
            Design Iteration
          </Text>
          <FlexBox flexDirection="column" gap={8}>
            <Text as="p" variant="subtitle3">
              iteration 1: how do we show all the numbers?
            </Text>
            <Text as="p" variant="bodySmall">
              Most wedding budgets include an estimate, total and balance for
              each budget item. We wanted to find a way to display these numbers
              in a way that made them easy to compare like the spreadsheets most
              of our couples were currently using. After exploring these three
              iterations, we decided that we would remove the concept of an
              estimate cost from our initial system to reduce complexity.
            </Text>
          </FlexBox>
        </ContentContainer>
        <FlexBox backgroundColor="blue" justifyContent="center" width="100vw">
          <ContentContainer>
            <Image
              alt="Iteration of the designs"
              fitParent
              src="/ZolaBudget/zola-iteration-1.png"
            />
          </ContentContainer>
        </FlexBox>
        <ContentContainer>
          <FlexBox flexDirection="column" gap={8}>
            <Text as="p" variant="subtitle3">
              iteration 2
            </Text>
            <Text as="p" variant="bodySmall">
              Once we narrowed down to two numbers per item, we ran a user test
              where we asked users to compare a version of the budget that
              showed the numbers side by side to a version with a segmented
              control. We found that an overwhelming number of people preferred
              to see the numbers next to each other.
            </Text>
          </FlexBox>
          <GridBox columnGap={20} columns={2} rowGap={20}>
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
        </ContentContainer>
        {/** END DESIGN */}
        {/** START FINAL */}
        <ContentContainer gap={32}>
          <Text as="h2" variant="headline4">
            The Final Product
          </Text>
        </ContentContainer>

        <ContentContainer gap={32}>
          <Text as="h2" variant="headline4">
            Performance
          </Text>
          <Text as="p" variant="bodySmall">
            In the first month, we saw great adoption of the budget tool and
            beat our goals for conversion.
          </Text>
          <Text as="p" variant="bodySmall">
            We ran a survey some time after launch and found that more than half
            of survey takers gave the tool 5 out of 5 stars and most others gave
            it 4 out of 5 stars.
          </Text>
          <Text as="p" variant="bodySmall">
            The most highly requested additions were:
          </Text>
          <ul>
            <li>
              <Text as="p" variant="bodySmall">
                Access to the tool on web
              </Text>
            </li>
            <li>
              <Text as="p" variant="bodySmall">
                More budget setting guidance
              </Text>
            </li>
            <li>
              <Text as="p" variant="bodySmall">
                Ability to include estimate costs
              </Text>
            </li>
          </ul>
          <Text as="p" variant="bodySmall">
            All things we would work on next.
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
