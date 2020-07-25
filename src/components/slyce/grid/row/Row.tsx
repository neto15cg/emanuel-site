import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme/theme';
import { RowProps } from './Row.types';

const { gutterSpace } = theme.global;

const RowCustom = styled.div`
  margin-left: ${props => (!props.noGutter ? `-${gutterSpace / 2}px` : '0px')};
  margin-right: ${props => (!props.noGutter ? `-${gutterSpace / 2}px` : '0px')};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent || 'initial'};
`;

const Row = ({ justifyContent, children, className, noGutter }: RowProps) => (
  <RowCustom justifyContent={justifyContent} className={className} noGutter={noGutter}>
    {children}
  </RowCustom>
);

export default Row;
