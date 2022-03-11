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

const ZolaCustomWebsite: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>
        Enhancing the customization options for Zola&apos;s Wedding Website tool
      </Title>
      <Image
        alt="Website Preview"
        src="/ZolaCustomWeb/zola-custom-hero-2.png"
      />
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="Allow Zola couples to have more control over customizing their wedding website as well as lay the ground work for future scalability. This project will help us reach parity with competitors and create a great first impression for users who sign up via the website tool."
        topText="The Goal"
      />
      <StackedText
        bottomText="Assess and understand designs built for desktop web and translate them to our native app experience. I also worked with tech to understand any implementation issues."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>The Project Plan</Title>
      <Body>
        Zola has been helping couples create wedding websites for many years and
        one of our most frequent requests from couples has been for more
        customization of the existing website designs. For our first pass at
        improving these tools, we chose 10 of the most popular designs and
        re-built them in a way that allowed for their header fonts, body fonts
        and background colors to be edited by the user. Below is an example of
        how this comes to life in the desktop web experience.
      </Body>
      <PaddedExternalVideo
        src="https://player.vimeo.com/video/674649619"
        title="video of customization tools on web"
      />
      <Title bold>The Customization Flow</Title>
      <GridBox center columnGap={20} mb={80}>
        <Box>
          <Heading bold>Creating the customization drawer UI</Heading>
          <Body mb={20}>
            On web, we have the benefit of being able to have the customization
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

        <ExternalVideo
          aspectRatio="1:1"
          src="https://player.vimeo.com/video/685623616"
          title="video of customization tools on iOS"
        />
      </GridBox>
      <GridBox center mb={80}>
        <Box>
          <Heading bold>Clarifying the Website Preview</Heading>
          <Body mb={20}>
            As mentioned above, the way we show the website preview is a little
            different on native than it is on web. The web team was rendering an
            image of each website page, while on native, we were loading the
            actual website in an iFrame.
          </Body>
          <Body mb={20}>
            Using an iFrame meant that the website was fully functional and
            interactive in the native preview. To make this more obvious for
            users who utilize both experiences, we added a dismissable banner
            prompting couples to interact.
          </Body>
          <Body>
            Originally we wanted to make the desktop and mobile previews
            viusally distinct by adding a browser top bar or placing the preview
            inside of a phone shape, but the iFrame implementation also meant
            that we could not scale the site without showing a warped
            representation.
          </Body>
        </Box>
        <Image
          alt="Website Preview"
          mb={80}
          src="/ZolaCustomWeb/zola-web-preview.png"
        />
      </GridBox>
      <GridBox center mb={80}>
        <Box>
          <Heading bold>Understanding the iOS Color Picker</Heading>
          <Body mb={20}>
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
        <Image
          alt="Screenshots of the color picker tool"
          mb={80}
          src="/ZolaCustomWeb/zola-web-color-picker.png"
        />
      </GridBox>
      <Title bold>Increasing discoverability for customizable designs</Title>
      <Body>
        To educate users about these new and extra customizable templates, we
        added tags and filtering to the listings page. We also added new
        entrypoints from the manage website dashboard page.
      </Body>
      <Image
        alt="Screenshots of the color picker tool"
        mb={80}
        src="/ZolaCustomWeb/zola-web-plp.png"
      />
      <GridBox center>
        <Box>
          <Title bold>User Testing</Title>
          <Body mb={20}>
            Because this feature was built on web first, we leaned on that team
            to test a lot of the wording and messaging around customization.
            Once we solidified that copy however, we did run an unmoderated user
            test on native where we asked users to change the background colors
            and fonts on their website and also navigate to the customization
            options from the main website dashboard.{' '}
          </Body>
          <Body>
            We found that 10/10 of our users were able to complete the tasks and
            rated them a 1/5 for difficulty.
          </Body>
        </Box>
        <Image
          alt="Screenshots of user testing website"
          src="/ZolaCustomWeb/zola-web-usertesting.png"
        />
      </GridBox>
      <Title bold>Initial Results</Title>
      <ul>
        <li>
          <Body mb={20}>
            We found that almost half of all new website sign ups chose to start
            with customizable designs.
          </Body>
        </li>
        <li>
          <Body mb={20}>
            Users who chose customizable website designs had an increased depth
            of usage. They were more likely to take additional steps like adding
            a photo or event, which makes them more likely to publish.
          </Body>
        </li>
        <li>
          <Body mb={20}>
            The native experience launched a few weeks after web and with its
            launch we found that we doubled the usage of website customization
            tools.
          </Body>
        </li>
        <li>
          <Body mb={20}>
            All of these findings led us to invest in website customization
            more.
          </Body>
        </li>
      </ul>
    </ContentBox>
  </Layout>
);

export default ZolaCustomWebsite;
