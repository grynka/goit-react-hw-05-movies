import { Item, List, Image, Title } from 'components/App.styled';
import { Link, useLocation } from 'react-router-dom';
import poster from '../image/default.jpg'


const Home = ({ movies }) => {
  const location = useLocation()
  return (
    <main>
      <h1>Trending today</h1>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={ {from: location} }>
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
    </main>
  );
};

export default Home