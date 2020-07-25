import { Colors, ColorsTheme } from './colors';

export interface Theme {
  colors: ColorsTheme;
  space: number[];
  fontSizes: string[];
  breakpoints: string[];
  global: GlobalTheme;
  forms: FormsTheme;
  behavior: BehaviorsTheme;
}

// Global
export interface GlobalTheme {
  defaultFont: string;
  secondaryFont: string;
  gutterSpace: number;
}

interface FormsTheme {
  defaultHeight: number;
  borderRadius: number;
}

interface BehaviorTheme {
  primary: Colors;
  secondary: Colors;
}

interface BehaviorsTheme {
  positive: BehaviorTheme;
  negative: BehaviorTheme;
  warning: BehaviorTheme;
  support: BehaviorTheme;
  closed: BehaviorTheme;
  default: BehaviorTheme;
}
