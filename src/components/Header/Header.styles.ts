import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { device } from '@styles/tools/breakpoints.styles';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: 18px 160px 18px 160px;
  transition: box-shadow 300ms ease-in-out, background-color 300ms linear;

  ${(props) =>
    props.fixed &&
    css`
      border-bottom: 1px solid ${rgba('#111b47', 0.1)};
      background-color: #f3f5ff;
    `}

  :hover {
    box-shadow: 1px 2px 4px 1px ${rgba('#111b47', 0.1)};
  }

  ${device.tablet} {
    padding: 18px 60px 18px 60px;
  }

  ${device.mobile} {
    padding: 18px 30px 18px 30px;
  }
`;
