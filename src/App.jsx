import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import SharedLayout from './components/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import Tweets from './pages/Tweets/Tweets';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
