import { MainPage, Logo, StyledLink, Hero } from './HomePage.styled';

const HomeView = () => {
  return (
    <MainPage>
      <Hero>
        Wellcome to <Logo>Follows</Logo> social network!
      </Hero>
      <div>
        <StyledLink to="/tweets">Let&apos;s tweet</StyledLink>
      </div>
    </MainPage>
  );
};

export default HomeView;
