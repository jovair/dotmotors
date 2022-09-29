export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',
    backgroundMain: '#393939',
    backgroundLigth: '#F2F2F2',

    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    mediumGray: '#8F8F8F',
    gray: '#6A6A6A',
    darkGray: '#393939',

    dPrimary: '#FD7813',
    dSecondary: '#26E55F',
    dTerciary: '#FE3B08',
    dQuarternary: '#FEBB08',
    dQuinary: '#E2306C',

    lightHover: '#FF872D',
    darkHover: '#F16B05'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
