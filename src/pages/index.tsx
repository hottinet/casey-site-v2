/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import Image from 'next/image';

import { Box } from '~/components/box/Box';
import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import {
  ContentContainer,
  useContentContainerPadding,
} from '~/components/ContentContainer';
import { Link } from '~/components/Link';
import { Layout } from '~/components/meta/Layout';
import { ShowoffBlock } from '~/components/showoff/ShowoffBlock';
import { ShowoffContent } from '~/components/showoff/ShowoffContent';
import { Text } from '~/components/typography/Text';
import { pxToRem } from '~/utils/pxToRem';
import {
  useBreakpointsAtLeast,
  useBreakpointsLessThan,
} from '~/utils/useBreakpoints';

const TitleContainer = styled(Box)`
  /* Calculated from Casey Bradford svg */
  aspect-ratio: 637 / 118;
`;

const HomeLayout = styled(Layout)(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.colors.pink}, ${theme.colors.pinkLight})`,
}));

function HomePage() {
  const lgUp = useBreakpointsAtLeast('lg');
  const mdUp = useBreakpointsAtLeast('md');
  const belowSm = useBreakpointsLessThan('sm');
  const exactlySm = !mdUp && !belowSm;
  const contentPadding = useContentContainerPadding();

  const showoffMarginTop = mdUp
    ? pxToRem(140)
    : exactlySm
      ? pxToRem(60)
      : pxToRem(100);
  const showoffMarginBottom = mdUp ? showoffMarginTop : pxToRem(60);
  const showoffPaddingX = belowSm ? contentPadding : undefined;
  const showoffMarginX = belowSm ? 0 : contentPadding;

  return (
    <HomeLayout>
      <FlexBox flexDirection="column" height="100%" width="100%">
        <ContentContainer
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap={32}
          marginTop={32}
        >
          <Box paddingX={0} width="100%">
            <TitleContainer position="relative" width="100%">
              <Image
                alt="Casey Bradford"
                fill
                src="/Home/casey-bradford-title.svg"
              />
            </TitleContainer>
          </Box>
          <Box maxWidth={lgUp ? pxToRem(869) : undefined} width="fit-content">
            <Text
              as="p"
              textAlign="center"
              variant={mdUp ? 'title' : 'title-sm'}
            >
              Senior Product Designer working with small teams to turn vague
              ideas into incredible mobile app experiences
            </Text>
          </Box>
        </ContentContainer>
        <ShowoffBlock
          backgroundColor="red"
          borderRadius={belowSm ? 0 : 30}
          color="textSecondary"
          imageAlt="Zola Budget Tool on an iPhone"
          imageAspectRatio="356/515"
          imageSrc="/Home/budget-tool.png"
          linkHref=""
          marginBottom={showoffMarginBottom}
          marginTop={showoffMarginTop}
          marginX={showoffMarginX}
          paddingX={showoffPaddingX}
          tags={['zola', 'ios']}
          title="Building a Wedding Budget Tool"
        />
        <ContentContainer>
          <GridBox
            alignItems="start"
            columns={belowSm ? 1 : 2}
            gap={belowSm ? 64 : 40}
          >
            <ShowoffContent
              color="text"
              linkHref=""
              tags={['zola', 'ios']}
              title="Designing a more scalable home page and navigation"
            />
            <ShowoffContent
              color="text"
              linkHref=""
              tags={['zola', 'ios']}
              title="Launching a baby registry product"
            />
          </GridBox>
        </ContentContainer>
        <ShowoffBlock
          backgroundColor="blue"
          borderRadius={belowSm ? 0 : 30}
          color="textSecondary"
          imageAlt="Zola Budget Tool on an iPhone"
          imageAspectRatio="356/515"
          imageSrc="/Home/onboarding.png"
          linkHref=""
          marginBottom={showoffMarginBottom}
          marginTop={showoffMarginTop}
          marginX={showoffMarginX}
          paddingX={showoffPaddingX}
          tags={['zola', 'ios']}
          title="Building a Wedding Budget Tool"
        />
        <ContentContainer>
          <FlexBox flexDirection="column" gap={40}>
            <Text as="p" variant="body">
              Other Projects
            </Text>
            <GridBox columns={mdUp ? 3 : 1} gap={40}>
              <Link href="" internal>
                <Text as="span" variant="title">
                  Building digital fitness classes
                </Text>
              </Link>
              <Link href="" internal>
                <Text as="span" variant="title">
                  Rediscovering the Core Customer
                </Text>
              </Link>
              <Link href="" internal>
                <Text as="span" variant="title">
                  Designing a live class experience for fitness
                </Text>
              </Link>
              <Link href="" internal>
                <Text as="span" variant="title">
                  Improving fitness content creation and consumption
                </Text>
              </Link>
            </GridBox>
          </FlexBox>
        </ContentContainer>
      </FlexBox>
    </HomeLayout>
  );
}

export default HomePage;
