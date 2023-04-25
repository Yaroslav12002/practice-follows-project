import { MenuLink } from "./Navigation.styled";
function Navigation() {
  return (
    <nav>
      <MenuLink to="/">Main</MenuLink>
      <MenuLink to="/tweets">Tweets</MenuLink>
    </nav>
  );
}

export default Navigation;
