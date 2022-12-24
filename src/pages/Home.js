import { Item, List, Image, Title } from 'components/App.styled';
import { Link } from 'react-router-dom';

export const Home = ({ movies }) => {
  return (
    <main>
      <h1>Trending today</h1>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
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
