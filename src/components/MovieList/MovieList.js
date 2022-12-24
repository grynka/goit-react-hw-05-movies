import MovieItem from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';
import PropTypes from 'prop-types';


const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </List>
  );
};

MovieList.ptopTypes = {
    movies: PropTypes.array,
  };
  
export default MovieList;

