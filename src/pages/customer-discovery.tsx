import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext } from 'react';

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
import Video from '~/components/videos/Video';
import { CORE_PROGRAMS } from '~/constants/routing';
import { Theme } from '~/constants/theme';
import { BreakpointsContext } from '~/contexts/breakpointsContext';

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const createColorBoxStyles = (theme: Theme) =>
  css({
    padding: theme.spacing[48],
    borderRadius: 50,
    color: theme.colors.white,
    marginBottom: theme.spacing[80],
  });

const BlueBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => createColorBoxStyles(theme)}
`;

const GreenBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.green};
  ${({ theme }) => createColorBoxStyles(theme)}
`;

const RedBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => createColorBoxStyles(theme)}
`;

const BoldSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const WhiteLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
`;

const CustomerDiscovery: React.FC = () => {
  const breakpoints = useContext(BreakpointsContext);
  return (
    <Layout>
      <ContentBox column>
        <Title bold mb={48}>
          Rediscovering the Core Customer
        </Title>
        <Video sources={[{ src: '/CustomerDiscovery/customerhero2.mp4' }]} />
      </ContentBox>
      <DetailPickle>
        <PickleStack
          bottomText="Identify the painpoints of an aspiring intructor and solutions we can provide in the context of the competitive landscape."
          topText="The Goal"
        />
        <PickleStack
          bottomText="Reach out to and conduct interviews with potential users. Identify common pain points and possible solutions to present to the board."
          topText="My Role"
        />
      </DetailPickle>
      <ContentBox column>
        <Title bold>
          Identifying some of the reasons it is hard for us to onboard
          established instructors
        </Title>
        <Body>
          Core is an early stage company on a mission to help fitness
          instructors launch and scale their digital business. During the first
          few months, Core was targeting an audience of established instructors
          with existing subscription businesses. Although we garnered a good
          amount of interest from this group, we found it difficult to migrate
          them from their existing platforms for a few reasons.
        </Body>
        <GridBox center mb={80}>
          <Box>
            <Heading bold>Migrating Students</Heading>
            <Body>
              It&apos;s hard to get students to move off of platforms that they
              are familiar with and might have purchased long-term subscriptions
              on.
            </Body>
            <Heading bold>Migrating Videos</Heading>
            <Body>
              Although Core offered unlimited video storage and white-glove
              migration for a fee, migrating all of their existing content was
              still an obstacle for instructors.
            </Body>
            <Heading bold>Feature Set</Heading>
            <Body>
              As a very new company, Core was lacking some basic features that
              competitors offered.
            </Body>
          </Box>
          <Image
            alt="iPhone screenshot of workout class on Core"
            src="/CustomerDiscovery/KateSession.png"
          />
        </GridBox>
        <Title bold>How do we adapt our business?</Title>
        <Body mb={24}>
          As we experienced sticking points with our current clients, we turned
          our sights down stream to less established instructors.{' '}
          <BoldSpan>
            {' '}
            Our hypothesis was that these budding instructors might be easier to
            migrate onto our platform as we worked towards feature parody with
            our competitors.
          </BoldSpan>
          &nbsp;Our goal was to interview 20+ less established intructors to
          identify their main pain points and how Core could solve them.
        </Body>
        <Heading bold>Our Process</Heading>
        <Image
          alt="Outreach, Interview, Pain Points, Solutions, Product Roadmap"
          mb={80}
          src="/CustomerDiscovery/process.png"
        />
        <GridBox center mb={80}>
          <Box>
            <Title bold>Re-assessing the competitive landscape</Title>
            <Body>
              While our platform was too early for instructors with existing
              subscription businesses, it was also not yet flexible enough for
              aspiring instructors who couldn&apos;t justify a subscription
              business. These creators needed to lean on one-time purchases to
              provide a pathway to subscription membership.
            </Body>
          </Box>
          <Image
            alt="Showing a fitness creators funnel to subcription"
            src="/CustomerDiscovery/monetization.png"
          />
        </GridBox>
        <Image
          alt="chart showing how we stack up against compeetitors"
          mb={80}
          src="/CustomerDiscovery/competitors_1.png"
        />
        <Title bold>
          Key insights from interviews with aspiring instructors
        </Title>
        <Body>
          After interviewing around 20 fitness instructors at different stages
          of their careers, we identified 3 main themes that we wanted to focus
          on building features around to differentiate ourselves.
        </Body>
        <BlueBox>
          <Heading bold>Marketing</Heading>
          {breakpoints.includes('sm') && (
            <Image
              alt="Quote from user"
              mb={48}
              src="/CustomerDiscovery/Marketing.png"
            />
          )}
          {!breakpoints.includes('sm') && (
            <Image
              alt="Quote from user"
              mb={48}
              src="/CustomerDiscovery/Marketing_small.png"
            />
          )}
          <GridBox columnGap={24}>
            <Box>
              <Body mb={16}>Pain Point</Body>
              <Title bold>Instructors need help attracting new students</Title>
            </Box>
            <Box>
              <Body mb={16}>What we build</Body>
              <ul>
                <li>
                  <Body mb={16}>A more robust Explore functionality</Body>
                </li>
                <li>
                  <Body mb={16}>Customer referrals</Body>
                </li>
                <li>
                  <Body mb={16}>
                    Social media and marketing support from our team
                  </Body>
                </li>
              </ul>
            </Box>
          </GridBox>
        </BlueBox>
        <GreenBox>
          <Heading bold>Flexibility</Heading>
          {breakpoints.includes('sm') && (
            <Image
              alt="Quote from user"
              mb={48}
              src="/CustomerDiscovery/Flexibility.png"
            />
          )}
          {!breakpoints.includes('sm') && (
            <Image
              alt="Quote from user"
              mb={48}
              src="/CustomerDiscovery/Flexibility_small.png"
            />
          )}
          <GridBox columnGap={24}>
            <Box>
              <Body mb={16}>Pain Point</Body>
              <Title bold>
                Instructors are constantly experimenting with their offerings to
                engage students
              </Title>
            </Box>
            <Box>
              <Body mb={16}>What we build</Body>
              <ul>
                <li>
                  <Body mb={16}>
                    Ticketed, free and donation-based class pricing
                  </Body>
                </li>
                <li>
                  <Body mb={16}>One-off pricing for each product</Body>
                </li>
                <li>
                  <Body mb={16}>Discount codes</Body>
                </li>
                <li>
                  <Body mb={16}>Non-video formats</Body>
                </li>
              </ul>
            </Box>
          </GridBox>
        </GreenBox>
        <RedBox>
          <Heading bold>Accountability</Heading>
          {breakpoints.includes('sm') && (
            <Image
              alt="Quote from user"
              mb={48}
              src="/CustomerDiscovery/Accountability.png"
            />
          )}
          {!breakpoints.includes('sm') && (
            <Image
              alt="Quote from user"
              mb={48}
              src="/CustomerDiscovery/Accountability_small.png"
            />
          )}
          <GridBox columnGap={24}>
            <Box>
              <Body mb={16}>Pain Point</Body>
              <Title bold>
                Instructors have a hard time holding students accountable,
                especially virtually
              </Title>
            </Box>
            <Box>
              <Body mb={16}>What we build</Body>
              <ul>
                <li>
                  <Body mb={16}>
                    Surface more class history milestones for students and
                    instructors
                  </Body>
                </li>
                <li>
                  <Body mb={16}>
                    Guided programs -&nbsp;
                    <WhiteLink href={CORE_PROGRAMS} internal>
                      See the project here
                    </WhiteLink>
                  </Body>
                </li>
              </ul>
            </Box>
          </GridBox>
        </RedBox>
        <Heading bold>Other takeaways from our interviews</Heading>
        <Body mb={24}>
          <BoldSpan>Instructors want to have an app</BoldSpan> to increase
          accesibility for students but do not have the resources to create one
          on their own. This makes our iOS offering an important differentiator.
        </Body>
        <Body>
          <BoldSpan>Producing high quality video content is hard.</BoldSpan> The
          more resources we can provide around creating videos, the better. Any
          ways that we can provide to communicate workouts outside of video can
          also be helpful.
        </Body>
        <Image
          alt="chart showing how we stack up against compeetitors"
          mb={80}
          src="/CustomerDiscovery/competitors_2.png"
        />
        <Title bold>Translating our findings into a product roadmap</Title>
        <Body>
          While we had some catching up to do in terms of payment flexibility
          and the polish on our live classes feature, we also identified some
          areas that we thought could help us stand out to customers. Our
          immediate roadmap was focused on catching up but we also set our
          sights on ideating larger pushes around Marketing and Accountability.
        </Body>
        <Image
          alt="Product Roadmap"
          mb={80}
          src="/CustomerDiscovery/roadmap.png"
        />
        <Title bold>Key Learnings</Title>
        <Heading bold>
          Understanding your target audience and the market
        </Heading>
        <Body mb={24}>
          Doing interviews with potential customers was extremely helpful in
          understanding what needed to be built in order for them to adopt the
          platform. While it was eye-opening to do this exercise mid-pivot, it
          would have been great to start with a more fleshed out idea of our
          initial customer. Throughout my time at Core, using similar products
          often was a great way to get an idea of what our customer&apos;s other
          options were - and the high points and low points of those products.
        </Body>
        <Heading bold>Working at a startup</Heading>
        <Body>
          With an internal team of 6, Core was the smallest and newest company I
          have worked at full-time. I took on many projects outside of product
          design including advertising, marketing, social media and working
          closely with the AlleyCorp team to navigate our business. Although we
          couldn&apos;t gain traction quickly enough to continue building Core,
          I learned a lot about working closely with a product team and
          navigating start up world.{' '}
        </Body>
      </ContentBox>
    </Layout>
  );
};

export default CustomerDiscovery;
