import { Link } from "react-router-dom";

export const Home = ({movies}) => {
    return (
            <main>
            <h1>Trending today</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  };