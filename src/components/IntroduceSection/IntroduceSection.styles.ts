import styled from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';

export const IntroduceSectionContainerBg = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  background-image: url(../../assets/images/background1.svg);
  opacity: 0.4;
  background-repeat: no-repeat;
  background-position-x: right;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const IntroduceSectionContainer = styled.section`
  position: relative;
  min-height: 1112px;
  width: 100%;
  z-index: 1;

  ${device.desktop} {
    padding: 200px 160px 200px 160px;
    background-image: linear-gradient(#c0cbff, #dae0ff, #f3f5ff);
  }

  ${device.tablet} {
    padding: 200px 60px 200px 60px;
    display: flex;
    justify-content: center;
    min-height: 0;
    background-image: linear-gradient(#c0cbff, #dae0ff, #f3f5ff);
    ${IntroduceSectionContainerBg} {
      opacity: 0.1;
    }
  }

  ${device.mobile} {
    display: flex;
    justify-content: center;
    padding: 120px 30px 120px 30px;
    background-color: #f3f5ff;
    min-height: 0;

    ${IntroduceSectionContainerBg} {
      display: none;
      opacity: 0.1;
    }
  }
`;

export const Introduce = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleIntroduce = styled.h1`
  font-size: 50px;
  letter-spacing: 1px;
  color: #091133;
  flex-wrap: wrap;
  text-align: center;
  margin: 20px 0;
`;

export const DescriptionIntroduce = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  color: #505f98;
  flex-wrap: wrap;
  text-align: justify;
`;

export const ProfileImg = styled.img`
  border-radius: 30px;
`;

export const IntroduceDevider = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 122px;
  background-image: url(../../assets/images/divider.png);
  transform: rotate(180deg);
`;
