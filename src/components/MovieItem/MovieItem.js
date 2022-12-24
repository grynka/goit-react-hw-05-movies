import { Link, useLocation } from 'react-router-dom';
import { Item, Image, Title } from 'components/MovieItem/MovieItem.styled';
import poster from '../../image/default.jpg';
import PropTypes from 'prop-types';


const MovieItem = ({ movie }) => {
  const { id, backdrop_path, title, release_date } = movie;
  const location = useLocation();

  return (
    <Item key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Image
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
              : poster
          }
          alt={title}
          width="300"
        ></Image>
        <Title>
          {title} ({release_date ? release_date.slice(0, 4) : 'N/A'})
        </Title>
      </Link>
    </Item>
  );
};

MovieItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
  };

export default MovieItem;
