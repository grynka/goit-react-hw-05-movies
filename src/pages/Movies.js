import { useState, useEffect } from 'react';
import { loadMovies } from 'service/API';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import SearchForm  from 'components/SearchForm/SearchForm';


 const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  
  useEffect(() => {
    if (queryParam !== '') 
{ loadMovies('search', queryParam).then(setMovies);}
  }, [queryParam]);

  function onSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.query;
    let { value } = input;

    if (!value) {
      alert('Enter the name of the movie, for a correct search!');
      return;
    }

    setSearchParams({ query: value});
  }

  return (
    <>
      <SearchForm onSubmit={onSubmit}/>
      <MovieList movies={movies} /> 
      </>
  );
};

export default Movies