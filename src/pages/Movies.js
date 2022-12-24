import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadMovies } from 'service/API';
import { Item, List, Image } from 'components/App.styled';
import { SearchForm, Button, Label, Input } from './Searchbar.styled';

export const Movies = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies('search', searchMovie).then(setMovies);
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
    setPage(1);
    console.log(searchMovie, page);
  };

  return (
    <main>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit" className="button">
          <Label>Search</Label>
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </SearchForm>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                alt={movie.title}
                width="300"
              ></Image>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </Link>
          </Item>
        ))}
      </List>
    </main>
  );
};
