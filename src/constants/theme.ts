const theme = {
  breakpoints: {
    xs: '@media only screen and (min-width: 480px)',
    sm: '@media only screen and (min-width: 768px)',
    md: '@media only screen and (min-width: 1024px)',
    lg: '@media only screen and (min-width: 1200px)',
    xl: '@media only screen and (min-width: 1440px)',
  },
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
  },
  fontSize: {
    body: '1rem',
    heading: '2rem',
    title: '3.125rem',
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
