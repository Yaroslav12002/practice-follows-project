import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyles } from './GlobalStyles';
import SharedLayout from './components/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
