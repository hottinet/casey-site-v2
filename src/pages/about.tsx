import styled from '@emotion/styled';
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
    src: '/About/sake.gif',
    alt: 'bottle of sake',
  },
  {
    src: '/About/miami.png',
    alt: 'Real Housewives of Miami',
  },
  {
    src: '/About/cookie.gif',
    alt: 'cookie',
  },
  {
    src: '/About/sewing.png',
    alt: 'Sewing Machine',
  },
  {
    src: '/About/catpeach.png',
    alt: 'cat peach mario cart character',
  },
  {
    src: '/About/travelme.png',
    alt: 'Travel Me',
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
  const stickerIndexRef = useRef(0);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const { src, alt } = stickerData[stickerIndexRef.current];
      const nextIdx = stickerIndexRef.current + 1;
      stickerIndexRef.current = nextIdx >= stickerData.length ? 0 : nextIdx;
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
          <Title mb={8}>Click anywhere to learn about my interests.</Title>
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
          <Title bold>About me</Title>
          <Body>
            I&apos;m a Senior Product Designer with a focus on crafting awesome
            mobile apps. I thrive in scrappy startup teams, turning vague ideas
            into reality. I&apos;m organized, collaborative, and ready for a
            challenge. With 8 years of experience between visual and product
            design, I&apos;m looking to join a team where I can contribute as a
            design leader.
          </Body>
          <Title bold>Experience</Title>
          <GridBox>
            <Box>
              <Heading bold mb={8}>
                Senior Product Designer, Mobile Core Experience
              </Heading>
              <Heading>Zola</Heading>
              <Body>Nov 2021 - Oct 2023</Body>
            </Box>
            <Box>
              <Heading bold mb={8}>
                Product Designer
              </Heading>
              <Heading>Core &#40;Incubated by AlleyCorp&#41;</Heading>
              <Body>Feb 2021 - July 2021</Body>
            </Box>
            <Box>
              <Heading bold mb={8}>
                Freelance Product Designer
              </Heading>
              <Heading>
                Working with The Culinistas, Ellipsis Health, Irth and more
              </Heading>
              <Body>May 2020 - current</Body>
            </Box>
            <Box>
              <Heading bold mb={8}>
                Design Manager
              </Heading>
              <Heading>Flatiron School &#40;Acquired by WeWork&#41;</Heading>
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
