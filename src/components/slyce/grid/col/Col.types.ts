import React from 'react';
import { ColorProps } from 'styled-system';

export interface ColProps extends ColorProps {
  noGutter?: boolean;
  className?: string;
  children?: React.ReactNode;
  offsetLeft?: number;
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  small: number;
  medium: number;
  large: number;
}
