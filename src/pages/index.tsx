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
import { Link } from '~/components/Link';
import { BackgroundOverride } from '~/components/meta/BackgroundOverride';
import { Layout } from '~/components/meta/Layout';
import { ShowoffBlock } from '~/components/showoff/ShowoffBlock';
import { ShowoffContent } from '~/components/showoff/ShowoffContent';
import { Text } from '~/components/typography/Text';
import {
  CORE_PROGRAMS_ROUTE,
  CUSTOMER_DISCOVERY_ROUTE,
  ZOLA_BABY_ROUTE,
  ZOLA_BUDGET_ROUTE,
  ZOLA_NAVIGATION_ROUTE,
  ZOLA_ONBOARDING,
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
        height="100%"
        width="100%"
      >
        <ContentContainer alignItems="center" gap={32} marginTop={32} metaPage>
          <Box maxWidth={lgUp ? pxToRem(869) : undefined} width="fit-content">
            <Text
              as="p"
              textAlign="center"
              variant={mdUp ? 'bodyLarge' : 'bodySmall'}
            >
              Senior Product Designer working with small teams to turn vague
              ideas into incredible mobile app experiences
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
        <ContentContainer metaPage>
          <GridBox
            alignItems="start"
            columns={belowSm ? 1 : 2}
            gap={belowSm ? 64 : 40}
          >
            <ShowoffContent
              color="text"
              linkHref={ZOLA_NAVIGATION_ROUTE}
              tags={['zola', 'ios']}
              title="Designing a more scalable home page"
            />
            <ShowoffContent
              color="text"
              linkHref={ZOLA_BABY_ROUTE}
              tags={['zola', 'ios']}
              title="Launching a baby registry product"
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
            linkHref={ZOLA_ONBOARDING}
            marginBottom={belowSm ? 0 : showoffMarginBottom}
            marginTop={showoffMarginTop}
            paddingX={showoffPaddingX}
            tags={['zola', 'ios']}
            title="Making a great first impression with onboarding"
          />
        </ContentContainerOr>
        <ContentContainer metaPage>
          <FlexBox flexDirection="column" gap={40}>
            <Text as="p" variant="subtitle3">
              Other Projects
            </Text>
            <GridBox columns={mdUp ? 3 : 1} gap={40}>
              <Link
                href={CORE_PROGRAMS_ROUTE}
                internal
                label="Launching guided fitness programs"
                variant="bodyLarge"
              />
              <Link
                href={CUSTOMER_DISCOVERY_ROUTE}
                internal
                label="Rediscovering the Core Customer"
                variant="bodyLarge"
              />
            </GridBox>
          </FlexBox>
        </ContentContainer>
      </FlexBox>
    </HomeLayout>
  );
}

export default HomePage;
