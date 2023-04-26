import { Link } from 'react-router-dom';
import { MainPage } from './HomePage.styled';

const HomeView = () => {
  return (
    <MainPage>
      Wellcome to Follows social network!
      <div>
        <Link to="/tweets">Let&apos;s tweet</Link>
      </div>
    </MainPage>
  );
};

export default HomeView;
