import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
import Image from '~/components/Image';
import { ImageClicker } from '~/components/ImageClicker';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

const CarouselBackground = styled(FlexBox)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

const CarouselImage = styled(Image)`
  max-width: 500px;
`;

const ZolaFilters: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Auditing the Filter UI in the Zola App</Title>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Over time, the Zola app has come to have many different ways of filtering and sorting in different sections of the app. My goal was to create consistency in our approach to filtering and document the resulting strategy."
        topText="The Goal"
      />
      <StackedText
        bottomText="Audit existing designs, research best practices, and collaborate with the team to find improved solutions."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>Auditing our existing filters</Title>
      <GridBox center columnGap={24} mb={40}>
        <Box>
          <Heading bold>Looking inward</Heading>
          <Body mb={20}>
            The first task was to audit all of the different places that we used
            filters in the app. As you can see to the right there were quite a
            few.
          </Body>
          <Body mb={20}>
            When we reviewed this audit as a design team, our key takeaways
            included:
          </Body>
          <ul>
            <li>
              <Body mb={8}>
                We preferred the sticky bottom filtering UI, but needed a
                solution for pages with a different primary CTA.
              </Body>
            </li>
            <li>
              <Body mb={8}>
                We wanted to explore the pros and cons of moving towards a 1
                column layout since that felt more familiar and more modern.
              </Body>
            </li>
            <li>
              <Body mb={8}>
                It would be helpful to have different UI for binary filters vs
                multi-select filters
              </Body>
            </li>
            <li>
              <Body mb={20}>
                Let&apos;s explore a cleaner approach for nested filters.
              </Body>
            </li>
          </ul>
        </Box>
        <CarouselBackground center flex={1}>
          <ImageClicker>
            <CarouselImage
              alt="Examples of filters in other apps"
              src="/ZolaFilters/filter-carousel-1.png"
            />
            <CarouselImage
              alt="Examples of filters in other apps"
              src="/ZolaFilters/filter-carousel-2.png"
            />
            <CarouselImage
              alt="Examples of filters in other apps"
              src="/ZolaFilters/filter-carousel-3.png"
            />
            <CarouselImage
              alt="Examples of filters in other apps"
              src="/ZolaFilters/filter-carousel-4.png"
            />
            <CarouselImage
              alt="Examples of filters in other apps"
              src="/ZolaFilters/filter-carousel-5.png"
            />
            <CarouselImage
              alt="Examples of filters in other apps"
              src="/ZolaFilters/filter-carousel-6.png"
            />
            <CarouselImage
              alt="Examples of filters in other apps"
              src="/ZolaFilters/filter-carousel-7.png"
            />
            <CarouselImage
              alt="Examples of filters in other apps"
              src="/ZolaFilters/filter-carousel-8.png"
            />
          </ImageClicker>
        </CarouselBackground>
      </GridBox>
      <Heading bold>Looking outward</Heading>
      <Body mb={0}>
        To validate our assumptions, I looked to other apps, as well as Baymard
        research studies, to understand best practices and common patterns for
        native filters.
      </Body>
      <GridBox>
        <Image
          alt="Examples of filters in other apps"
          mb={80}
          src="/ZolaFilters/zola-filters-inspo.png"
        />
        <Image
          alt="Examples of filters in other apps"
          mb={80}
          src="/ZolaFilters/zola-filters-inspo-1.png"
        />
      </GridBox>
      <Title bold>Start Sketching</Title>

      <Heading bold>The Filter Action Sheet</Heading>
      <Body>
        The action sheet was the place with the most room for improvement but
        would also be the most work to change.
      </Body>
      <Heading>1 column</Heading>
      <GridBox>
        <Box>
          <Heading>
            How can we make binary or togglable filters feel distinct?
          </Heading>
        </Box>
        <Heading>Image</Heading>
      </GridBox>
      <GridBox>
        <Heading>Place primary CTAs in the thumb zone</Heading>
        <Heading>Image</Heading>
      </GridBox>
      <GridBox>
        <Heading>Discovering best practices for nested filters</Heading>
        <Heading>Image</Heading>
      </GridBox>
      <Title bold>Pull in Key Stakeholders</Title>
      <Heading bold>Understanding the tech limitations</Heading>
      <Body mb={20}>
        SHORTEN Once I had some ideas in Figma, I talked to the head of native
        tech to understand any limitations or edge cases we might have to
        consider. As well as gather any intel on design choices that preceeded
        me.
      </Body>
      <Body mb={20}>
        One problem that we faced was that our filters are implemented to
        disappear if they no longer relevant. Meaning, if I filter by my
        favorite invites, but none of those contain options for foil or
        letterpress, those categories will disappear. In the two column layout a
        user can detect that those categories are moving without the screen
        jumping around, but in a 1 column layout we would have to work around
        that.
      </Body>
      <Body>
        The second edge case that the tech team brought up was &quot;What if a
        category has 500+ option?&quot; ...which initially I thought would never
        happen until they showed me an example from our website where each city
        showed up in a list. We would have to decide how to truncate or allow
        search within massive categories.
      </Body>
      <Heading bold>
        Deciding that it wasnt worth building in its current form
      </Heading>
      <Body>
        When we came together as a larger group to discuss filters we all
        aggreed for the most part on the UI improvements proposed. But we had to
        ask ourselves, what is the business impact of a project like this?
      </Body>
      <Body>
        And when we priortized it against other things in the pipeline that
        would generate a lot of revenue, we decided filters might have to take a
        back seat.
      </Body>
      <Title bold>Separating out Small Wins</Title>
      <Heading bold>Documenting the Browsing UI</Heading>
      <Body mb={20}>
        One of my main goals was to create clear documentation around when to
        use which variant of the filter UI.
      </Body>
      <GridBox>
        <Box>
          <Heading>Primary Filter UI</Heading>
          <Body mb={20}>
            In most cases we wanted to use the UI that stuck to the bottom of
            the browse page. This UI was very thumb-friendly and sleek looking.
            Two changes we made to this component were:
          </Body>
          <ul>
            <li>
              <Body mb={8}>
                Ensuring we always use the word &quot;Filter&quot; and not
                &quot;Refine&quot; which showed up many places in the app but
                didn&apos;t quite match our brand voice.
              </Body>
            </li>
            <li>
              <Body mb={20}>
                Combining the &quot;Filter&quot; and &quot;Sort&quot; actions
                into one action sheet for easy access.
              </Body>
            </li>
          </ul>
        </Box>
        <Heading>Animation of Before and After</Heading>
      </GridBox>
      <GridBox>
        <Box>
          <Heading>
            Secondary UI: For browsing experiences with a primary action
          </Heading>
          <Body>
            There are two places in the app where we can not put the filter UI
            at the bottom of the screen because there is a primary CTA. For
            example, in the flow to order a paper sample, we want users to be
            able to filter down to find the invite that suites their needs, but
            we want to keep the CTA for the next step as is.
          </Body>
        </Box>
        <Heading>Image of primary cta filters</Heading>
      </GridBox>
      <GridBox>
        <Box>
          <Heading>Secondary UI: A case for super simple filters</Heading>
          <Body>
            Lastly, a few places in the app used a &quot;Chip&quot; filter
            style. We want to use this style when there is only 1 category of
            filters and less than 5 options in that category. This makes the
            filters easily visible and accessible. If the category has more than
            5 options, it causes too much vertical scrolling and if there is
            more than 1 category it is confusing to understand which filters
            have been selected.
          </Body>
        </Box>
        <Heading>Video of guest list</Heading>
      </GridBox>
    </ContentBox>
  </Layout>
);

export default ZolaFilters;
