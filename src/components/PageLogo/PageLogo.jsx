import Logo from '../../images/logo.png';
import { LogoImg, LogoTitle } from './PageLogo.styled';

const PageLogo = () => {
  return (
    <>
      <LogoImg src={Logo} />
      <LogoTitle>Follows</LogoTitle>
    </>
  );
};

export default PageLogo;
