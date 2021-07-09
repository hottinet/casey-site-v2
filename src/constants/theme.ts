const theme = {
  breakpoints: {
    xs: '@media only screen and (min-width: 480px)',
    sm: '@media only screen and (min-width: 768px)',
    md: '@media only screen and (min-width: 1024px)',
    lg: '@media only screen and (min-width: 1200px)',
    xl: '@media only screen and (min-width: 1440px)',
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
    body: '1.125rem',
    heading: '1.75rem',
    title: '3.125rem',
  },
  fontFamily: "'Raleway', sans-serif",
  lineHeight: {
    body: 1.25,
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
