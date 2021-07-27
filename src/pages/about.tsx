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
];

type StickerObj = {
  src: string;
  alt: string;
  coords: [number, number];
};

const emptyStickers: StickerObj[] = [];

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
            e.clientX - 150,
            e.clientY + document.documentElement.scrollTop - 75,
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
        <Box mb={80} mx={48}>
          <Title>Click anywhere to learn about me.</Title>
          <Title mb={8}>
            Download my&thinsp;
            <Link
              hoverImgAlt="resume"
              hoverImgSrc="/About/resumehover.png"
              href="https://core.fitness/"
            >
              resume
            </Link>
            &thinsp;or find me on&thinsp;
            <Link
              hoverImgAlt="linkedin profile"
              hoverImgSrc="/About/linkedinhover.png"
              href="https://core.fitness/"
            >
              LinkedIn.
            </Link>
          </Title>
        </Box>
        <Box mx={48}>
          <Title bold>Experience</Title>
          <GridBox>
            <Box>
              <Heading bold mb={8}>
                Product Designer
              </Heading>
              <Heading>Core &#40;An AlleyCorp Company&#41;</Heading>
              <Body>Feb 2021 - July 2021</Body>
            </Box>
            <Box>
              <Heading bold mb={8}>
                Product Designer
              </Heading>
              <Heading mb={8}>Freelance</Heading>
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
        </Box>
      </Layout>
      {stickers.map((s, i) => (
        <PortalImage
          coords={s.coords}
          imgAlt={s.alt}
          imgSrc={s.src}
          // eslint-disable-next-line react/no-array-index-key
          key={`${s.src}-${s.coords[0]}-${s.coords[1]}-${i}`}
        />
      ))}
    </>
  );
};

export default AboutMe;
