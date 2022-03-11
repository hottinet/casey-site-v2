import styled from '@emotion/styled';
import random from 'lodash.random';
import { useEffect, useRef, useState } from 'react';

import Box from '~/components/box/Box';
import GridBox from '~/components/box/GridBox';
import Link from '~/components/Link';
import Layout from '~/components/meta/Layout';
import PortalImage from '~/components/PortalImage';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

const AboutContentBox = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing[24],
  marginLeft: theme.spacing[24],
  [theme.breakpoints.md]: {
    marginRight: theme.spacing[48],
    marginLeft: theme.spacing[48],
  },
}));

const stickerData = [
  {
    src: '/About/CA.png',
    alt: 'California State Magnet',
  },
  {
    src: '/About/campari.png',
    alt: 'bottle of campari',
  },
  {
    src: '/About/animalcrossing.png',
    alt: 'animal crossing character',
  },
  {
    src: '/About/shoes_sticker.png',
    alt: 'mis-matched shoes',
  },
  {
    src: '/About/bread_sticker.png',
    alt: 'bread',
  },
  {
    src: '/About/terraceHouse_sticker.png',
    alt: 'Terrace House',
  },
  {
    src: '/About/sewing.png',
    alt: 'Sewing Machine',
  },
];

type StickerObj = {
  src: string;
  alt: string;
  coords: [number, number];
};

const emptyStickers: StickerObj[] = [];
const stickerHeight = 150;

const AboutMe: React.FC = () => {
  const stickerRef = useRef<StickerObj[]>(emptyStickers);
  const [stickers, setStickers] = useState<StickerObj[]>(emptyStickers);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const { src, alt } = stickerData[random(0, stickerData.length - 1)];
      setStickers([
        ...stickerRef.current,
        {
          src,
          alt,
          // Adjust these minus values to change where the sticker drops
          // in relation to the cursor
          coords: [
            e.clientX - 60,
            e.clientY + document.documentElement.scrollTop - stickerHeight / 2,
          ],
        },
      ]);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    stickerRef.current = stickers;
  }, [stickers]);

  return (
    <>
      <Layout>
        <AboutContentBox mb={80}>
          <Title mb={8}>Click anywhere to learn about me.</Title>
          <Title mb={8}>
            Download my&thinsp;
            <Link
              hoverImgAlt="resume"
              hoverImgSrc="/About/resumehover.png"
              href="/CaseyBradfordResume.pdf"
            >
              resume
            </Link>
            &thinsp;or find me on&thinsp;
            <Link
              hoverImgAlt="linkedin profile"
              hoverImgSrc="/About/Linkedinhover.png"
              href="https://linkedin.com/in/caseyebradford/"
            >
              LinkedIn.
            </Link>
          </Title>
        </AboutContentBox>
        <AboutContentBox mb={48}>
          <Title bold>Experience</Title>
          <GridBox>
            <Box>
              <Heading bold mb={8}>
                Product Designer, Native Core Experience
              </Heading>
              <Heading>Zola</Heading>
              <Body>Oct 2021 - current</Body>
            </Box>
            <Box>
              <Heading bold mb={8}>
                Product Designer
              </Heading>
              <Heading>Core &#40;An AlleyCorp Company&#41;</Heading>
              <Body>Feb 2021 - July 2021</Body>
            </Box>
            <Box>
              <Heading bold mb={8}>
                Freelance Product Designer
              </Heading>
              <Heading>
                Irth, Enkasa Homes, Ellipsis Health, Something Else
              </Heading>
              <Body>May 2020 - Feb 2021</Body>
            </Box>
            <Box>
              <Heading bold mb={8}>
                Design Manager
              </Heading>
              <Heading>Flatiron School &#40;A WeWork Company&#41;</Heading>
              <Body>Jan 2018 - April 2020</Body>
            </Box>
          </GridBox>
        </AboutContentBox>
        <AboutContentBox>
          <Heading bold>What my colleagues are saying</Heading>
          <Title mb={48}>
            &quot;I was really impressed with her skills in delivering highly
            buildable designs. She made sure to incorporate feedback from
            engineers early and often, empowering the team to have valuable
            conversations around design changes. Would love to work with her
            again!&quot;
          </Title>
          <Heading bold mb={8}>
            Jill Cohen
          </Heading>
          <Heading>Head of Mobile Engineering at Core</Heading>
        </AboutContentBox>
      </Layout>
      {stickers.map((s, i) => (
        <PortalImage
          coords={s.coords}
          imgAlt={s.alt}
          imgSrc={s.src}
          // eslint-disable-next-line react/no-array-index-key
          key={`${s.src}-${s.coords[0]}-${s.coords[1]}-${i}`}
          maxDimension={{ dimension: 'height', size: stickerHeight }}
        />
      ))}
    </>
  );
};

export default AboutMe;
