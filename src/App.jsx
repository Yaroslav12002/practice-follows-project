// import { Routes, Route } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// import { lazy } from 'react';
import SharedLayout from './components/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import Tweets from './pages/Tweets/Tweets';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<SharedLayout />}>
  //         <Route index element={<HomePage />} />
  //         <Route path="tweets" element={<Tweets />} />
  //         <Route path="*" element={<HomePage />} />
  //       </Route>
  //     </Routes>
  //   </>
  // );
}

export default App;
