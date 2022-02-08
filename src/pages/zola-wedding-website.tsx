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
import ExternalVideo from '~/components/videos/ExternalVideo';

const PaddedExternalVideo = styled(ExternalVideo)`
  margin-bottom: 80px;
`;

const ZolaWeddingWebsite: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Wedding Website Customization Tools</Title>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Allow Zola couples to have more control over customizing their wedding website as well as lay the ground work for future scalability. This project will help us reach parity with competitors and create a great first impression for users who sign up via the website tool."
        topText="The Goal"
      />
      <StackedText
        bottomText="My role in this project was to assess and understand designs built for desktop web and translate them to our native app experience. I also worked with tech to understand any implementation issues."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>The Project Plan</Title>
      <Body>
        Zola has been helping couples create wedding websites for many years and
        one of our customer asks has been for more customization of the existing
        website designs. For our first pass at improving the flexibility of the
        templates, we chose 10 of the most popular website templates and
        re-built them in a way that allowed for their header fonts, body fonts
        and background colors to be edited by the user. The product design for
        this feature, was done first by the web team, and my role was to
        translate the experience to native.
      </Body>
      <PaddedExternalVideo
        src="https://vimeo.com/674649619"
        title="video of customization tools on web"
      />
      <Title bold>The Customization Flow</Title>
      <GridBox center mb={80}>
        <Box>
          <Heading bold>Creating a Drawer UI</Heading>
          <Body>
            On web we have the benefit of being able to have the customization
            controls and preview side by side. To create a seamless as possible
            experience on native, we decided to use an action sheet that could
            be swiped up and down from the bottom of the preview screen. This
            pattern mimicked the way that Zola couples access customizations
            when editing paper and invites in the app as well.
          </Body>
          <Body>
            One issue with this solution was that unlike web, the site preview
            on native could not be updated live with each edit. A user must save
            the changes to be able to preview them. Because of this technical
            limitation, we needed to prompt users to save or discard their edits
            when swiping away the drawer without saving first.
          </Body>
        </Box>
        <Heading>Image goes here</Heading>
      </GridBox>
      <GridBox center mb={80}>
        <Box>
          <Heading bold>Clarifying the Website Preview</Heading>
          <Body>
            As mentioned above, the way we show the website preview is a little
            different on native than it is on web. The web team was rendering an
            image of each website page, while on native, we were loading the
            actual website in an iFrame.
          </Body>
          <Body>
            Using an iFrame meant that the website was fully functional and
            interactive in the native preview. To make this more obvious for
            users who utilize both experiences, we added a dismissable banner
            prompting couples to interact.
          </Body>
          <Body>
            Originally we wanted to make the desktop andmobile previews viusally
            distinct by adding a browser top bar or placing the preview inside
            of a phone shape, but the iFrame implementation also meant that we
            could not scale the site without showing a warped representation.
          </Body>
        </Box>
        <Heading>Image goes here</Heading>
      </GridBox>
      <GridBox center mb={80}>
        <Box>
          <Heading bold>Understanding the iOS Color Picker</Heading>
          <Body>
            To allow couples to input custom colors that match their wedding
            vision, we wanted to utilize the iOS color picker. The native color
            picker can only be used on iOS 14 and above. Since less than 5% of
            our users are using iOS 13 or below we decided that we were okay
            gating that functionality rather than attempting to build our own
            color picker.
          </Body>
          <Body>
            Zola aims to be a one stop shop for your wedding and many couples
            want to create websites that match their paper goods. For paper we
            recommend certain colors that we are confident will print well and
            to encourage couples to use the same colors across web and paper, we
            used those recommended colors in this experience as well.
          </Body>
        </Box>
        <Heading>Image goes here</Heading>
      </GridBox>
      <Title bold>Increasing discoverability for customizable designs</Title>
      <Heading bold>Filter and Tags</Heading>
      <Body>FILL IN</Body>
      <Heading bold>Manage Website Dashboard Entrypoint</Heading>
      <Body>FILL IN</Body>
      <Title bold>User Test</Title>
      <Title bold>Launch and Learn</Title>
    </ContentBox>
  </Layout>
);

export default ZolaWeddingWebsite;
