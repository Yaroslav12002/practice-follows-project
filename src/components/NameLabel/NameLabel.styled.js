import styled from 'styled-components';
import speechBubble from '../../images/Card/speach-bubble.png';

export const NamePlate = styled.div`
  width: 200px;
  height: 70px;
  position: absolute;
  top: -70px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #231a65;
  text-transform: uppercase;
  background-image: url(${speechBubble});
  background-size: 100% 100%;
`;

export const NameWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
