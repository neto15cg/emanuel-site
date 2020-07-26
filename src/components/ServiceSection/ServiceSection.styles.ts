import styled from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';

export const ServiceSectionContainer = styled.section`
  position: relative;
  min-height: 1112px;
  width: 100%;
  z-index: 1;
  background-image: linear-gradient(#f3f5ff, #dae0ff, #c0cbff);

  ${device.desktop} {
    padding: 200px 160px 200px 160px;
  }

  ${device.tablet} {
    padding: 200px 60px 200px 60px;
    display: flex;
    justify-content: center;
  }

  ${device.mobile} {
    display: flex;
    justify-content: center;
    padding: 120px 30px 120px 30px;
  }
`;

export const ServiceDeviderTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 121px;
  background-image: url(../../assets/images/divider.png);
`;

export const ServiceDeviderBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 122px;
  background-image: url(../../assets/images/divider.png);
  transform: rotate(180deg);
`;

export const ServiceTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${(props) => props.theme.global.gutterSpace * 2}px;
  font-size: 4.3rem;
  color: #091133;
  text-decoration: underline;
`;

export const ServiceContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: ${(props) => props.theme.global.gutterSpace * 2}px;

  ${device.desktop} {
    margin: ${(props) => props.theme.global.gutterSpace}px 0;
  }
`;

export const ServiceCardTitle = styled.h2`
  font-size: 2.7rem;
  color: #091133;
  margin: ${(props) => props.theme.global.gutterSpace}px 0;
  text-align: center;
`;

export const ServiceDescrption = styled.p`
  font-size: 2.3rem;
  color: #505f98;
  text-align: justify;
`;
