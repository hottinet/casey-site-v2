import styled from '@emotion/styled';
import { useContext } from 'react';

import Box from '~/components/box/Box';
import ContentBox from '~/components/box/ContentBox';
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
  LADDERS_ROUTE,
  LISTENJAY_ROUTE,
} from '~/constants/routing';
import { BreakpointsContext } from '~/contexts/breakpointsContext';
import { Color } from '~/typings/theme';

const LinkText = styled.span(({ theme }) => ({
  fontSize: theme.fontSize.mobileTitle,
  fontFamily: theme.fontFamily,
  [theme.breakpoints.xs]: {
    fontSize: theme.fontSize.title,
  },
}));

const SizedPickle = styled(Pickle)(({ theme }) => ({
  width: '94%',
  marginTop: theme.spacing[24],
  borderRadius: '0 1000px 1000px 0',
  height: '20rem',
  [theme.breakpoints.sm]: {
    marginTop: theme.spacing[48],
    height: 'unset',
  },
}));

const PickleLink = styled(Link)`
  text-decoration: none;
`;

const PickleTitle = styled(Title)(({ theme }) => ({
  color: theme.colors.textSecondary,
  marginBottom: theme.spacing[16],
  [theme.breakpoints.sm]: {
    maxWidth: '24.5rem',
  },
  [theme.breakpoints.md]: {
    maxWidth: 'unset',
  },
}));

const ImageBox = styled(FlexBox)`
  height: 20rem;
  margin: ${({ theme }) => `${theme.spacing[24]} 0`};
  justify-content: flex-start;
  ${({ theme }) => theme.breakpoints.md} {
    height: unset;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const TitleBox = styled(FlexBox)`
  margin-right: 14%;
  ${({ theme }) => theme.breakpoints.md} {
    margin-bottom: 0px;
    margin-right: 0;
  }
`;

const PickleContentWrapper = styled(ContentBox)(({ theme }) => ({
  display: 'grid',
  marginTop: theme.spacing[48],
  marginBottom: theme.spacing[48],
  width: '100%',
  gridTemplateColumns: 'auto 1fr',
  [theme.breakpoints.sm]: {
    columnGap: theme.spacing[24],
  },
  [theme.breakpoints.md]: {
    margin: `${theme.spacing[80]} ${theme.spacing[48]}`,
    gridTemplateColumns: '1fr 1fr',
  },
}));

const MobileAboutWrapper = styled(Box)`
  margin-left: -0.6rem;
`;

const BannerBox = styled(FlexBox)`
  background-color: #2b2b2b;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing[20]};
  padding: ${({ theme }) => theme.spacing[24]};
  width: 100%;
`;

const BannerSticker = styled(Image)`
  display: none;
  position: absolute;
  max-height: 12.5rem;
  ${({ theme }) => theme.breakpoints.sm} {
    display: block;
  }
`;

const BannerTextBox = styled(Box)`
  ${({ theme }) => theme.breakpoints.sm} {
    padding-left: 11.25rem;
  }
`;

const BannerLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  ${({ theme }) => theme.breakpoints.xs} {
    margin-top: ${({ theme }) => theme.spacing[64]};
  }
`;

const BannerButton = styled(ArrowButton)`
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing[8]};
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
}) => {
  const breakpoints = useContext(BreakpointsContext);
  return (
    <SizedPickle color={pickleColor}>
      <PickleLink href={linkTo} internal noHoverStyles>
        <PickleContentWrapper alignItems="center">
          {breakpoints.includes('sm') && (
            <ImageBox alignItems="center">
              <Image alt={imageAlt} src={imageSrc} />
            </ImageBox>
          )}
          <TitleBox column>
            <PickleTitle bold>{title}</PickleTitle>
            <ArrowButton title={`Navigate to ${linkTo}`} onClick={undefined} />
          </TitleBox>
        </PickleContentWrapper>
      </PickleLink>
    </SizedPickle>
  );
};

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
  const lessThanMd = !breakpoints.includes('md');
  const isXss = !breakpoints.includes('xs');
  const xSpace = lessThanMd ? 24 : 48;

  return (
    <Layout>
      <Box mx={xSpace}>
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
        imageSrc={
          lessThanMd
            ? '/LiveClasses/home-small-LC.png'
            : '/LiveClasses/LiveClassHero.png'
        }
        linkTo={CORE_LIVE_CLASSES}
        pickleColor="green"
        title="Designing a live class experience for fitness"
      />
      <HomePickle
        imageAlt="CMS and customer facing screens"
        imageSrc={
          lessThanMd
            ? '/Programs/home-small-programs.png'
            : '/Programs/ProgramHero.png'
        }
        linkTo={CORE_PROGRAMS}
        pickleColor="red"
        title="Building fitness programs on Core"
      />
      <HomePickle
        imageAlt="several app screens"
        imageSrc={
          lessThanMd
            ? '/CustomerDiscovery/HomeCustomerSmall.gif'
            : '/CustomerDiscovery/CustomerHomePickleImage.gif'
        }
        linkTo={CUSTOMER_DISCOVERY_ROUTE}
        pickleColor="blue"
        title="Rediscovering the Core Customer"
      />
      <HomePickle
        imageAlt="Video Upload states"
        imageSrc={
          lessThanMd
            ? '/Sessions/home-small-sessions.png'
            : '/Sessions/VideoCover.png'
        }
        linkTo={CORE_SESSIONS}
        pickleColor="yellow"
        title="Improving content creation and consumption"
      />
      <Box mb={24} mt={128} mx={xSpace}>
        <Heading bold>Other Projects</Heading>
      </Box>
      <GridBox columnGap={48} mb={80} mx={xSpace} rowGap={isXss ? 24 : 48}>
        <SecondaryProjectLink
          href={CORE_COMPONENT_LIBRARY_ROUTE}
          imgAlt="component w toggle controls"
          imgSrc="/ComponentLibrary/componenthover.png"
          text="Building the Core Component Library"
        />
        <SecondaryProjectLink
          href={IRTH_ROUTE}
          imgAlt="Irth app screens"
          imgSrc="/Irth/IrthHover.png"
          text="UI Refresh for Irth"
        />
        <SecondaryProjectLink
          href={LADDERS_ROUTE}
          imgAlt="Gaming Rankings"
          imgSrc="/Ladders/laddershover.png"
          text="Design for a gaming leaderboard"
        />
        <SecondaryProjectLink
          href={LISTENJAY_ROUTE}
          imgAlt="Quote UI"
          imgSrc="/ListenJay/listenjayhover.png"
          text="New feature for a podcast discovery platform"
        />
      </GridBox>
      <BannerLink href="/graphic-design" internal noHoverStyles>
        <BannerBox
          alignItems="center"
          justifyContent="space-between"
          mx={xSpace}
        >
          <BannerSticker
            alt="'Change things' sticker"
            src="/Graphic/banner-sticker.png"
          />
          <BannerTextBox>
            {!isXss && (
              <Heading mb={12}>Looking for someone who can do both?</Heading>
            )}
            <Title bold mb={0}>
              Graphic Design Sample
            </Title>
          </BannerTextBox>
          <BannerButton
            title="Navigate to Graphic Design portfolio"
            onClick={undefined}
          />
        </BannerBox>
      </BannerLink>
    </Layout>
  );
};

export default Home;
