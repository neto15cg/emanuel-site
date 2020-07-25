import styled from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';
import { rgba } from 'polished';

export const HightLightContainer = styled.section`
  min-height: 510px;
  width: 100%;

  display: flex;
  justify-content: space-around;

  ${device.desktop} {
    padding: 100px 160px 100px 160px;
  }

  ${device.tablet} {
    padding: 40px 60px 40px 60px;
  }

  ${device.mobile} {
    padding: 40px 30px 0 30px;
  }
`;

export const HightLightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  min-height: 330px;
  background-color: #f3f5ff;
  padding: 20px;
  border-radius: 20px;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 6px 2px ${rgba('#091133', 0.1)};
  }

  ${device.tablet} {
    margin-bottom: 40px;
    width: 300px;
  }

  ${device.mobile} {
    margin-bottom: 40px;
    width: 300px;
  }
`;

export const HightLightCardTitle = styled.h1`
  color: #091133;
  font-size: 2.3rem;
  margin: 20px 0;
  text-align: center;
`;

export const HightLightCardDescription = styled.p`
  color: #505f98;
  font-size: 1.8rem;
  margin: 20px 0;
  text-align: center;
`;
