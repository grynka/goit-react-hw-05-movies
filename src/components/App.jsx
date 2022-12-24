import { Route, Routes, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadMovies } from 'service/API';
import { Container, Header, Logo, Link } from './App.styled';
import { GiFilmStrip } from 'react-icons/gi';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';
import Loader from './Loader/Loader';
import { Suspense } from 'react';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await loadMovies();
      setMovies(res);
    };

    fetchData().finally(setLoading(false));
  }, []);

  return (
    <div>
  {loading && <Loader />}
      <Container>
        <Header>
          <Logo>
            <GiFilmStrip />
            Moovie{' '}
          </Logo>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Suspense fallback={null}>
        <Outlet />
             <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
        </Suspense>

      </Container>
    </div>
  );
};
