import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from 'fetchMovies';
import { MovieGallery } from '../../components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import 'react-toastify/dist/ReactToastify.css';
import { MainTitle } from './Home.styled';
import { Container } from 'components/App.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const renderFilm = async () => {
      setIsLoading(true);
      try {
        const response = await fetchTrending();
        setMovies(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    renderFilm();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container>
      {error &&
        Notiflix.Notify.failure(
          `Sorry, but something happened wrong: ${error.message}`,
          {
            theme: 'colored',
          }
        )}
      <MainTitle>Top 20</MainTitle>
      {
        <MovieGallery
          movies={movies}
          to={`/movies/${movies.id}`}
          state={{ from: location.pathname }}
        />
      }
      {isLoading && <Loader />}
    </Container>
  );
};

export default Home;
