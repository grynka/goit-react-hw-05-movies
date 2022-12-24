import { useParams } from 'react-router-dom';
import { loadMovies } from 'service/API';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';
  const { id } = useParams();

  useEffect(() => {
    loadMovies('card', id).then(setMovieDetails)
  }, [])

  const { poster_path, title, release_date, vote_average, overview, genres } =
  movieDetails;
  const imgUrl = poster_path ? `${IMAGE_BASE_URL}/${poster_path}` : 'noPoster';
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = Math.floor(vote_average * 10);
  const genresStr = genres.map(genre => genre.name).join(' ');

  return (
    <main>
      <img src={imgUrl} alt="" />
      <div>
        <h2>
          {title}( {releaseDate} )
        </h2>
        <p>User score: {voteAverage}</p>
        <h3>Overwiev</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresStr}</p>
      </div>
    </main>
  );
};
