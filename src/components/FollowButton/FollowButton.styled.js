import styled from 'styled-components';

export const Button = styled.button`
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
  background-color: #ebd8ff;
  background-color: ${props => {
    return props.changeBgColor ? '#5CD3A8' : '#ebd8ff';
  }};
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.03);
  }
`;
