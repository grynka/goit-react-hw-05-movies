import { Route, Routes, Outlet } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { useState, useEffect } from 'react';
import { loadMovies } from 'service/API';
import { MovieDetails } from 'pages/MovieDetails';
import { Container, Header, Logo, Link } from './App.styled';
import { GiFilmStrip } from 'react-icons/gi';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await loadMovies();
      setMovies(res);
    };

    fetchData();
  }, []);

  

  return (
    <div>
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
        <Outlet />

      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="movies" element={<Movies/>} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      </Container>
    </div>
  );
};
