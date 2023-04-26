import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation';
import { GlobalStyles } from '../../GlobalStyles';

const SharedLayout = () => {
  return (
    <>
      {' '}
      <GlobalStyles />
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
