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

const ZolaPaper: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>
        Increasing Conversion on Zola Invites and Save the Dates
      </Title>
    </ContentBox>
    <DetailPickle>
      <StackedText
        bottomText="We found that the Zola native apps were accounting for 35% of traffic to paper products but only 15% of sales. Our goal was to increase conversion at different steps of the funnel by executing only extra-small and small sized projects."
        topText="The Goal"
      />
      <StackedText
        bottomText="Revisit several parts of the paper experience and help to identify low lift ways that we can increase conversion on sample orders and paper purchases."
        topText="My Role"
      />
    </DetailPickle>
    <ContentBox column>
      <Title bold>Increasing traffic to the samples flow</Title>
      <Body mb={20}>
        In the Zola app, couples can try out their products before purchasing by
        ordering a selection of free samples or a free proof of their paper
        order. We know that couples who order one or the other convert to
        placing paper orders at a high rate. However, there is not a clear
        distinction between how we expect couples to use the two options.
      </Body>
      <Body mb={20}>
        Our hypothesis was that the if we prioritize adding entry points to
        samples over proofs, especially for couples early in their paper
        journey, we can increase conversion because the samples flow is simpler
        and quicker to complete and also the word &quot;Sample&quot; is a little
        more user friendly.
      </Body>
      <GridBox center>
        <Box>
          <Heading bold>
            Order a <s>Proof</s> Sample
          </Heading>
          <Body>
            On Product Detail Pages where samples were available, we changed our
            secondary CTA from &quot;Order a Proof&quot; to &quot;Order a
            Sample&quot;. We thought that this language was more straightforward
            to the user and that driving couples into our samples flow would be
            a better experience.
          </Body>
        </Box>
        <Image
          alt="Before and After changing the CTA"
          src="/ZolaPaper/zola-paper-sample-cta.png"
        />
      </GridBox>
      <GridBox center>
        <Box>
          <Heading bold>Personalizing our promos</Heading>
          <Body>
            There are many places in the Zola experience for couples to upload
            photos including their wedding website, registry and other wedding
            communications. Because we have these photos stored, we are able to
            show couples previews of paper products including photos they have
            uploaded instead of stock photography. Being able to envision
            themselves in the product makes couples more excited to order
            samples.
          </Body>
        </Box>
        <Image
          alt="Diagram showing photo being placed in promo"
          src="/ZolaPaper/zola-paper-photo-promo.png"
        />
      </GridBox>
      <Heading bold>Highlight Samples More</Heading>
      <Body>
        Overall, we added more entry points to the samples flow to make it
        easier for couples to access. Some places included the Your Drafts page,
        where couples view paper products they have previously started
        customizing, the paper product listing pages, where couples browse
        options, and also in our push notifications.
      </Body>
      <Title bold>Improving Conversion in the Samples Flow</Title>
      <Body>
        Samples are a very important for getting users to purchase Save the
        Dates and Invitations. We noticed that in the native app our samples
        flow had a much lower completion rate than on web and many users were
        dropping off in the first few steps. Becuase a high volume of samples
        orders are placed in the app, it was important for us to remove friction
        in this process. However, large changes to the functionality would not
        be in scope.
      </Body>
      <GridBox center columnGap={40} mb={80}>
        <Box>
          <Heading bold>Browsing with intent</Heading>
          <ul>
            <li>
              <Body mb={20}>
                We introduce filtering on the card selection page so that
                couples could find exactly what they&apos;re looking for
              </Body>
            </li>
            <li>
              <Body mb={20}>
                We created a way for users to view the card images in full
                screen so that couples could carefully inspect designs before
                adding to their order.
              </Body>
            </li>
            <li>
              <Body mb={20}>
                We also reiterated the &quot;FREE&quot; messaging within the
                browsing experience to increase confidence.
              </Body>
            </li>
          </ul>
        </Box>
        <ExternalVideo
          aspectRatio="1:1"
          src="https://player.vimeo.com/video/679368547"
          title="Screen recording of filtering UI"
        />
      </GridBox>
      <Heading bold>
        Introducing Universal Photos in the Customization Flow
      </Heading>
      <Body mb={20}>
        While we did not want to make any large changes to the samples
        customization flow, we decided that reordering the photo upload step to
        be the first step might make couples more excited about the process. We
        know that our couples love to see themselves reflected in our products
        as much as possible.
      </Body>
      <Body>
        To make this step more seamless for couples who might have uploaded
        photos to other experiences in on Zola, we were able to pull in and
        auto-select these photos. Our hypothesis was that this would save
        couples the trouble of fumbling through their photo library for the
        perfect pic when we might already have access to their number one.
      </Body>
      <ExternalVideo
        aspectRatio="1:1"
        src="https://player.vimeo.com/video/679368586"
        title="xyz"
      />
      <Title bold>Speeding up Paper Checkout</Title>
      <Body mb={20}>
        One of the big differences between the web and native experiences was
        that on web, we took users from the Review step straight to Checkout,
        skipping the Cart. Since the Review page acts similarly to a cart, we
        wanted to mimic this behavior on native.
      </Body>
      <Image
        alt="Three screens with the second, cart step, grayed out."
        mb={80}
        src="/ZolaPaper/zola-paper-cart.png"
      />
      <Body mb={20}>
        In the web experience there is also much more real estate on the screen
        to add messaging about coupon codes and free shipping in the review
        step.
      </Body>
      <Image
        alt="Differences between old and new review screens"
        mb={80}
        src="/ZolaPaper/zola-paper-review-page.png"
      />
      <Title bold>Results!</Title>
      <Body>
        Our goal was to increase annualized revenue by 170K and we found that
        with these small changes would see an estimated increase of 350K.
      </Body>
    </ContentBox>
  </Layout>
);

export default ZolaPaper;
