/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Box } from '~/components/box/Box';
import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import {
  ContentContainer,
  useContentContainerPadding,
} from '~/components/ContentContainer';
import { BackgroundOverride } from '~/components/meta/BackgroundOverride';
import { Layout } from '~/components/meta/Layout';
import { ShowoffBlock } from '~/components/showoff/ShowoffBlock';
import { ShowoffSecondary } from '~/components/showoff/ShowoffSecondary';
import { Text } from '~/components/typography/Text';
import {
  CORE_PROGRAMS_ROUTE,
  CULINISTAS_ROUTE,
  CUSTOMER_DISCOVERY_ROUTE,
  ZOLA_BABY_ROUTE,
  ZOLA_BUDGET_ROUTE,
  ZOLA_NAVIGATION_ROUTE,
  ZOLA_ONBOARDING_ROUTE,
} from '~/constants/routing';
import { pxToRem } from '~/utils/pxToRem';
import {
  useBreakpointsAtLeast,
  useBreakpointsLessThan,
  useSizeByBreakpoint,
} from '~/utils/useBreakpoints';

const HomeLayout = styled(Layout)(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.colors.pink}, ${theme.colors.pinkLight})`,
}));

function ContentContainerOr({ children }: PropsWithChildren<unknown>) {
  const smUp = useBreakpointsAtLeast('sm');

  return smUp ? (
    <ContentContainer metaPage>{children}</ContentContainer>
  ) : (
    <>{children}</>
  );
}

function CaseyTitle() {
  const size = useSizeByBreakpoint({
    base: 64,
    sm: 100,
    md: 120,
    lg: 140,
    xl: 175,
  });
  return (
    <Text
      as="h1"
      fontSize={pxToRem(size)}
      lineHeight={1}
      marginTop={32}
      textAlign="center"
    >
      Casey Bradford
    </Text>
  );
}

function HomePage() {
  const lgUp = useBreakpointsAtLeast('lg');
  const mdUp = useBreakpointsAtLeast('md');
  const belowSm = useBreakpointsLessThan('sm');
  const belowMd = useBreakpointsLessThan('md');
  const exactlySm = !mdUp && !belowSm;
  const contentPadding = useContentContainerPadding(true);

  const showoffMarginTop = mdUp
    ? pxToRem(140)
    : exactlySm
      ? pxToRem(60)
      : pxToRem(100);
  const showoffMarginBottom = mdUp ? showoffMarginTop : pxToRem(60);
  const showoffPaddingX = belowSm ? contentPadding : undefined;
  const showoffBorderRadius = belowSm ? '150px 150px 0 0' : 999;

  return (
    <HomeLayout fallbackNavBackground="pink" footerPaddingTop={0}>
      <BackgroundOverride color="pink" />
      <CaseyTitle />
      <FlexBox
        alignItems="center"
        flexDirection="column"
        // gap={64}
        gap={belowMd ? 40 : 64}
        height="100%"
        paddingBottom={128}
        width="100%"
      >
        <FlexBox flexDirection="column">
          <ContentContainer
            alignItems="center"
            gap={32}
            marginTop={32}
            metaPage
          >
            <Box maxWidth={lgUp ? pxToRem(869) : undefined} width="fit-content">
              <Text
                as="p"
                textAlign="center"
                variant={mdUp ? 'bodyLarge' : 'bodySmall'}
              >
                Senior Product Designer working with small teams to turn vague
                ideas into incredible mobile experiences
              </Text>
            </Box>
          </ContentContainer>
          <ContentContainerOr>
            <ShowoffBlock
              backgroundColor="red"
              borderRadius={showoffBorderRadius}
              color="text"
              imageAlt="Zola Budget Tool on an iPhone"
              imageAspectRatio="356/515"
              imageSrc="/Home/budget-tool.png"
              linkHref={ZOLA_BUDGET_ROUTE}
              marginBottom={showoffMarginBottom}
              marginTop={showoffMarginTop}
              paddingX={showoffPaddingX}
              priority
              tags={['zola', 'ios']}
              title="Building a wedding budget tool"
            />
          </ContentContainerOr>
        </FlexBox>

        <ContentContainer metaPage>
          <GridBox
            alignItems="start"
            gap={{ base: 64, sm: 20, md: 40 }}
            gridTemplateColumns={{ base: '1fr', sm: 'repeat(3, 1fr)' }}
          >
            <ShowoffSecondary
              altText="Baby Registry"
              color="text"
              imageSrc="/Home/home_baby.png"
              linkHref={ZOLA_BABY_ROUTE}
              tags={['zola', 'cross platform']}
              title="Launching a baby registry product"
            />
            <ShowoffSecondary
              altText="Zola app home page"
              color="text"
              imageSrc="/Home/home_nav.png"
              linkHref={ZOLA_NAVIGATION_ROUTE}
              tags={['zola', 'ios']}
              title="Designing a more scalable home page"
            />

            <ShowoffSecondary
              altText="Dish selection screen"
              color="text"
              imageSrc="/Home/home_culinistas.png"
              linkHref={CULINISTAS_ROUTE}
              tags={['The Culinistas', 'Web']}
              title="Connecting users with private chefs"
            />
          </GridBox>
        </ContentContainer>
        <ContentContainerOr>
          <ShowoffBlock
            backgroundColor="blue"
            borderRadius={showoffBorderRadius}
            color="text"
            imageAlt="Zola onboarding on an iPhone"
            imageAspectRatio="356/515"
            imageSrc="/Home/onboarding.png"
            linkHref={ZOLA_ONBOARDING_ROUTE}
            marginBottom={showoffMarginBottom}
            marginTop={showoffMarginTop}
            paddingX={showoffPaddingX}
            tags={['zola', 'ios']}
            title="Making a great first impression with onboarding"
          />
        </ContentContainerOr>
        <ContentContainer metaPage>
          <GridBox
            gap={{ base: 64, sm: 20, md: 40 }}
            gridTemplateColumns={{ base: '1fr', sm: 'repeat(3, 1fr)' }}
          >
            <ShowoffSecondary
              altText="overview of fitness program"
              color="text"
              imageSrc="/Home/home_programs.png"
              linkHref={CORE_PROGRAMS_ROUTE}
              tags={['Core', 'Cross Platform']}
              title="Launching guided fitness programs"
            />
            <ShowoffSecondary
              altText="b2c fitness platform"
              color="text"
              imageSrc="/Home/home_core_customer.png"
              linkHref={CUSTOMER_DISCOVERY_ROUTE}
              tags={['Core', 'research']}
              title="Finding product market fit for a B2C fitness platform"
            />
          </GridBox>
        </ContentContainer>
      </FlexBox>
    </HomeLayout>
  );
}

export default HomePage;
