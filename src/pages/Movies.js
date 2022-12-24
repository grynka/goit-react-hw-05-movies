import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadMovies } from 'service/API';
import { Item, List, Image } from 'components/App.styled';
import { SearchForm, Button, Label, Input, Title } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';
import poster from '../image/default.jpg'


export const Movies = () => {
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
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Image
                src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` : poster}
                alt={movie.title}
                width="300"
              ></Image>
              <Title>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </Title>
            </Link>
          </Item>
        ))}
      </List>
      </>
  );
};
