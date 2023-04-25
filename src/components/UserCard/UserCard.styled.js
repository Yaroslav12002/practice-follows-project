import styled from 'styled-components';
import backgroundMain from '../../images/Card/card-background.png';
import backgroundLogo from '../../images/Card/card-logo.png';

export const UserCardContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 178px 36px 36px 36px;
  width: 380px;
  height: 460px;
  background-image: url(${backgroundLogo}), url(${backgroundMain}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-size: 76px 22px, 308px 168px, contain;
  background-position: 20px 20px, 36px 28px, 0px 0px;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const NameLabelThumb = styled.div`
  transform: scale(0);
  transition: transform 200ms linear;
  ${UserCardContainer}:hover & {
    transform: scale(1);
  }
`;
