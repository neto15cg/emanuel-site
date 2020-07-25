import React from 'react';
import styled from 'styled-components';
import { space, color, typography, layout, flexbox, SpaceProps, ColorProps, TypographyProps, LayoutProps, FlexboxProps } from 'styled-system';

interface BoxProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps, FlexboxProps {
  children: React.ReactNode;
  className?: string;
  as?: string | React.ComponentType;
  textTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none';
  textDecoration?: 'overline' | 'line-through' | 'underline' | 'underline overline' | 'none';
}

const CustomBox: any = styled.div`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${(props) => (props.textTransform ? `text-transform: ${props.textTransform}` : '')}
  ${(props) => (props.textDecoration ? `text-decoration: ${props.textDecoration}` : '')}
`;

const Box = (props: BoxProps) => <CustomBox {...props} />;

export default Box;
