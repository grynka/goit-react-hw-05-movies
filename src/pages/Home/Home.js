import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { loadMovies } from 'service/API';

const Home = () => {
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
    <>
      {loading && <Loader />}
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
