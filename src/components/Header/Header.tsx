import React from 'react';
import { StyledHeader } from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = (props: HeaderProps) => {
  const { children, scrollPosition } = props;
  return <StyledHeader fixed={scrollPosition > 0}>{children}</StyledHeader>;
};

export default Header;
