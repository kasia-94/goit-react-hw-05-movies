import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieGallery } from 'components/MovieGallery';
import { fetchSearchMovie } from 'fetchMovies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const movieName = searchParams.get('name') ?? '';

  const onSubmit = value => {
    setSearchParams({ name: `${value}` });
  };

  useEffect(() => {
    const searchFilm = async movieName => {
      try {
        const response = await fetchSearchMovie(movieName);
        setMovies(response.results);
      } catch (error) {
        setError(error.message);
      }
    };

    if (movieName !== '') {
      searchFilm(movieName);
    }
  }, [movieName]);

  return (
    <>
      {error &&
        toast.error(`Sorry, but something happened wrong: ${error.message}`, {
          theme: 'colored',
        })}
      <SearchBar onSubmit={onSubmit} />
      <MovieGallery movies={movies} />
    </>
  );
};
