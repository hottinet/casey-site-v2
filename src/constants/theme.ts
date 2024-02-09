import { pxToRem } from '~/utils/pxToRem';

const breakpointValues = {
  xxs: 479,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
};

const colors = {
  background: '#fd9e88',
  text: '#000',
  textSecondary: '#fff',
  textQuote: '#727272',
  black: '#000',
  white: '#fff',
  pink: '#fd9e88',
  red: '#e44116',
  blue: '#3475cc',
  yellow: '#f1e339',
};

const theme = {
  breakpointValues,
  breakpoints: {
    xxs: `@media only screen and (max-width: ${breakpointValues.xxs}px)`,
    xs: `@media only screen and (min-width: ${breakpointValues.xs}px)`,
    sm: `@media only screen and (min-width: ${breakpointValues.sm}px)`,
    md: `@media only screen and (min-width: ${breakpointValues.md}px)`,
    lg: `@media only screen and (min-width: ${breakpointValues.lg}px)`,
    xl: `@media only screen and (min-width: ${breakpointValues.xl}px)`,
  },
  spacing: {
    0: pxToRem(0),
    2: pxToRem(2),
    4: pxToRem(4),
    8: pxToRem(8),
    10: pxToRem(10),
    12: pxToRem(12),
    16: pxToRem(16),
    20: pxToRem(20),
    24: pxToRem(24),
    32: pxToRem(32),
    40: pxToRem(40),
    48: pxToRem(48),
    64: pxToRem(64),
    80: pxToRem(80),
    96: pxToRem(96),
    128: pxToRem(128),
  },
  borderWidth: {
    1: pxToRem(1),
    3: pxToRem(3),
  },
  borderRadius: {
    2: pxToRem(2),
    4: pxToRem(4),
    30: pxToRem(30),
    round: '50%',
    200: pxToRem(200),
  },
  fontSize: {
    caption: pxToRem(10),
    subBody: pxToRem(12),
    body: pxToRem(16),
    heading: pxToRem(20),
    title: pxToRem(36),
    10: pxToRem(10),
    14: pxToRem(14),
    16: pxToRem(16),
    18: pxToRem(18),
    20: pxToRem(20),
    24: pxToRem(24),
    32: pxToRem(32),
    40: pxToRem(40),
    48: pxToRem(48),
    64: pxToRem(64),
  },
  fontFamily: {
    normal: '"Public Sans", sans-serif',
    title: '"miller-text",serif',
  },
  lineHeight: {
    body: 1.5,
    regular: 1,
  },
  fontWeight: {
    regular: 400,
    bold: 700,
    black: 800,
  },
  colors,
};

export default theme;

export type ThemeShape = typeof theme;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends ThemeShape {}

export type Color = keyof typeof colors;
