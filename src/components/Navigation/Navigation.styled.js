import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  display: 'inline-block';
  padding: 12px;
  font-weight: 700;
  color: #fff;
  &.active {
    border-bottom: 3px solid #fff;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #231a65;
`;

export const MenuList = styled.ul`
  display: flex;
`;
