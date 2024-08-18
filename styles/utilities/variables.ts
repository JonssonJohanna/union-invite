export const BASE_UNIT = 'rem';
export const BASE_VALUE = 1;

const calcValue = (value: number, divided = false) => {
  return divided ? BASE_VALUE / value : BASE_VALUE * value;
};

export const headerHeights = {
  //---------
  desktop: '10rem',
  //----------
  mobile: '10rem',
};

export const colors = {
  // colors
  forest: '#2B4A45',
  sand: '#EFEDDE',
  fire: '#EA561F',
  ocean: '#CCEAFA',

  // Base colors
  imageBackgroundColor: '#F6F6F6',
  offWhite: '#FCF9EF',
  background: '#fcfaee',
  placeholder: 'rgba(0,0,0,0.7)',
  transparent: 'transparent',

  // Grey scale
  black: '#000000',
  grey10: '#0D0D0D',
  grey20: '#121212',
  grey30: '#1A1A1A',
  grey35: '#313131',
  grey40: '#767676',
  grey65: '#A4A4A4',
  grey70: '#A7A7A7',
  grey80: '#D1D1D1',
  grey90: '#F4F4F4',
  grey95: '#EDEDED',
  white: '#FFFFFF',
};

export const boxShadow = 'rgba(0, 0, 0, 0.45) 0px 0px 20px';

export const opacity = {
  _0: '0',
  _1: '0.1',
  _2: '0.2',
  _3: '0.3',
  _4: '0.4',
  _5: '0.5',
  _6: '0.6',
  _7: '0.7',
  _8: '0.8',
  _9: '0.9',
  _10: '1',
};

export const spacing = {
  _00: `0`,
  _02: `${calcValue(0.2)}${BASE_UNIT}`,
  _04: `${calcValue(0.4)}${BASE_UNIT}`,
  _06: `${calcValue(0.6)}${BASE_UNIT}`,
  _08: `${calcValue(0.8)}${BASE_UNIT}`,
  _10: `${calcValue(1)}${BASE_UNIT}`,
  _12: `${calcValue(1.2)}${BASE_UNIT}`,
  _13: `${calcValue(1.3)}${BASE_UNIT}`,
  _14: `${calcValue(1.4)}${BASE_UNIT}`,
  _15: `${calcValue(1.5)}${BASE_UNIT}`,
  _16: `${calcValue(1.6)}${BASE_UNIT}`,
  _17: `${calcValue(1.7)}${BASE_UNIT}`,
  _18: `${calcValue(1.8)}${BASE_UNIT}`,
  _20: `${calcValue(2)}${BASE_UNIT}`,
  _22: `${calcValue(2.2)}${BASE_UNIT}`,
  _24: `${calcValue(2.4)}${BASE_UNIT}`,
  _28: `${calcValue(2.8)}${BASE_UNIT}`,
  _32: `${calcValue(3.2)}${BASE_UNIT}`,
  _40: `${calcValue(4)}${BASE_UNIT}`,
  _44: `${calcValue(4.4)}${BASE_UNIT}`,
  _48: `${calcValue(4.8)}${BASE_UNIT}`,
  _54: `${calcValue(5.4)}${BASE_UNIT}`,
  _56: `${calcValue(5.6)}${BASE_UNIT}`,
  _64: `${calcValue(6.4)}${BASE_UNIT}`,
  _80: `${calcValue(8.0)}${BASE_UNIT}`,
  _88: `${calcValue(8.8)}${BASE_UNIT}`,
  _100: `${calcValue(10)}${BASE_UNIT}`,
};

export const display = {
  _none: 'none',
  _block: 'block',
  _inline: 'inline',
  _inlineBlock: 'inline-block',
  _flex: 'flex',
  _grid: 'grid',
  _inherit: 'inherit',
};

export const justifyContents = {
  _center: 'center',
  _flexEnd: 'flex-end',
  _flexStart: 'flex-start',
  _spaceAround: 'space-around',
  _spaceBetween: 'space-between',
};

export const alignItems = {
  _center: 'center',
  _flexEnd: 'flex-end',
  _flexStart: 'flex-start',
  _stretch: 'stretch',
};

export const typography = {
  primaryFont: 'DM Sans',
  secondaryFont: 'new-spirit',
  encodeSans: 'EncodeSans',
  lineHeights: {
    _160: 1.6,
    _150: 1.5,
    _140: 1.4,
    _130: 1.3,
    _120: 1.2,
    _100: 1,
  },
  letterSpacing: {
    _0: '0',
    _1: '0.1rem',
    _2: '0.2rem',
    _3: '0.3rem',
    _4: '0.4rem',
    _5: '0.5rem',
    _6: '0.6rem',
    _7: '0.7rem',
    _8: '0.8rem',
    _9: '0.9rem',
    _10: '1rem',
  },
  weight: {
    extraBold: '800',
    bold: '700',
    semibold: '500',
    normal: '400',
  },
  transform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    none: 'none',
  },
  fontStyle: {
    italic: 'italic',
    normal: 'normal',
  },
  textDecoration: {
    underline: 'underline',
    none: 'none',
  },
  sizes: {
    _104: `${calcValue(10.4)}${BASE_UNIT}`,
    _62: `${calcValue(6.2)}${BASE_UNIT}`,
    _58: `${calcValue(5.8)}${BASE_UNIT}`,
    _56: `${calcValue(5.6)}${BASE_UNIT}`,
    _48: `${calcValue(4.8)}${BASE_UNIT}`,
    _46: `${calcValue(4.6)}${BASE_UNIT}`,
    _40: `${calcValue(4)}${BASE_UNIT}`,
    _36: `${calcValue(3.6)}${BASE_UNIT}`,
    _32: `${calcValue(3.2)}${BASE_UNIT}`,
    _28: `${calcValue(2.8)}${BASE_UNIT}`,
    _24: `${calcValue(2.4)}${BASE_UNIT}`,
    _22: `${calcValue(2.2)}${BASE_UNIT}`,
    _20: `${calcValue(2)}${BASE_UNIT}`,
    _18: `${calcValue(1.8)}${BASE_UNIT}`,
    _16: `${calcValue(1.6)}${BASE_UNIT}`,
    _14: `${calcValue(1.4)}${BASE_UNIT}`,
    _12: `${calcValue(1.2)}${BASE_UNIT}`,
    _10: `${calcValue(1)}${BASE_UNIT}`,
    _09: `${calcValue(0.9)}${BASE_UNIT}`,
    _08: `${calcValue(0.8)}${BASE_UNIT}`,
  },
};

export const radius = {
  _02: `${calcValue(0.2)}${BASE_UNIT}`,
  _04: `${calcValue(0.4)}${BASE_UNIT}`,
  _08: `${calcValue(0.8)}${BASE_UNIT}`,
  _30: `${calcValue(3)}${BASE_UNIT}`,
  _100: `${calcValue(10)}${BASE_UNIT}`,
};

export const mqSizes = {
  tabletMin: 769,
  tabletMax: 1199,
  mobile: 768,
};

export const maxWidths = {
  base: '650px',
  input: '350px',
  container: '1200px',
  smallContainer: '900px',
};

export const mq = {
  desktopUp: '(min-width: 1200px)',
  desktopDown: '(max-width: 1199px)',
  tabletLandscapeDown: '(max-width: 1024px)',
  tabletLandscapeBelow: '(max-width: 1023px)',
  tabletLargePortraitDown: '(max-width: 900px)',
  tabletLargePortraitBelow: '(max-width: 899px)',
  tabletPortraitUp: '(min-width: 769px)',
  tabletPortraitDown: '(max-width: 768px)',
  mobileLargeUp: '(min-width: 588px)',
  mobileLargeDown: '(max-width: 587px)',
  mobileUp: '(min-width: 481px)',
  mobileDown: '(max-width: 480px)',
};
