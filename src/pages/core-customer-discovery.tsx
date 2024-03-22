import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { ContentContainer } from '~/components/ContentContainer';
import Image from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import Video from '~/components/videos/Video';
import { HOME_ROUTE } from '~/constants/routing';
import { NAV_BAR_HEIGHT, SM_NAV_BAR_HEIGHT } from '~/constants/styles';
import { pxToRem } from '~/utils/pxToRem';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

function CORE_CUSTOMER_DISCOVERY() {
  const belowSm = useBreakpointsLessThan('sm');
  const belowMd = useBreakpointsLessThan('md');
  return (
    <Layout nextPageHref={HOME_ROUTE}>
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
              Identifying product-market fit for Core
            </Text>
          </FlexBox>
          <Video sources={[{ src: '/CustomerDiscovery/customerhero2.mp4' }]} />
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
                Identify the painpoints of an aspiring intructor and solutions
                we can provide in the context of the competitive landscape.
              </Text>
            </FlexBox>
            <FlexBox flexDirection="column" gap={8}>
              <Text as="p" variant="subtitle3">
                My Role
              </Text>
              <Text as="p">
                Reach out to and conduct interviews and have sales conversations
                with potential users. Identify common pain points and possible
                solutions to present to the board.
              </Text>
            </FlexBox>
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Identifying some of the reasons it is hard for us to onboard
            established instructors
          </Text>
          <Text as="p" variant="bodySmall">
            Core is an early stage company on a mission to help fitness
            instructors launch and scale their digital business. During the
            first few months, Core was targeting an audience of established
            instructors with existing subscription businesses. Although we
            garnered a good amount of interest from this group, we found it
            difficult to migrate them from their existing platforms for a few
            reasons.
          </Text>
        </ContentContainer>
        <ContentContainer gap={24}>
          <GridBox
            gap={40}
            gridTemplateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <FlexBox flexDirection="column" gap={32}>
              <FlexBox flexDirection="column" gap={24}>
                <FlexBox flexDirection="column" gap={8}>
                  <Text as="p" variant="subtitle3">
                    Migrating students
                  </Text>
                  <Text as="p" variant="bodySmall">
                    It&apos;s hard to get students to move off of platforms that
                    they are familiar with and might have purchased long-term
                    subscriptions on.
                  </Text>
                </FlexBox>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Migrating videos
                </Text>
                <Text as="p" variant="bodySmall">
                  Although Core offered unlimited video storage and white-glove
                  migration for a fee, migrating all of their existing content
                  was still an obstacle for instructors.
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  Feature set
                </Text>
                <Text as="p" variant="bodySmall">
                  As a very new company, Core was lacking some basic features
                  that competitors offered.
                </Text>
              </FlexBox>
            </FlexBox>
            <Image
              alt="iPhone screenshot of workout class on Core"
              src="/CustomerDiscovery/KateSession.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            How do we adapt our business?
          </Text>
          <Text as="p" variant="bodySmall">
            As we experienced sticking points with our current clients, we
            turned our sights down stream to less established instructors. Our
            hypothesis was that these budding instructors might be easier to
            migrate onto our platform as we worked towards feature parody with
            our competitors. &nbsp;Our goal was to interview 20+ less
            established intructors to identify their main pain points and how
            Core could solve them.
          </Text>
          <Text as="p" variant="subtitle3">
            Our Process
          </Text>
          <Image
            alt="Outreach, Interview, Pain Points, Solutions, Product Roadmap"
            src="/CustomerDiscovery/process.png"
          />
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
            <FlexBox flexDirection="column" gap={32}>
              <Text as="h2" lineHeight={1.1} variant="headline4">
                Re-assessing the competitive landscape
              </Text>
              <Text as="p" variant="bodySmall">
                While our platform was too early for instructors with existing
                subscription businesses, it was also not yet flexible enough for
                aspiring instructors who couldn&apos;t justify a subscription
                business. These creators needed to lean on one-time purchases to
                provide a pathway to subscription membership.
              </Text>
            </FlexBox>
            <Image
              alt="Showing a fitness creators funnel to subcription"
              src="/CustomerDiscovery/monetization.png"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainer gap={24}>
          <Image
            alt="chart showing how we stack up against compeetitors"
            src="/CustomerDiscovery/competitors_1.png"
          />
        </ContentContainer>
        <ContentContainer gap={24}>
          <Text as="h2" lineHeight={1.1} variant="headline4">
            Key insights from interviews with aspiring instructors
          </Text>
          <Text as="p" variant="bodySmall">
            After interviewing around 20 fitness instructors at different stages
            of their careers, we identified 3 main themes that we wanted to
            focus on building features around to differentiate ourselves.
          </Text>
        </ContentContainer>
        <ContentContainer gap={32}>
          <FlexBox
            backgroundImage="linear-gradient(#3475CC, #7A9FD1)"
            borderRadius={pxToRem(16)}
            flexDirection="column"
            gap={32}
            padding={32}
          >
            <Text as="p" color="#F1E339" variant="subtitle2">
              marketing
            </Text>
            <GridBox
              gridTemplateColumns={{
                base: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(2, 1fr)',
              }}
            >
              <FlexBox
                backgroundColor="white"
                borderRadius={pxToRem(16)}
                flexDirection="column"
                gap={8}
                padding={16}
              >
                <Text as="p" variant="bodySmall">
                  &quot;Marketing is super important. I just get lost and
                  it&apos;s hard for people to find me.&quot;
                </Text>
              </FlexBox>
              <FlexBox
                backgroundColor="white"
                borderRadius={pxToRem(16)}
                flexDirection="column"
                gap={8}
                padding={16}
              >
                <Text as="p" variant="bodySmall">
                  &quot;I&apos;m an artist, not a business person...this is the
                  stuff I don&apos;t like doing myself.&quot;
                </Text>
              </FlexBox>
            </GridBox>
            <GridBox
              gridTemplateColumns={{
                base: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(2, 1fr)',
              }}
            >
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  pain point
                </Text>
                <Text as="p">
                  Instructors need help attracting new students
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  what we build
                </Text>
                <Text as="p">More robust explore functionality</Text>
                <Text as="p">Customer referrals</Text>
                <Text as="p">
                  Social media and marketing support from our team
                </Text>
              </FlexBox>
            </GridBox>
          </FlexBox>
          <FlexBox
            backgroundImage="linear-gradient(#3475CC, #7A9FD1)"
            borderRadius={pxToRem(16)}
            flexDirection="column"
            gap={32}
            padding={32}
          >
            <Text as="p" color="#F1E339" variant="subtitle2">
              Flexibility
            </Text>
            <GridBox
              gridTemplateColumns={{
                base: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(3, 1fr)',
              }}
            >
              <FlexBox
                backgroundColor="white"
                borderRadius={pxToRem(16)}
                flexDirection="column"
                gap={8}
                padding={16}
              >
                <Text as="p" variant="bodySmall">
                  &quot;I see my future being a hybrid of in person and online
                  classes&quot;
                </Text>
              </FlexBox>
              <FlexBox
                backgroundColor="white"
                borderRadius={pxToRem(16)}
                flexDirection="column"
                gap={8}
                padding={16}
              >
                <Text as="p" variant="bodySmall">
                  &quot;I don&apos;t want to charge for my weekly group park
                  class but I charge for 1:1s&quot;
                </Text>
              </FlexBox>
              <FlexBox
                backgroundColor="white"
                borderRadius={pxToRem(16)}
                flexDirection="column"
                gap={8}
                padding={16}
              >
                <Text as="p" variant="bodySmall">
                  &quot;My zoom classes are donation based&quot;
                </Text>
              </FlexBox>
            </GridBox>
            <GridBox
              gridTemplateColumns={{
                base: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(2, 1fr)',
              }}
            >
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  pain point
                </Text>
                <Text as="p">
                  Instructors are constantly experimenting with their offerings
                  to engage students
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  what we build
                </Text>
                <Text as="p">
                  Ticketed, free and donation-based class pricing
                </Text>
                <Text as="p">One-off pricing for each product</Text>
                <Text as="p">Discount codes</Text>
                <Text as="p">Non-video formats</Text>
              </FlexBox>
            </GridBox>
          </FlexBox>
          <FlexBox
            backgroundImage="linear-gradient(#3475CC, #7A9FD1)"
            borderRadius={pxToRem(16)}
            flexDirection="column"
            gap={32}
            padding={32}
          >
            <Text as="p" color="#F1E339" variant="subtitle2">
              Accountability
            </Text>
            <GridBox
              gridTemplateColumns={{
                base: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(3, 1fr)',
              }}
            >
              <FlexBox
                backgroundColor="white"
                borderRadius={pxToRem(16)}
                flexDirection="column"
                gap={8}
                padding={16}
              >
                <Text as="p" variant="bodySmall">
                  &quot;My biggest pain point is accountability of my students.
                  I&apos;m skeptical of just doing video on demand for that
                  reason.&quot;
                </Text>
              </FlexBox>
              <FlexBox
                backgroundColor="white"
                borderRadius={pxToRem(16)}
                flexDirection="column"
                gap={8}
                padding={16}
              >
                <Text as="p" variant="bodySmall">
                  &quot;If someone doesnt show up to my in-person class, I text
                  them, &quot;where were you?!&quot; I need to be able to
                  replicate that&quot;
                </Text>
              </FlexBox>
              <FlexBox
                backgroundColor="white"
                borderRadius={pxToRem(16)}
                flexDirection="column"
                gap={8}
                padding={16}
              >
                <Text as="p" variant="bodySmall">
                  &quot;My zoom classes are donation based&quot;
                </Text>
              </FlexBox>
            </GridBox>
            <GridBox
              gridTemplateColumns={{
                base: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(2, 1fr)',
              }}
            >
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  pain point
                </Text>
                <Text as="p">
                  Instructors have a hard time holding students accountable,
                  especially virtually
                </Text>
              </FlexBox>
              <FlexBox flexDirection="column" gap={8}>
                <Text as="p" variant="subtitle3">
                  what we build
                </Text>
                <Text as="p">
                  Surface more class history milestones for students and
                  instructors
                </Text>
              </FlexBox>
            </GridBox>
          </FlexBox>
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default CORE_CUSTOMER_DISCOVERY;
