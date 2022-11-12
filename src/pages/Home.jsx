import { useEffect, useState } from 'react';
import { fetchTrending } from 'fetchMovies';
import { MovieGallery } from '../components/MovieGallery';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const renderFilm = async () => {
      try {
        const response = await fetchTrending();
        setMovies(response.results);
      } catch (error) {
        setError(error.message);
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
      <h1>Trending today</h1>
      {<MovieGallery movies={movies} />}
    </>
  );
};
