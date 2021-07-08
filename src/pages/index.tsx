import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import FlexBox from '~/components/box/FlexBox';
import ArrowButton from '~/components/buttons/ArrowButton';
import Image from '~/components/Image';
import Link from '~/components/Link';
import Layout from '~/components/meta/Layout';
import Pickle from '~/components/Pickle';
import Title from '~/components/typography/Title';
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
`;

const ImageBox = styled(FlexBox)`
  height: 37rem;
  width: 90%;
`;

const HomePickle: React.FC<HomePickleProps> = ({
  imageSrc,
  imageAlt,
  title,
  linkTo,
  pickleColor,
}) => (
  <SizedPickle color={pickleColor}>
    <FlexBox alignItems="center" justifyContent="space-between" ml={48}>
      <ImageBox center>
        <Image alt={imageAlt} src={imageSrc} />
      </ImageBox>
      <FlexBox column mx={48}>
        <PickleTitle bold>{title}</PickleTitle>
        <Link href={linkTo} internal noHover>
          <ArrowButton title={`Navigate to ${linkTo}`} onClick={undefined} />
        </Link>
      </FlexBox>
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
      linkTo="/"
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
