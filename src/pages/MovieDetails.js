import { useParams } from "react-router-dom";
import { loadMovies } from "service/API";

export const MovieDetails = () => {
    const { id } = useParams();
    const movie = loadMovies('card', id);
    if (movie) {
        console.log(movie)
    }

    return (
      <main>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
        <div>
          <h2>
            {movie.title}
            {}
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
            a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
            atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
            praesentium ipsum quos unde voluptatum?
          </p>
        </div>
      </main>
    );
  };