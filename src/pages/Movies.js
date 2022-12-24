import { useState, useEffect } from 'react';
import { loadMovies } from 'service/API';
import { SearchForm, Button, Label, Input } from './Movies.styled';
import { ImSearch } from 'react-icons/im';
import MovieList from 'components/MovieList/MovieList';


 const Movies = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchMovie !== '') 
{ loadMovies('search', searchMovie).then(setMovies);}
  }, [searchMovie]);

  const onSubmit = event => {
    event.preventDefault();
    const input = event.target.elements.search;
    const value = input.value.trim();

    if (value === '') {
      alert.error(`You didn't enter anything!`);
      return;
    }

    setSearchMovie(value);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit" className="button">
          <ImSearch />
          <Label>Search</Label>
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
        />
      </SearchForm>
      <MovieList movies={movies} /> 
      </>
  );
};

export default Movies