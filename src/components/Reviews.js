import { useParams } from 'react-router-dom';
import { loadMovies } from 'service/API';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadMovies('reviews', id).then(setMovieReviews);
  }, [id]);

    return (
 <ul>{movieReviews.map((review) =><li><h2>Author:</h2>{review.author}<p>{review.content}</p></li> )}</ul>
  );
};