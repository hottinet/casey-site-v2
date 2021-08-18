import ContentBox from '~/components/box/ContentBox';
import GridBox from '~/components/box/GridBox';
import Divider from '~/components/Divider';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import Video from '~/components/videos/Video';

const GraphicDesign: React.FC = () => (
  <Layout>
    <ContentBox column>
      <Title bold>Sampling of graphic design work</Title>
      <Body>
        I am currently pursuing Product Design roles, but I think that visual
        design skills are just as important in making a product shine. I started
        my career in graphic design and art direction roles and below is a
        sampling of some of my more recent advertising and marketing design
        work.
      </Body>
      <Divider label="Great&nbsp;Jones" />
      <Heading bold>Paid Facebook Ads</Heading>
      <GridBox columnGap={24} mb={80} rowGap={24}>
        <Video sources={[{ src: '/Graphic/GJAd1.mp4' }]} />
        <Video sources={[{ src: '/Graphic/GJAd2.mp4' }]} />
      </GridBox>
      <Heading bold>Email Design</Heading>
      <Image alt="Designed Email" mb={80} src="Graphic/GJEMAIL.png" />
      <Heading bold>Instagram Filters</Heading>
      <Body>
        These instagram filters were not released by the brand but drafts that I
        put together for them. Built in SparkAR.
      </Body>
      <GridBox columnGap={24} mb={80} rowGap={24}>
        <Video sources={[{ src: '/Graphic/egg-filter.mp4' }]} />
        <Video sources={[{ src: '/Graphic/dish-filter.mp4' }]} />
      </GridBox>
      <Divider label="Flatiron&nbsp;School" />
      <Heading bold>Photography</Heading>
      <Body>
        As the Design Manager at Flatiron School, one of my first goals was to
        upgrade our photography. I worked closely with a freelance photographer
        to capture our real students in our WeWork campuses. These photos were
        used across all channels and supported paid campaigns with a monthly
        budget of over 1 million dollars.
      </Body>
      <GridBox columnGap={24} mb={80} rowGap={24}>
        <Image alt="3 students working" src="Graphic/photo-1.png" />
        <Image alt="2 students pairing" src="Graphic/photo-2.png" />
        <Image alt="Smiling student in class" src="Graphic/photo-3.png" />
        <Image alt="Learn 2020 skills in 2019" src="Graphic/photo-4.png" />
      </GridBox>
      <Heading bold>Scholarship Campaigns</Heading>
      <Body>
        I lead a creative team of 3 who worked to create cohesive campaigns for
        each marketing push. One of our most successful scholarships was an
        initiative to get more women into tech in partnership with the ticketing
        platform, SeatGeek. 665 people applied for this scholarship over the 3
        week period that it was live for and 60 of those applicants enrolled,
        mostly on first conversion.
      </Body>
      <Image alt="Campaign assets" mb={80} src="Graphic/WTT.png" />
      <Heading bold>Out-Of-Home Advertising</Heading>
      <Body>
        A big part of our regional marketing spend went to out-of-home buys in
        various markets. In London we had the most success and with our first
        campaign, saw a 60% increase in organic traffic to the site.
      </Body>
      <Image alt="Out of Home Ad" mb={80} src="Graphic/LinkNyc.png" />
      <Divider label="Core&nbsp;Fitness" />
      <Heading bold>App Store Assets</Heading>
      <Image
        alt="Apple App Store Screens"
        mb={80}
        src="Graphic/core-app-store.png"
      />
      <Heading bold>Sales Deck Slides</Heading>
      <GridBox columnGap={24} mb={80} rowGap={24}>
        <Image alt="Ad for park class map" src="Graphic/core-deck-1.png" />
        <Image alt="Ad for park class map" src="Graphic/core-deck-2.png" />
      </GridBox>
      <Heading bold>Paid Advertising</Heading>
      <GridBox columnGap={24} mb={24} rowGap={24}>
        <Image alt="Ad for park class map" src="Graphic/core-ad-1.png" />
        <Image alt="Ad for park class map" src="Graphic/core-ad-2.png" />
      </GridBox>
      <Image alt="Magazine Ad" mb={80} src="Graphic/club-solutions.png" />
    </ContentBox>
  </Layout>
);

export default GraphicDesign;
