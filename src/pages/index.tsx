import styled from '@emotion/styled';
import Image from 'next/image';

import { Box } from '~/components/box/Box';
import { FlexBox } from '~/components/box/FlexBox';
import {
  ContentContainer,
  useContentContainerPadding,
} from '~/components/ContentContainer';
import { Layout } from '~/components/meta/Layout';
import { ShowoffBlock } from '~/components/showoff/ShowoffBlock';
import { Text } from '~/components/typography/Text';
import { pxToRem } from '~/utils/pxToRem';
import {
  useBreakpointsAtLeast,
  useBreakpointsIsExactly,
} from '~/utils/useBreakpoints';

const TitleContainer = styled(Box)`
  /* Calculated from Casey Bradford svg */
  aspect-ratio: 637 / 118;
`;

function HomePage() {
  const mdUp = useBreakpointsAtLeast('md');
  const isXxs = useBreakpointsIsExactly('xxs');
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
          borderRadius={isXxs ? 0 : 30}
          color="textSecondary"
          imageAlt="Zola Budget Tool on an iPhone"
          imageAspectRatio="356/515"
          imageSrc="/Home/budget-tool.png"
          linkHref=""
          marginX={isXxs ? 0 : contentPadding}
          marginY={pxToRem(140)}
          tags={['zola', 'ios']}
          title="Building a Wedding Budget Tool"
        />
      </FlexBox>
    </Layout>
  );
}

export default HomePage;
