import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import FlexBox from '~/components/box/FlexBox';
import ArrowButton from '~/components/buttons/ArrowButton';
import Image from '~/components/Image';
import Link from '~/components/Link';
import Layout from '~/components/meta/Layout';
import Pickle from '~/components/pickles/Pickle';
import Title from '~/components/typography/Title';
import { CORE_COMPONENT_LIBRARY_ROUTE } from '~/constants/routing';
import { Color } from '~/typings/theme';

const CoreLink = styled(Link)`
  margin-left: ${({ theme }) => theme.spacing[8]};
`;

type HomePickleProps = {
  imageSrc: string;
  title: string;
  linkTo: string;
  pickleColor: Color;
  imageAlt: string;
};

const SizedPickle = styled(Pickle)`
  width: 94%;
  margin-top: ${({ theme }) => theme.spacing[48]};
`;

const PickleTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  width: 24.5rem;
`;

const ImageBox = styled(FlexBox)`
  height: 37rem;
`;

const TitleBox = styled(FlexBox)`
  margin-right: 14%;
`;

const HomePickle: React.FC<HomePickleProps> = ({
  imageSrc,
  imageAlt,
  title,
  linkTo,
  pickleColor,
}) => (
  <SizedPickle color={pickleColor}>
    <FlexBox
      alignItems="center"
      flex={1}
      justifyContent="space-between"
      ml={48}
    >
      <ImageBox center flex={1}>
        <Image alt={imageAlt} src={imageSrc} />
      </ImageBox>
      <TitleBox column ml={48}>
        <PickleTitle bold>{title}</PickleTitle>
        <Link href={linkTo} internal noHover>
          <ArrowButton title={`Navigate to ${linkTo}`} onClick={undefined} />
        </Link>
      </TitleBox>
    </FlexBox>
  </SizedPickle>
);

const Home: React.FC = () => (
  <Layout title="Casey Bradford">
    <Box mx={48}>
      <Box>
        <Title>Product Designer balancing personality and utility.</Title>
      </Box>
      <Title>Most recently at AlleyCorp’s</Title>
      <CoreLink href="https://core.fitness/">
        <Title>Core</Title>
      </CoreLink>
    </Box>
    <HomePickle
      imageAlt="Donkey kong"
      imageSrc="https://upload.wikimedia.org/wikipedia/en/7/75/Donkey_Kong_Country_Returns_Mine_Cart.png"
      linkTo={CORE_COMPONENT_LIBRARY_ROUTE}
      pickleColor="green"
      title="Core Component Library"
    />
    <HomePickle
      imageAlt="Donkey kong"
      imageSrc="https://upload.wikimedia.org/wikipedia/en/7/75/Donkey_Kong_Country_Returns_Mine_Cart.png"
      linkTo="/"
      pickleColor="red"
      title="Rediscovering the Core Customer"
    />
    <HomePickle
      imageAlt="Donkey kong"
      imageSrc="https://upload.wikimedia.org/wikipedia/en/7/75/Donkey_Kong_Country_Returns_Mine_Cart.png"
      linkTo="/"
      pickleColor="blue"
      title="Improving Video Upload Flow"
    />
    <HomePickle
      imageAlt="Donkey kong"
      imageSrc="https://upload.wikimedia.org/wikipedia/en/7/75/Donkey_Kong_Country_Returns_Mine_Cart.png"
      linkTo="/"
      pickleColor="yellow"
      title="Events on Core"
    />
  </Layout>
);

export default Home;
