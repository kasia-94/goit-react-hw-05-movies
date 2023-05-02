import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '332ebb0c59493b862a9beffecc6f1777';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${KEY}`
  );
  console.log(response.data.results);
  return response.data;
};

export const fetchSearchMovie = async searchQuery => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}`
  );
  console.log(response.data);
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return response.data;
};

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
