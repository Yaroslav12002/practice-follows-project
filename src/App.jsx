import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyles } from './GlobalStyles';
import Container from './components/Container/Container';
import Navigation from './components/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
