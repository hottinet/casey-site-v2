import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import ExternalVideo from '~/components/videos/ExternalVideo';
import Video from '~/components/videos/Video';
import { CUSTOMER_DISCOVERY_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

function CORE_PROGRAMS() {
  const belowSm = useBreakpointsLessThan('sm');
  const belowMd = useBreakpointsLessThan('md');
  return (
    <Layout nextPageHref={CUSTOMER_DISCOVERY_ROUTE}>
      <FlexBox alignItems="center" flexDirection="column" gap={80}>
        <ContentContainer
          gap={32}
          marginTop={belowSm ? SM_NAV_BAR_HEIGHT : NAV_BAR_HEIGHT}
        >
          <FlexBox flexDirection="column" gap={32} justifyContent="center">
            <Text
              as="h1"
              lineHeight={1.2}
              variant={belowMd ? 'headline3' : 'headline2'}
            >
              Launching guided fitness programs
            </Text>
          </FlexBox>
          <Image
            alt="Program page on desktop and mobile"
            src="/Programs/programscover.png"
          />
          <FlexBox flexDirection="column" gap={8}>
            <Text as="p" variant="subtitle3">
              Background
            </Text>
            <Text as="p" variant="bodySmall">
              Core is a fitness startup incubated by AlleyCorp. They are on a
              mission to make it easy for any fitness professional to manage
              their business and create a digital offering for their students.
            </Text>
          </FlexBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <GridBox
            border="1px solid black"
            borderRadius={pxToRem(16)}
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
            padding={32}
          >
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                The Goal
              </Text>
              <Text as="p">
                Fitness instructors want to offer day-by-day guided fitness
                programs but don&apos;t have the tools do it.
              </Text>
            </FlexBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                My Role
              </Text>
              <Text as="p">
                I led design for both the student and instructor experiences
                across iOS and web. I interviewed clients, collaborated with
                tech and product to identify requirements and launch this new
                feature.
              </Text>
            </FlexBox>
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={32}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Instructors don&apos;t have the tools they need to build fitness
            programs
          </Text>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={32}>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Example 1: sculpt society
                </Text>
                <Text as="p" variant="bodySmall">
                  Megan Roup is a popular fitness instructor with a great
                  video-on-demand subscription business. Even as a top tier
                  digital-first instructor, she was offering students interested
                  in her program a pdf of a calendar with the titles of Vimeo
                  videos on it for them to follow along with. We think this
                  experience can be improved upon.
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Example 2: gymhooky
                </Text>
                <Text as="p" variant="bodySmall">
                  &quot;I use 3 main platforms - PTDistinction, Vimeo, and
                  Facebook… oh and Calendly... and Pinterest.&quot;
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Example 2: rip then rock
                </Text>
                <Text as="p" variant="bodySmall">
                  &quot;I shoot the video at home, upload it to Teachable, send
                  it out via MailChimp, and my clients use MyPTHub synched with
                  Fitbit or Apple Watch.&quot;
                </Text>
              </FlexBox>
            </FlexBox>
            <Image
              alt="Vimeo video and PDF Plan"
              src="/Programs/SculptSociety.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Instructor Portal: Building the Program
          </Text>
          <Text as="p" variant="bodySmall">
            Programs are a great way for insturctors to re-use existing content
            and keep students engaged. It was important to make the CMS
            experience of building a program straight-forward so that our users
            could easily take advantage of the feature.
          </Text>
          <ExternalVideo
            aspectRatio="16:9"
            src="https://player.vimeo.com/video/574497344"
            title="Student experience following a program on web"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Balancing flexibility with a guided user experience
          </Text>
          <Text as="p" variant="bodySmall">
            The instructors we were working with had a variety of differnet
            formats for their programs. Some were based on weeks and some were
            divided into sections that didn&apos;t necessarily follow a 7 day
            cycle. In our first build we allowed for as much flexibility as
            possible, but after some user testing we found that we were giving
            users too much freedom and not clear enough guidance on how to
            structure Programs.
          </Text>
          <Image alt="showing change in UI" src="/Programs/SegmentToWeek.png" />
        </ContentContainer>
        <ContentContainer gap={24}>
          <GridBox
            alignItems="center"
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={24}>
              <Text as="h2" lineHeight={1.1} variant="headline4">
                Keeping it fitness specific
              </Text>
              <Text as="p" variant="bodySmall">
                Letting your body recover is an important part of long term
                fitness programs. One of the more fitness-specific elements of
                Core programs is the ability to mark days in the cycle as Rest
                Days for students to mark off.
              </Text>
            </FlexBox>
            <Video sources={[{ src: '/Programs/restedstudent.mp4' }]} />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Iterating post-launch
          </Text>
          <Text as="p" variant="bodySmall">
            Programs offer students a more holistic and guided fitness
            experience. Many instructors wanted to attach additional resources
            to their program such as nutrition plans. As a fast follow to our
            initial launch, we added the ability for instructors to add both
            links and attachments.
          </Text>
          <Image
            alt="Link and attchment components"
            src="/Programs/LinkAttach.png"
          />
          <Text as="p" variant="bodySmall">
            After interviewing multiple instructors, we learned that most of
            them treat programs as a separate offering from their subscription
            business, either using it to funnel in new students or as an add on
            for subscribers. Our next iteration of programs would iclude the
            ability to have a one-off price.
          </Text>
          <Image
            alt="Instructor pricing input and student checkout link"
            src="/Programs/OneOffPricing.png"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Student Experience: Following the Program
          </Text>
          <ExternalVideo
            src="https://player.vimeo.com/video/574497383"
            title="Student experience following a program on web"
          />
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default CORE_PROGRAMS;
