import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('./page/Home/Home.jsx'));
const MovieDetails = lazy(() => import('./page/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./page/Movies/Movies'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={<Navigate to={'/'} replace />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};