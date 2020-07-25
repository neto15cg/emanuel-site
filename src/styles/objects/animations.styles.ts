import { keyframes } from 'styled-components';

export const animaDash = keyframes`
  to {
      stroke-dashoffset: 0;
    }
`;

export const animaFadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

export const animaInToLeft = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1;  transform: translateX(0px);}
`;

export const animaFadeScaleIn = (startScale = 0.7) => keyframes`
  from { opacity: 0; transform: scale(${startScale});}
  to { opacity: 1; transform: scale(1);}
`;

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const increaseSizeFromLeft = keyframes`
  from {
    left: -5%;
    width: 5%;
  }
  to {
    left: 130%;
    width: 100%;
  }
`;

export const increaseSizeToRight = keyframes`
  from {
    left: -80%;
    width: 80%;
  }
  to {
    left: 110%;
    width: 10%;
  }
`;
