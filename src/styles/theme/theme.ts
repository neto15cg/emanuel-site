import { Colors } from '@styles/theme/colors';
import { Theme } from './theme.types';

import { fontRoboto } from './fonts.theme';

export const theme: Theme = {
  colors: Colors,
  space: [0, 8, 16, 32, 48, 64, 92],
  fontSizes: ['1rem', '1.2rem', '1.4rem', '1.6rem', '2rem', '2.4rem', '3rem'],
  breakpoints: ['768px', '1024px', '1200px'],
  global: {
    defaultFont: fontRoboto,
    secondaryFont: fontRoboto,
    gutterSpace: 20,
  },
  forms: {
    defaultHeight: 36,
    borderRadius: 4,
  },
  behavior: {
    positive: {
      primary: Colors.green,
      secondary: Colors.green1,
    },
    negative: {
      primary: Colors.red,
      secondary: Colors.red1,
    },
    warning: {
      primary: Colors.yellow,
      secondary: Colors.yellow1,
    },
    support: {
      primary: Colors.blue6,
      secondary: Colors.blue1,
    },
    closed: {
      primary: Colors.black,
      secondary: Colors.black2,
    },
    default: {
      primary: Colors.purple,
      secondary: Colors.purple1,
    },
  },
};
