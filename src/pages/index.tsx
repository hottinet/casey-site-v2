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

function HomePage() {
  const mdUp = useBreakpointsAtLeast('md');
  const belowSm = useBreakpointsLessThan('sm');
  const contentPadding = useContentContainerPadding();

  return (
    <Layout>
      <FlexBox flexDirection="column" height="100%" width="100%">
        <ContentContainer
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap={24}
          marginTop={32}
        >
          <Box paddingX={48} width="100%">
            <TitleContainer position="relative" width="100%">
              <Image
                alt="Casey Bradford"
                fill
                src="/Home/casey-bradford-title.svg"
              />
            </TitleContainer>
          </Box>
          <Box maxWidth="869px" width="fit-content">
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
          backgroundColor="green"
          borderRadius={belowSm ? 0 : 30}
          color="textSecondary"
          imageAlt="Zola Budget Tool on an iPhone"
          imageAspectRatio="356/515"
          imageSrc="/Home/budget-tool.png"
          linkHref=""
          marginX={belowSm ? 0 : contentPadding}
          marginY={pxToRem(140)}
          paddingX={belowSm ? contentPadding : 0}
          tags={['zola', 'ios']}
          title="Building a Wedding Budget Tool"
        />
        <ContentContainer>
          <GridBox alignItems="start" columns={2} gap={40}>
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
          marginX={belowSm ? 0 : contentPadding}
          marginY={pxToRem(140)}
          paddingX={belowSm ? contentPadding : 0}
          tags={['zola', 'ios']}
          title="Building a Wedding Budget Tool"
        />
        <ContentContainer>
          <FlexBox flexDirection="column" gap={40}>
            <Text as="p" variant="body">
              Other Projects
            </Text>
            <GridBox columns={3} gap={40}>
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
    </Layout>
  );
}

export default HomePage;
