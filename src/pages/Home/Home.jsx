import { useEffect, useState } from 'react';
import { fetchTrending } from 'fetchMovies';
import { MovieGallery } from '../../components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    <>
      {error &&
        toast.error(`Sorry, but something happened wrong: ${error.message}`, {
          theme: 'colored',
        })}
      <MainTitle>Trending today</MainTitle>
      {<MovieGallery movies={movies} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
