import styled from '@emotion/styled';
import Image from 'next/image';

import { Box } from '~/components/box/Box';
import { FlexBox } from '~/components/box/FlexBox';
import { ContentContainer } from '~/components/ContentContainer';
import { Layout } from '~/components/meta/Layout';
import { Title } from '~/components/typography/Title';

const TitleContainer = styled(Box)`
  aspect-ratio: 637 / 118;
`;

function HomePage() {
  return (
    <Layout>
      <FlexBox flexDirection="column" height="100%" width="100%">
        <ContentContainer
          alignItems="center"
          display="flex"
          flexDirection="column"
          marginTop={24}
        >
          <TitleContainer position="relative" width="100%">
            <Image
              alt="Casey Bradford"
              fill
              src="/Home/casey-bradford-title.svg"
            />
          </TitleContainer>
          <Box maxWidth="869px" width="fit-content">
            <Title bold={false} marginBottom={0}>
              Senior Product Designer working with small teams to turn vague
              ideas into incredible mobile app experiences
            </Title>
          </Box>
        </ContentContainer>
      </FlexBox>
    </Layout>
  );
}

export default HomePage;
