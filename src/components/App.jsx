import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { Container, Header, Logo } from './App.styled';
import NavBar from './NavBar/NavBar';
import { GiFilmStrip } from 'react-icons/gi';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';
import { Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetail/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <GiFilmStrip />
          Moovie
        </Logo>
        <NavBar />
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
};
