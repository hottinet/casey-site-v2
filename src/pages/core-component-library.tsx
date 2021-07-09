import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
import Divider from '~/components/Divider';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import NextProjectPickle from '~/components/pickles/NextProjectPickle';
import Pickle from '~/components/pickles/Pickle';
import StackedText from '~/components/StackedText';
import Body from '~/components/typography/Body';
import Title from '~/components/typography/Title';

const ContentBox = styled(FlexBox)<{ leftOnly?: boolean }>`
  margin: ${({ leftOnly }) => `0 ${leftOnly ? 0 : '13%'} 0 13%`};
`;

const DetailPickle = styled(Pickle)`
  margin: ${({ theme }) => `${theme.spacing[64]} 0`};
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  width: 87%;
`;

const PickleStack = styled(StackedText)`
  margin-right: 7%;
`;

const CoreComponentLibrary: React.FC = () => (
  <Layout title="Core Component Library">
    <ContentBox column>
      <Title bold>Core Component Library</Title>
      <GridBox columnGap={32} columns={3} mt={64}>
        <Image
          alt="pokemon"
          fitParent
          src="https://upload.wikimedia.org/wikipedia/en/f/f1/Bulbasaur_pokemon_red.png"
        />
        <Image
          alt="pokemon"
          fitParent
          src="https://upload.wikimedia.org/wikipedia/en/f/f1/Bulbasaur_pokemon_red.png"
        />
        <Image
          alt="pokemon"
          fitParent
          src="https://upload.wikimedia.org/wikipedia/en/f/f1/Bulbasaur_pokemon_red.png"
        />
      </GridBox>
    </ContentBox>
    <DetailPickle>
      <ContentBox leftOnly>
        <PickleStack
          bottomText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
          topText="Summary"
        />
        <PickleStack
          bottomText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable "
          topText="Role"
        />
      </ContentBox>
    </DetailPickle>
    <ContentBox column>
      <Title bold>Core Component Library</Title>
      <Box mt={40}>
        <Body>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for &apos;lorem ipsum&apos; will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </Body>
      </Box>
      <GridBox columnGap={128} my={128}>
        <Image
          alt="pokemon"
          fitParent
          src="https://upload.wikimedia.org/wikipedia/en/f/f1/Bulbasaur_pokemon_red.png"
        />
        <StackedText
          bottomText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          title
          topText="Core Component Library"
        />
      </GridBox>
      <Divider />
    </ContentBox>
    <FlexBox flex={1} justifyContent="flex-end" mt={128}>
      <NextProjectPickle nextProjectPath="/" />
    </FlexBox>
  </Layout>
);

export default CoreComponentLibrary;
