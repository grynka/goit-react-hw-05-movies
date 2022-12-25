import axios from 'axios';

//const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const SEARCH_FILMS_URL = 'https://api.themoviedb.org/3/search/movie';
const CARD_MOVIE = 'https://api.themoviedb.org/3/movie/';
//const TRAILER_MOVIE = 'https://api.themoviedb.org/3/movie/';
const KEY = '2f44dbe234f7609a16da7327d83f3eb3';

export async function loadMovies(URL, param) {
  switch (URL) {
    case 'search': {
      const response = await axios.get(
        `${SEARCH_FILMS_URL}?api_key=${KEY}&query=${param}`
      );
      return response.data.results;
    }
    case 'card': {
      const response = await axios.get(`${CARD_MOVIE}${param}?api_key=${KEY}`);
      return response.data;
    }
    case 'cast': {
      const response = await axios.get(
        `${CARD_MOVIE}${param}/credits?api_key=${KEY}`
      );
      return response.data.cast;
    }
    case 'reviews': {
      const response = await axios.get(
        `${CARD_MOVIE}${param}/reviews?api_key=${KEY}`
      );
      return response.data.results;
    }
    default:
      const response = await axios.get(`${TRENDING_URL}?api_key=${KEY}`);
      return response.data.results;
  }
}
