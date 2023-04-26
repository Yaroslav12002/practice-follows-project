import { MainPage, Logo, StyledLink, Hero } from './HomePage.styled';

const HomePage = () => {
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

export default HomePage;
