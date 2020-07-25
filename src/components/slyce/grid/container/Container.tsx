import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme/theme';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  noGutter?: boolean;
}

const { gutterSpace } = theme.global;

const ContainerCustom = styled.div`
  width: 100%;
  display: block;
  margin-right: auto;
  margin-left: auto;

  ${(props) =>
    !props.noGutter &&
    `
    padding-left: ${gutterSpace / 2}px;
    padding-right: ${gutterSpace / 2}px;
  `}
`;

const Container = ({ className, children, noGutter }: ContainerProps) => (
  <ContainerCustom className={className} noGutter={noGutter}>
    {children}
  </ContainerCustom>
);

export default Container;
