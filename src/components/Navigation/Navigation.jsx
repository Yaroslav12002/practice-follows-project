import { Nav, MenuLink, LogoLink, MenuList } from './Navigation.styled';
import PageLogo from '../PageLogo';

function Navigation() {
  return (
    <Nav>
      <LogoLink href="/">
        <PageLogo />
      </LogoLink>
      <MenuList>
        <li>
          <MenuLink to="/">Main</MenuLink>
        </li>
        <li>
          <MenuLink to="/tweets">Tweets</MenuLink>
        </li>
      </MenuList>
    </Nav>
  );
}

export default Navigation;
