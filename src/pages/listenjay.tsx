import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Divider from '~/components/Divider';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import ExternalVideo from '~/components/videos/ExternalVideo';

const PaddedExternalVideo = styled(ExternalVideo)`
  margin-bottom: ${({ theme }) => theme.spacing[48]};
`;

const HeaderExternalVideo = styled(ExternalVideo)`
  border: ${({ theme }) =>
    `${theme.border.borderWidth[3]} solid ${theme.colors.black}`};
`;

const PersonaGridBox = styled(GridBox)(({ theme }) => ({
  backgroundColor: theme.colors.blue,
  borderRadius: 50,
  color: theme.colors.textSecondary,
}));

const PhoneImage = styled(Image)`
  width: 70%;
`;

const ListenJay: React.FC = () => (
  <Layout>
    <ContentBox column>
      <GridBox center columnGap={48} mb={48}>
        <Box>
          <Title bold>ListenJay helps people discover new podcasts</Title>
          <Body>
            ListenJay lets users share a link to a specific quote from any
            podcast. They have gotten a lot of engagement from sharing these
            quotes on their own social channels. Now they want to create a tool
            that will allow podcasters to take quotes straight from their
            transcript and turn them into sharable graphics.
          </Body>
        </Box>
        <HeaderExternalVideo
          aspectRatio="1:1"
          src="https://player.vimeo.com/video/444995903"
          title="Animation turning a quote into a graphic"
        />
      </GridBox>
      <Divider label="Discover" />
      <Title bold>Understanding the podcaster&apos;s needs</Title>
      <Heading bold>Conducting user interviews</Heading>
      <Body>
        I interviewed a few podcasters with relatively new or small podcasts
        about how they were getting their shows off the ground. Since no one in
        my immediate network has a podcast I did a lot of cold outreach to
        podcast hosts and online podcasting communities to recruit participants.
      </Body>
      <GridBox center mb={48}>
        <PhoneImage alt="phone" src="ListenJay/userInterviews-01.png" />
        <Box>
          <Body mb={24}>Key Takeaways</Body>
          <ul>
            <li>
              <Heading>
                Transcribing is useful to people who want to share quotes and
                have increased accessibility but it can be costly
              </Heading>
            </li>
            <li>
              <Heading>
                Many podcasters depend on their own social channels and
                distribution platforms to promote their shows
              </Heading>
            </li>
            <li>
              <Heading>
                Podcasters are wearing many hats so tools need to be easy to
                learn
              </Heading>
            </li>
          </ul>
        </Box>
      </GridBox>
      <Heading bold>Defining the persona for this feature</Heading>
      <Body>
        ListenJay has features that serve both podcast listeners and podcast
        hosts. When I was collaborating with the ListenJay team to create this
        feature, I learned that they did not know much about what podcasters
        actually needed or used currently so I decided to create a persona for
        their tools aimed at the podcast hosts and producers themselves. This
        persona is based on the key takeaways from my user interviews above.
      </Body>
      <PersonaGridBox center columnGap={48} mb={80} p={48}>
        <Box>
          <Body bold mb={8}>
            Persona
          </Body>
          <Title bold mb={8}>
            The Independent Podcaster
          </Title>
          <Body mb={24}>Male | 30 yrs old | New York</Body>
        </Box>

        <Box>
          <Heading bold>Goals</Heading>
          <ul>
            <li>
              <Body mb={0}>Stand out among the crowd of podcasts</Body>
            </li>
            <li>
              <Body mb={0}>Get his show off the groundn</Body>
            </li>
          </ul>
          <Heading bold>Frustrations</Heading>
          <ul>
            <li>
              <Body mb={0}>
                Experiencing a harsh learning curve on new tools
              </Body>
            </li>
            <li>
              <Body mb={0}>
                Reaching audiences outside of his existing network
              </Body>
            </li>
          </ul>
          <Heading bold>Motivations</Heading>
          <ul>
            <li>
              <Body mb={0}># of listeners</Body>
            </li>
            <li>
              <Body mb={0}>Low cost</Body>
            </li>
          </ul>
        </Box>
      </PersonaGridBox>
      <Divider label="Define" />
      <Title bold>Building the feature</Title>
      <Heading bold>Creating a user flow</Heading>
      <Body>
        Many of the users I interviewed described a process where they would
        edit a transcript or listen back to a show in order to find quotes to
        share on social. They would then go into Canva or a similar tool to
        create graphics from these quotes. My goal with this feature was to
        allow all of that process to happen in one place.
      </Body>
      <Image alt="user flow chart" mb={48} src="/ListenJay/userflow-01.png" />
      <Heading bold>Wireframes</Heading>
      <Body>
        I used Figma to bring pen and paper sketched to life. I built out the
        wire frames using components that would be easy to adjust when adding
        visual design.
      </Body>
      <Image
        alt="sketch of wireframes"
        mb={48}
        src="/ListenJay/wiresketch-01.png"
      />
      <Heading bold>The Transcript Editor</Heading>
      <Body>
        My goal with this page was to create a way for users to easily highlight
        quotes and bring them into the design editor. I looked at many other
        transcript services to identify design patterns that would be successful
        here including Sonix which used a similar highlight functionality.
      </Body>
      <Image
        alt="wireframe of Transcript Editor"
        mb={48}
        src="/ListenJay/wireframe-00.png"
      />
      <Heading bold>The Quote Editor</Heading>
      <Body>
        During my user interviews I found that many podcasters are wearing a lot
        of hats to support their show. Most of them are not designers and need
        quick and easy ways to produce promotional graphics. I wanted this
        editor to allow customization but be relatively simple in nature for my
        initial testing where I could identify additional editing needs.
      </Body>
      <Image
        alt="wireframe of Quote Editor"
        mb={48}
        src="/ListenJay/wireframe-01.png"
      />
      <Divider label="Design" />
      <Title bold>Visual Designs</Title>
      <Body mb={48}>
        I updated the branding for ListenJay as part of another project for them
        and used that new design system to build out the final pages. The
        following video shows the prototype that I built to test this flow.
      </Body>
      <PaddedExternalVideo
        src="https://player.vimeo.com/video/444319554"
        title="Going through the protptype"
      />
      <Heading bold>Adding Design</Heading>
      <Body>
        The ListenJay brand is bold and fun. They want to stand out from the
        stark and techy design of tools like Apple or Spotify and create a more
        friendly vibe.
      </Body>
      <Image
        alt="Mockup of Transcript Editor"
        src="/ListenJay/Hifi_Transcript.png"
      />
      <Image
        alt="Mockup of Quote Editor"
        mb={48}
        src="/ListenJay/Hifi_Design.png"
      />
      <Divider label="Test" />
      <Title bold>Validation and Testing</Title>
      <Body>
        I tested this prototype with a handful of partcicpants to gague the
        usabilty and also test the proof of concept.
      </Body>
      <Heading bold>Validation</Heading>
      <Body>
        All of the participants understood the product and were excited to use
        it.
      </Body>
      <Heading bold>Separating Tasks</Heading>
      <Body>
        For some participants, thinking about editing a transcript and creating
        graphics at the same time was too much. Some participants understood
        that they could highlight something in order to come back later but in
        order to make these tasks more separate, I adjusted the flow below.
      </Body>
      <PaddedExternalVideo
        src="https://player.vimeo.com/video/444317718"
        title="Going through the protptype"
      />
      <Divider label="Learnings" />
      <Title bold>What I learned from this project</Title>
      <Heading bold>Finding participants can be a challenge</Heading>
      <Body>
        Finding people to interview for niche products, like something built
        only for people who have podcasts, can be hard! For this project I
        reached out to multiple networks and a lot of strangers. Some were happy
        to help me!
      </Body>
      <Heading bold>
        User research can lead to great competitive research
      </Heading>
      <Body>
        I found that doing user research before/in tandem with competitive
        analysis allowed me to ask participants what tools they are using day to
        day and then take a closer look at those
      </Body>
      <Heading bold>Building for prototypes</Heading>
      <Body>
        The controls for the design editor on this project were complex to
        prototype for testing. I learned a lot about using overlays and hover
        states in Figma to create something that feels realistic.
      </Body>
    </ContentBox>
  </Layout>
);

export default ListenJay;
