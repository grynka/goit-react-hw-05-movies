import axios from 'axios';

//const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const SEARCH_FILMS_URL = 'https://api.themoviedb.org/3/search/movie';
const CARD_MOVIE = 'https://api.themoviedb.org/3/movie/';
//const TRAILER_MOVIE = 'https://api.themoviedb.org/3/movie/';
const KEY = '2f44dbe234f7609a16da7327d83f3eb3';

export async function loadMovies(URL, param) {
  let url;
  if (URL === "search") {
    url = SEARCH_FILMS_URL;
    const response = await axios.get(`${url}?api_key=${KEY}&query=${param}`)
    return response.data.results;
  }
  else if (URL === "card") {
    url = CARD_MOVIE
    const response = await axios.get(`${url}${param}?api_key=${KEY}`)
    return response.data;
  }
  else 
  {const response = await axios.get(`${TRENDING_URL}?api_key=${KEY}`)
  return response.data.results}
}