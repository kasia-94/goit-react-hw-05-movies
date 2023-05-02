import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import { fetchSearchMovie } from 'fetchMovies';
import Notiflix from 'notiflix';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/App.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const movieName = searchParams.get('name') ?? '';

  const onSubmit = value => {
    setSearchParams({ name: `${value}` });
  };

  useEffect(() => {
    const searchFilm = async movieName => {
      setIsLoading(true);
      try {
        const response = await fetchSearchMovie(movieName);
        setMovies(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieName !== '') {
      searchFilm(movieName);
    }
  }, [movieName]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Container>
        {error &&
          Notiflix.Notify.failure(
            `Sorry, but something happened wrong: ${error.message}`,
            {
              theme: 'colored',
            }
          )}

        <MovieGallery movies={movies} />
        {isLoading && <Loader />}
      </Container>
    </>
  );
};

export default Movies;
