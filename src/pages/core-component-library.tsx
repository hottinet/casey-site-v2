import styled from '@emotion/styled';

import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
import Image from '~/components/Image';
import Layout from '~/components/meta/Layout';
import Pickle from '~/components/Pickle';
import StackedText from '~/components/StackedText';
import Title from '~/components/typography/Title';

const ContentBox = styled(FlexBox)<{ leftOnly?: boolean }>`
  margin: ${({ leftOnly }) => `0 ${leftOnly ? 0 : '13%'} 0 13%`};
`;

const DetailPickle = styled(Pickle)`
  margin-top: ${({ theme }) => theme.spacing[64]};
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
    <ContentBox column mt={80}>
      <Title bold>Core Component Library</Title>
    </ContentBox>
  </Layout>
);

export default CoreComponentLibrary;
