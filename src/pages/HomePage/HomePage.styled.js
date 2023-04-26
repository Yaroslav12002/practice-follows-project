import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainPage = styled.div`
  padding-top: 20px;
  height: calc(100vh - 120px);
  color: #fff;
`;

export const Logo = styled.span`
  font-family: 'Saira';
  font-size: 40px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 5px;
  text-decoration: none;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-transform: uppercase;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
`;

export const Hero = styled.div`
  margin-bottom: 40px;
`;
