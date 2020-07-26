import styled, { css } from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';

export const GalelerySectionContainer = styled.section`
  position: relative;
  width: 100%;
  z-index: 1;

  ${device.desktop} {
    padding: 200px 160px 200px 160px;
  }

  ${device.tablet} {
    padding: 30px 60px 30px 60px;
    display: flex;
    justify-content: center;
  }

  ${device.mobile} {
    display: flex;
    justify-content: center;
    padding: 30px 30px 30px 30px;
  }
`;

export const AnimatedDivRight = styled.div`
  margin-left: -100vw;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.show &&
    css`
      animation: slide-in 700ms forwards;
    `}

  @keyframes slide-in {
    100% {
      margin-left: 0;
    }
  }
`;
