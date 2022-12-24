import { useParams, Outlet } from 'react-router-dom';
import { loadMovies } from 'service/API';
import { useState, useEffect } from 'react';
import { Detail, Image, Link } from './MovieDetail.styled';
import poster from '../image/default.jpg'

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({
    backdrop_path: '',
    genres: [],
    overview: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: '',
  });
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';
  const { id } = useParams();

  useEffect(() => {
    loadMovies('card', id).then(setMovieDetails);
  }, [id]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;
  const imgUrl = poster_path ? `${IMAGE_BASE_URL}/${poster_path}` : poster;
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = Math.floor(vote_average * 10);
  const genresStr = genres.map(genre => genre.name).join(', ');

  return (
    <main>
      <Detail>
        <Image src={imgUrl} alt={title} />
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
      </Detail>
      <p>Additional information</p>
      <Link key={`c${id}`} to={`/movies/${id}/cast`}>
        Cast
      </Link>
      <Link key={`r${id}`} to={`/movies/${id}/reviews`}>
        Review
      </Link>
      <Outlet />
    </main>
  );
};
