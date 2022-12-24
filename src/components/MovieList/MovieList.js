import MovieItem from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </List>
  );
};

export default MovieList;

