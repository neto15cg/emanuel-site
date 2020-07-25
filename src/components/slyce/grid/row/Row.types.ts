import React from 'react';

export interface RowProps {
  children?: React.ReactNode;
  className?: string;
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start';
  noGutter?: boolean;
}
