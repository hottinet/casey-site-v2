import styled from '@emotion/styled';
import { useContext, useState } from 'react';

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
  CORE_LIVE_CLASSES,
  CORE_PROGRAMS,
  CORE_SESSIONS,
  CUSTOMER_DISCOVERY_ROUTE,
  IRTH_ROUTE,
  ZOLA_BABY_ROUTE,
  ZOLA_BUDGET_ROUTE,
  ZOLA_NAVIGATION_ROUTE,
  ZOLA_ONBOARDING,
} from '~/constants/routing';
import { BreakpointsContext } from '~/contexts/breakpointsContext';
import { Color } from '~/typings/theme';

// START - MISC STYLES - START
const LinkText = styled.span(({ theme }) => ({
  fontSize: theme.fontSize.mobileTitle,
  fontFamily: theme.fontFamily,
  [theme.breakpoints.xs]: {
    fontSize: theme.fontSize.title,
  },
}));

const MobileAboutWrapper = styled(Box)`
  margin-left: -0.6rem;
`;
// END - MISC STYLES - END

// START - PICKLE STYLES - START
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
// END - PICKLE STYLES - END

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
  const [isHovered, setIsHovered] = useState(false);
  const breakpoints = useContext(BreakpointsContext);
  return (
    <SizedPickle
      color={pickleColor}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PickleLink href={linkTo} internal noHoverStyles>
        <PickleContentWrapper alignItems="center">
          {breakpoints.includes('sm') && (
            <ImageBox alignItems="center">
              <Image alt={imageAlt} src={imageSrc} />
            </ImageBox>
          )}
          <TitleBox column>
            <PickleTitle bold>{title}</PickleTitle>
            <ArrowButton
              forceHover={isHovered}
              title={`Navigate to ${linkTo}`}
              onClick={undefined}
            />
          </TitleBox>
        </PickleContentWrapper>
      </PickleLink>
    </SizedPickle>
  );
};

type SecondaryProjectLinkProps = {
  href: string;
  text: string;
  imgSrc?: string;
  imgAlt?: string;
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
        <Title>Most recently building the mobile experience at Zola.</Title>
        {!breakpoints.includes('sm') && (
          <MobileAboutWrapper>
            <Link href="/about" internal noHoverStyles>
              <TextButton label="About Me" onClick={undefined} />
            </Link>
          </MobileAboutWrapper>
        )}
      </Box>
      <HomePickle
        imageAlt="Budget tool app screens"
        imageSrc={
          lessThanMd
            ? '/ZolaBudget/Home_Small_ZolaBudget.png'
            : '/ZolaBudget/Home_ZolaBudget.png'
        }
        linkTo={ZOLA_BUDGET_ROUTE}
        pickleColor="green"
        title="Building a wedding budgeting tool for Zola's iOS app"
      />
      <HomePickle
        imageAlt="Zola app home screen"
        imageSrc={
          lessThanMd
            ? '/ZolaNav/Home_Small_ZolaNav.png'
            : '/ZolaNav/Home_ZolaNav.png'
        }
        linkTo={ZOLA_NAVIGATION_ROUTE}
        pickleColor="red"
        title="Creating a more scalable navigation for Zola's iOS app"
      />
      <HomePickle
        imageAlt="alt"
        imageSrc={
          lessThanMd
            ? '/ZolaOnboarding/Home_Small_ZolaOnboarding.png'
            : '/ZolaOnboarding/Home_ZolaOnboarding.png'
        }
        linkTo={ZOLA_ONBOARDING}
        pickleColor="blue"
        title="Making a great first impression with iOS onboarding"
      />
      <HomePickle
        imageAlt="baby registry website and app"
        imageSrc={
          lessThanMd
            ? '/ZolaBaby/Home_Small_ZolaBaby.png'
            : '/ZolaBaby/Home_ZolaBaby.png'
        }
        linkTo={ZOLA_BABY_ROUTE}
        pickleColor="yellow"
        title="Launching Zola's baby registry product"
      />
      <Box mb={24} mt={128} mx={xSpace}>
        <Heading bold>Other Projects</Heading>
      </Box>
      <GridBox columnGap={48} mb={80} mx={xSpace} rowGap={isXss ? 24 : 48}>
        <SecondaryProjectLink
          href={CORE_PROGRAMS}
          text="Building digital fitness programs"
        />
        <SecondaryProjectLink
          href={CUSTOMER_DISCOVERY_ROUTE}
          text="Rediscovering the Core Customer"
        />
        <SecondaryProjectLink
          href={CORE_LIVE_CLASSES}
          text="Designing a live class experience for fitness"
        />
        <SecondaryProjectLink
          href={CORE_SESSIONS}
          text="Improving fitness content creation and consumption"
        />
        <SecondaryProjectLink
          href={IRTH_ROUTE}
          text="UI Refresh for the Irth app"
        />
      </GridBox>
    </Layout>
  );
};

export default Home;
