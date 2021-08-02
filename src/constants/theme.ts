const breakpointValues = {
  xxs: 479,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
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
  colors: {
    background: '#F8EDE0',
    sand: '#F8EDE0',
    text: '#000',
    textSecondary: '#fff',
    black: '#000',
    white: '#fff',
    green: '#416B63',
    blue: '#5582F7',
    yellow: '#d48126',
    red: '#b13627',
  },
  spacing: {
    0: '0rem',
    4: '0.25rem',
    8: '0.5rem',
    12: '0.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    48: '3rem',
    64: '4rem',
    80: '5rem',
    128: '8rem',
  },
  border: {
    borderWidth: {
      1: '1px',
      3: '0.1875rem',
    },
  },
  fontSize: {
    subBody: '1rem',
    body: '1rem',
    heading: '1.25rem',
    title: '2.25rem',
    mobileTitle: '1.75rem',
  },
  fontFamily: "'Raleway', sans-serif",
  lineHeight: {
    body: 1.5,
    regular: 1,
  },
  fontWeight: {
    regular: 400,
    bold: 700,
    black: 800,
  },
};

export default theme;

export type ThemeShape = typeof theme;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends ThemeShape {}
