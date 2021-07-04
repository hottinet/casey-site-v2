const breakpoints = ['30rem', '48rem', '64rem', '75rem', '90rem'];
const mediaQueries = {
  xs: `@media only screen and (min-width: ${breakpoints[0]})`,
  sm: `@media only screen and (min-width: ${breakpoints[1]})`,
  md: `@media only screen and (min-width: ${breakpoints[2]})`,
  lg: `@media only screen and (min-width: ${breakpoints[3]})`,
  xl: `@media only screen and (min-width: ${breakpoints[4]})`,
};

const space = [
  '0rem',
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
  '4rem',
];
const spacing = {
  0: space[0],
  4: space[1],
  8: space[2],
  12: space[3],
  16: space[4],
  18: space[5],
  20: space[6],
  24: space[7],
  32: space[8],
  48: space[9],
  60: space[10],
};

const fontSizes = ['1rem', '2rem', '3.125rem'];
const fontSize = {
  body: fontSizes[0],
  heading: fontSizes[1],
  title: fontSizes[2],
};
const fontWeights = [400, 700, 800];
const fontWeight = {
  regular: fontWeights[0],
  bold: fontWeights[1],
  black: fontWeights[2],
};

const theme = {
  breakpoints,
  mediaQueries,
  colors: {
    background: '#f8ede0',
    text: '#000',
    textSecondary: '#fff',
    black: '#000',
    white: '#fff',
    secondary: '#416B63',
    primary: '#5582f7',
    tertiary: '#b13627',
  },
  space,
  spacing,
  fontSizes,
  fontSize,
  fontWeights,
  fontWeight,
};

export default theme;
