import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieCredits } from 'fetchMovies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieCredits(movieId);
        setActors(response.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      {error &&
        toast.error(`Sorry, but something happened wrong: ${error.message}`, {
          theme: 'colored',
        })}
      {!actors && 'No actors'}

      {actors && (
        <ul>
          {actors.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                    alt={name}
                  />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
