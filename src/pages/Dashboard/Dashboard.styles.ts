import styled from 'styled-components';
import { device } from '@styles/tools/breakpoints.styles';

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a:not(:last-child) {
    margin-right: 30px;
  }

  ${device.mobile} {
    display: none;
  }
`;

export const ButtonHeader = styled.a`
  position: relative;
  cursor: pointer;
  color: #505f98;
  font-style: normal;
  font-weight: normal;
  border: none;
  border-radius: 0;
  font-size: 1.4rem;
  white-space: nowrap;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #505f98;
    width: 0%;
    transition: width 150ms linear;
  }

  &:hover {
    &:after {
      content: '';
      width: 100%;
    }
  }
`;

export const Logo = styled.a`
  position: relative;
  cursor: pointer;
  color: #111b47;
  font-style: normal;
  font-weight: normal;
  border: none;
  border-radius: 0;
  white-space: nowrap;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const RequestBudget = styled.button`
  display: flex;
  background: none;
  align-items: center;
  justify-content: center;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: #111b47;
  border-radius: 2px;
  padding: 0 30px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;
