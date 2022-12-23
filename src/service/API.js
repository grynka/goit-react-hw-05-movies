import axios from 'axios';

export const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const SEARCH_FILMS_URL = 'https://api.themoviedb.org/3/search/movie';
const CARD_MOVIE = 'https://api.themoviedb.org/3/movie/';
const TRAILER_MOVIE = 'https://api.themoviedb.org/3/movie/';
const KEY = '2f44dbe234f7609a16da7327d83f3eb3';

export async function loadMovies() {
  const BASE_SEARH_PARAMS = {
    key: KEY,
  };

  const response = await axios.get(TRENDING_URL, {
    params: BASE_SEARH_PARAMS,
  });

  return response.data;
}