import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  background: #ebd8ff;
  transition: transform 200ms linear;
  &:hover {
    transform: scale(1.03);
  }
`;

export const Spinner = styled.span`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  &::after {
    content: '';
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    position: absolute;
    top: calc(50% - 15px);
    left: 7px;
    border-radius: 50%;
    border-top: 4px solid rgba(255, 255, 255, 1);
    border-left: 4px solid rgba(255, 255, 255, 1);
    border-bottom: 4px solid rgba(255, 255, 255, 1);
    border-right: 4px solid rgba(255, 255, 255, 0);
    animation: spinner 0.6s linear infinite;
  }
`;
