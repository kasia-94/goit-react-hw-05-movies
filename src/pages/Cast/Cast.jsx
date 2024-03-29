import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieCredits } from 'fetchMovies';
import Notiflix from 'notiflix';
import 'react-toastify/dist/ReactToastify.css';
import { CastList, Image, CastContainer, CastTitle } from './Cast.styled';
import { Container } from 'components/App.styled';

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
    <Container>
      <CastTitle>Cast</CastTitle>
      {error &&
        Notiflix.Notify.failure(
          `Sorry, but something happened wrong: ${error.message}`,
          {
            theme: 'colored',
          }
        )}
      {!actors && 'No actors'}

      {actors && (
        <CastList>
          {actors.map(({ id, name, profile_path, character }) => {
            return (
              <CastContainer key={id}>
                {profile_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                    alt={name}
                  />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </CastContainer>
            );
          })}
        </CastList>
      )}
      {isLoading && <Loader />}
    </Container>
  );
};

export default Cast;
