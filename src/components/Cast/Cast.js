import { useParams } from 'react-router-dom';
import { loadMovies } from 'service/API';
import { useState, useEffect } from 'react';
import { Actors, Actor } from './Cast.styled';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadMovies('cast', id).then(setMovieCast);
  }, [id]);

    return (
 <Actors>{movieCast.map((actor) => <Actor key={actor.name}><img src={`https://image.tmdb.org/t/p/w780${actor.profile_path}`} alt={actor.name}  width="100" /> {actor.name}</Actor>)}</Actors>
  );
};
