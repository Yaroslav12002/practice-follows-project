import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation';
import {} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
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
