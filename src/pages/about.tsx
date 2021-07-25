import Box from '~/components/box/Box';
import GridBox from '~/components/box/GridBox';
import Link from '~/components/Link';
import Layout from '~/components/meta/Layout';
import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import Title from '~/components/typography/Title';

const AboutMe: React.FC = () => (
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
          <Heading>Irth, Enkasa Homes, Ellipsis Health, Something Else</Heading>
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
);

export default AboutMe;
