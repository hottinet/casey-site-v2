import styled from '@emotion/styled';
import { useContext } from 'react';

import Box from '~/components/box/Box';
import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
import ArrowButton from '~/components/buttons/ArrowButton';
import TextButton from '~/components/buttons/TextButton';
import Image from '~/components/Image';
import Link from '~/components/Link';
import Layout from '~/components/meta/Layout';
import Pickle from '~/components/pickles/Pickle';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';
import {
  CORE_COMPONENT_LIBRARY_ROUTE,
  CORE_LIVE_CLASSES,
  CORE_PROGRAMS,
  CORE_SESSIONS,
  CUSTOMER_DISCOVERY_ROUTE,
  IRTH_ROUTE,
} from '~/constants/routing';
import { BreakpointsContext } from '~/contexts/breakpointsContext';
import { Color } from '~/typings/theme';

// START - STYLED COMPONENTS - START
const LinkText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fontFamily};
`;

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
  height: 20rem;
  margin-left: 48px;
  margin-right: 48px;
  margin-bottom: 0px;
  margin-top: 48px;
  ${({ theme }) => theme.breakpoints.md} {
    height: 30rem;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
  }
`;

const TitleBox = styled(FlexBox)`
  margin-right: 14%;
  margin-left: 48px;
  margin-bottom: 48px;
  ${({ theme }) => theme.breakpoints.md} {
    margin-left: 48px;
    margin-bottom: 0px;
  }
`;

const PickleContentWrapper = styled(GridBox)`
  width: 100%;
  margin-left: 8px;
  ${({ theme }) => theme.breakpoints.sm} {
    margin-left: 48px;
  }
`;

const MobileAboutWrapper = styled(Box)`
  margin-left: -0.6rem;
`;

// END - STYLED COMPONENTS - END

// START - SUBCOMPONENTS - START
type HomePickleProps = {
  imageSrc: string;
  title: string;
  linkTo: string;
  pickleColor: Color;
  imageAlt: string;
};

const HomePickle: React.FC<HomePickleProps> = ({
  imageSrc,
  imageAlt,
  title,
  linkTo,
  pickleColor,
}) => (
  <SizedPickle color={pickleColor}>
    <PickleContentWrapper alignItems="center">
      <ImageBox center>
        <Image alt={imageAlt} src={imageSrc} />
      </ImageBox>
      <TitleBox column>
        <PickleTitle bold>{title}</PickleTitle>
        <Link href={linkTo} internal noHoverStyles>
          <ArrowButton title={`Navigate to ${linkTo}`} onClick={undefined} />
        </Link>
      </TitleBox>
    </PickleContentWrapper>
  </SizedPickle>
);

type SecondaryProjectLinkProps = {
  href: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
};

const SecondaryProjectLink: React.FC<SecondaryProjectLinkProps> = ({
  href,
  text,
  imgSrc,
  imgAlt,
}) => (
  <span>
    <Link hoverImgAlt={imgAlt} hoverImgSrc={imgSrc} href={href} internal>
      <LinkText>{text}</LinkText>
    </Link>
  </span>
);
// END - SUBCOMPONENTS - END

const Home: React.FC = () => {
  const breakpoints = useContext(BreakpointsContext);
  return (
    <Layout>
      <Box mx={48}>
        <Box>
          <Title mb={8}>
            Product Designer balancing personality and utility.
          </Title>
        </Box>
        <Title>
          Most recently at AlleyCorp’s&thinsp;
          <Link href="https://core.fitness/">Core</Link>
        </Title>
        {!breakpoints.includes('sm') && (
          <MobileAboutWrapper>
            <Link href="/about" internal noHoverStyles>
              <TextButton label="About Me" onClick={undefined} />
            </Link>
          </MobileAboutWrapper>
        )}
      </Box>
      <HomePickle
        imageAlt="iOS and Web Mockups"
        imageSrc="/LiveClasses/LiveClassHero.png"
        linkTo={CORE_LIVE_CLASSES}
        pickleColor="green"
        title="Designing a live class experience for fitness"
      />
      <HomePickle
        imageAlt="CMS and customer facing screens"
        imageSrc="/Programs/ProgramHero.png"
        linkTo={CORE_PROGRAMS}
        pickleColor="red"
        title="Building fitness programs on Core"
      />
      <HomePickle
        imageAlt="several app screens"
        imageSrc="/CustomerDiscovery/Customers.gif"
        linkTo={CUSTOMER_DISCOVERY_ROUTE}
        pickleColor="blue"
        title="Rediscovering the Core Customer"
      />
      <HomePickle
        imageAlt="Donkey kong"
        imageSrc="/VideoUpload/VideoCover.png"
        linkTo={CORE_SESSIONS}
        pickleColor="yellow"
        title="Improving content creation and consumption"
      />
      <Box mb={24} mt={128} mx={48}>
        <Heading bold>Other Projects</Heading>
      </Box>
      <GridBox columnGap={48} mx={48} rowGap={48}>
        <SecondaryProjectLink
          href={CORE_COMPONENT_LIBRARY_ROUTE}
          imgAlt="Some hover image"
          imgSrc="/ComponentLibrary/studentfacing.png"
          text="Building the Core Component Library"
        />
        <SecondaryProjectLink
          href={IRTH_ROUTE}
          imgAlt="Some hover image"
          imgSrc="/ComponentLibrary/studentfacing.png"
          text="UI Refresh for Irth"
        />
      </GridBox>
    </Layout>
  );
};

export default Home;
