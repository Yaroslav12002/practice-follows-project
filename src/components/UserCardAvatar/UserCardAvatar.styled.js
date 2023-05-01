import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 26px;
  width: 80px;
  height: 80px;
  background-color: #5736a3;
  border-radius: 50%;
  ::before {
    content: ' ';
    position: absolute;
    width: 380px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarPicture = styled.picture`
  z-index: 10;
  background-color: #5736a3;
  border-radius: 50%;
`;

export const Ellipse = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
