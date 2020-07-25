import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '@styles/theme/theme';
import { device } from '@styles/tools/breakpoints.styles';
import { color } from 'styled-system';
import { ColProps } from './Col.types';

const noCol = 24;
const { gutterSpace } = theme.global;

const getWidthGrid = (value: number, offset: number) => {
  const width = (value * 100) / noCol;
  let offsetValue = '';

  if (offset && noCol - value >= offset) {
    const margin = (offset * 100) / noCol;
    offsetValue = `margin-left: ${margin.toString().length > 4 ? margin.toFixed(4) : margin}%;`;
  }

  const widthFixed = width.toString().length > 4 ? width.toFixed(4) : width;
  return `flex: 0 0 ${widthFixed}%;
  max-width: ${widthFixed}%;
  ${offsetValue}`;
};

const ResponsiveCol = css`
  ${(props: ColProps) => props.small && `${device.mobile} {${getWidthGrid(props.small, props.offsetLeft)}}`}
  ${(props: ColProps) => props.medium && `${device.tablet} {${getWidthGrid(props.medium, props.offsetLeft)}}`}
  ${(props: ColProps) => props.large && `${device.desktop} {${getWidthGrid(props.large, props.offsetLeft)}}`}
`;

const ColCustom = styled.div`
  position: relative;
  padding-left: ${(props: ColProps) => (props.noGutter ? 0 : `${gutterSpace / 2}px`)};
  padding-right: ${(props: ColProps) => (props.noGutter ? 0 : `${gutterSpace / 2}px`)};
  min-height: 1px;
  flex-grow: 1;
  flex-basis: 0;
  ${(props: ColProps) => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${(props: ColProps) => (props.small === props.medium && props.small === props.large ? getWidthGrid(props.small, props.offsetLeft) : ResponsiveCol)};
  ${color}
`;

const Col = ({ children, ...props }: ColProps) => <ColCustom {...props}>{children}</ColCustom>;

export default Col;
