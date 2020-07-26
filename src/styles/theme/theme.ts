import { Colors } from '@styles/theme/colors';
import { Theme } from './theme.types';

import { fontRoboto } from './fonts.theme';

export const theme: Theme = {
  colors: Colors,
  space: [0, 10, 20, 40, 60, 80, 100],
  fontSizes: ['1rem', '1.2rem', '1.4rem', '1.6rem', '2rem', '2.4rem', '3rem'],
  breakpoints: ['768px', '1024px', '1200px'],
  global: {
    defaultFont: fontRoboto,
    secondaryFont: fontRoboto,
    gutterSpace: 20,
  },
};
