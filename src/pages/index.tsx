import styled from '@emotion/styled';
import Image from 'next/image';

import { Box } from '~/components/box/Box';
import { FlexBox } from '~/components/box/FlexBox';
import { ContentContainer } from '~/components/ContentContainer';
import { Layout } from '~/components/meta/Layout';
import { Text } from '~/components/typography/Text';
import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

const TitleContainer = styled(Box)`
  aspect-ratio: 637 / 118;
`;

function HomePage() {
  const mdUp = useBreakpointsAtLeast('md');
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
      </FlexBox>
    </Layout>
  );
}

export default HomePage;
