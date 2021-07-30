import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Divider from '~/components/Divider';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import DetailPickle from '~/components/pickles/DetailPickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import ExternalVideo from '~/components/videos/ExternalVideo';

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const PaddedExternalVideo = styled(ExternalVideo)`
  margin-bottom: 80px;
`;

const PersonaBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: ${({ theme }) => theme.spacing[48]};
  border-radius: 50px;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing[80]};
`;

const QuoteBox = styled(Box)`
  border: 5px solid ${({ theme }) => theme.colors.green};
  border-radius: 500px;
  margin-bottom: 48px;
  padding: 48px;
`;

const Ladders: React.FC = () => (
  <Layout>
    <ContentBox column>
      <GridBox center>
        <Title bold>
          Ladders allows people playing games together to track their ranking
          among the group
        </Title>
        <Image alt="screens in phone" src="/Ladders/hero.png" />
      </GridBox>
    </ContentBox>
    <DetailPickle>
      <PickleStack
        bottomText="This was a personal project that I worked on with one back-end and one front-end developer. They drafted a first version with limited functionality that was a jumping off point for the more robust project."
        topText="The Project"
      />
      <PickleStack
        bottomText="I owned design for this project including the visual identity and user experience."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Divider label="Discover" />
      <Title bold>Defining the problem</Title>
      <GridBox center columnGap={48} mb={80} rowGap={48}>
        <Image alt="score keeping on paper" src="/Ladders/scorekeep.png" />
        <Box>
          <Heading bold>What are players using to keep score now?</Heading>
          <Body>
            One of the most fun parts of playing games in having a little bit of
            competitive fun with friends. The tools available to track your
            score now range from something as simple as pen and paper to complex
            tools used by professional gamers and organizations but there&apos;s
            not much in between the two.
          </Body>
        </Box>
      </GridBox>
      <Title bold>Define, Research, Define Again</Title>
      <GridBox center columnGap={48} mb={48}>
        <Box>
          <Heading bold>Building a product roadmap</Heading>
          <Body>
            In order to take this project to the next level, I sat down with the
            developers to define a set of features we would need. We sketched
            out some flows on a whiteboard and created a list of Github Issues
            to keep track of tasks.
          </Body>
        </Box>
        <Image alt="whiteboard planning" src="/Ladders/elo-roadmap.png" />
      </GridBox>
      <Heading bold>Putting the user at the center</Heading>
      <Body>
        After making the long list of needs above, I decided it would be more
        helpful to understand what would be most valuable to the user to
        prioritize our efforts in more of an agile approach. I interviewed a
        handful of people who play games with freinds regularly and used their
        statements to create the following persona.
      </Body>
      <PersonaBox>
        <Body bold mb={0}>
          Persona
        </Body>
        <Title bold>The Avid Gamer</Title>
        <GridBox columnGap={48} rowGap={24}>
          <Box>
            <Heading bold>Goals</Heading>
            <ul>
              <li>
                <Body mb={0}>
                  Improve skills at playing certain games and gauge that
                  improvement
                </Body>
              </li>
              <li>
                <Body mb={0}>Have some competitive fun</Body>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading bold>Frustrations</Heading>
            <ul>
              <li>
                <Body mb={0}>Entering info quickly and easily</Body>
              </li>
              <li>
                <Body mb={0}>Mobile experience</Body>
              </li>
              <li>
                <Body mb={0}>Seeing change in data over time</Body>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading bold>Motivations</Heading>
            <ul>
              <li>
                <Body mb={0}>Winning</Body>
              </li>
              <li>
                <Body mb={0}>Improving Skills</Body>
              </li>
              <li>
                <Body mb={0}>Prizes and bets</Body>
              </li>
            </ul>
          </Box>
        </GridBox>
      </PersonaBox>
      <Divider label="Define" />
      <Title bold>Building with a user-centered approach</Title>
      <Body>
        In our original roadmap we focused on including things like account
        setting and log in screens. After auditing this list under a more
        user-centered lens, we decided to focus on the flows that were bringing
        value to the user before getting into the nitty gritty details.
      </Body>
      <QuoteBox>
        <Title mb={0}>
          “No one ever says, Oh, I can&apos;t wait to set up this new tool”
        </Title>
      </QuoteBox>
      <Heading bold>Sketching out our idea</Heading>
      <Body>
        The developers I was working with had a rough draft of something working
        as seen earlier on this page. Once we decided on the key features, I
        drew out the following screens as a gut check before working through
        wireframes.
      </Body>
      <Image alt="Sketch of app on paper" mb={80} src="/Ladders/elo_wire.png" />
      <GridBox center columnGap={48} mb={80}>
        <Box>
          <Heading bold>Iterating on wireframes</Heading>
          <Body>
            Originally I wanted to lead new users to create a leaderboard before
            they could submit a match by disabling some CTAs and highlighting
            others. I quickly realized that I could let the user click where
            they wanted to if I could help navigate them to complete the
            necessary tasks in the back end.
          </Body>
        </Box>
        <Image alt="initial wireframe" src="/Ladders/wire.png" />
      </GridBox>
      <Heading bold>Adjusting for a user-centered approach</Heading>
      <Body>
        I adjusted this flow so that before filling out the form to submit a
        match, users had to select a game. If there were no games, I could
        populate the form to create a game instead of blocking pathways that a
        user would want to take.
      </Body>
      <Image
        alt="secondary wireframe"
        mb={80}
        src="/Ladders/elo-wires-flow.png"
      />
      <Heading bold>Building functional prototypes</Heading>
      <Body>
        Creating working forms in a prototype was a fun challenge with this
        project that involved a complex prototype full of overlays and hover
        states.
      </Body>
      <Image alt="prototype view" mb={48} src="/Ladders/complexWire.png" />
      <Divider label="Design" />
      <Title bold>Creating a visual design system</Title>
      <Heading bold>Exploring visual directions</Heading>
      <Body>
        When designing branding for Ladders, I wanted to explore an option that
        used primarily dark mode because it is a hallmark of video game culture.
        I also wanted to explore a colorful option on the other end of the
        spectrum to emphasize the playfulness surrounding games. What I landed
        on was a combination of both - using dark mode for usability but with a
        bright yellow to add a bold playful pop.
      </Body>
      <Image
        alt="three different visual directions"
        mb={80}
        src="/Ladders/elo-directions.png"
      />
      <Heading bold>Creating a logo</Heading>
      <Body>
        We developed a list of many names for for the platform and once we
        landed on Ladders we created multiple logo options below.
      </Body>
      <Image
        alt="alternate logo options"
        mb={24}
        src="/Ladders/elo-alt-logos.png"
      />
      <GridBox columnGap={24} mb={80}>
        <Image alt="logo on black" src="/Ladders/elo-logo-01.png" />
        <Image alt="logo on yellow" src="/Ladders/elo-logo-02.png" />
      </GridBox>
      <Heading bold>Cohesive UI Kit</Heading>
      <Body>
        Below are some examples of components that are repeated throughout the
        experience. I built my original wireframes out using components in Figma
        so that when it came time to add the branding it would be very quick and
        easy to change something once and have it reflected everywhere.
      </Body>
      <Image alt="UI Kit" mb={80} src="/Ladders/UIKit_2.png" />
      <Title bold>Final UI Designs</Title>
      <Body>
        These are some of the main screens designed in order to test our main
        user flow. I used the yellow brand color to highlight the most used CTAs
        and the user&apos;s ranking among their group. I used a collapsed
        version of the logo to give more real estate to the valuable information
        and used a fun font for th eleaderboard titles to reflect teh
        playfulness of gaming.
      </Body>
      <Image alt="two screens" src="/Ladders/sideBySide-01.png" />
      <Image alt="two screens" src="/Ladders/sideBySide-02.png" />
      <Divider label="Deploy" />
      <Title bold>Testing for validation and usability</Title>
      <Heading bold>Building functional prototypes</Heading>
      <Body>
        To test these flows I built out two prototypes - one that mimicked the
        experience for a new user and one for a returning user.
      </Body>
      <ExternalVideo
        src="https://player.vimeo.com/video/448968438"
        title="New User Flow"
      />
      <PaddedExternalVideo
        src="https://player.vimeo.com/video/448970796"
        title="Returning User Flow"
      />
      <Heading bold>Executing tests</Heading>
      <Body mb={48}>
        I had each participant complete the tasks for both new and returning
        users. I observed them complete the tasks over Zoom using teh above
        prototypes. 100% of the users completed both tasks with no problems
      </Body>
      <GridBox center columnGap={48} mb={48}>
        <Box>
          <Heading bold>Offering multiple paths to completion</Heading>
          <Body>
            I built the forms so that if a new user clicked the Submit a Match
            button and did not yet have any games set up they could be
            redirected to complete that form first. During testing, participants
            used both pathways to complete the task validating this choice.
          </Body>
        </Box>
        <Image
          alt="screenshot of me doing user testing over Zoom"
          src="/Ladders/testingScreenshot.png"
        />
      </GridBox>
      <Heading bold>Reducing complexity</Heading>
      <Body>
        Initially I added a setting for volatility when users were setting up a
        ranking board. This setting was meant to affect how much each game
        changed the rankings. Most participants were a little confused about
        this setting so I ultimately decided to remove it or build it in to
        advanced settings later.
      </Body>
      <Divider label="Learn" />
      <Title bold>What did I learn from this project?</Title>
      <Heading bold>User-centered approach to a roadmap</Heading>
      <Body>
        Working closely with developers on this project I had a tendency to lean
        into a developer or business mindset to planning the roadmap. I was
        creating priority between sign-up and login pages but shifted my mindset
        to think about the flows that were most necessary and valuable to the
        user.
      </Body>
      <GridBox center columnGap={48} mb={48}>
        <Box>
          <Heading bold>Coding Skills</Heading>
          <Body>
            As a designer with some coding skills working with a small team of 2
            developers to build an entire app, I also put my coding skills to
            the test, styling and building simple elements in our Storybook
            using React.
          </Body>
        </Box>
        <Image
          alt="screenshot of me doing user testing over Zoom"
          src="/Ladders/elo-storybook.png"
        />
      </GridBox>
      <Heading bold>End-to-end app design</Heading>
      <Body>
        Creating something from scratch can be overwhelming at times but always
        rewarding. I found that focusing on what would be the most valuable to
        the user and testing those interactions helped me reign myself in from
        taking on too much right out of the gate.
      </Body>
    </ContentBox>
  </Layout>
);

export default Ladders;
