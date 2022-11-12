import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'fetchMovies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from '../../components/Loader/Loader';
import {
  MainContainer,
  Image,
  Addition,
  AdditionLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie';

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await fetchMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  function getRelizeYear(date) {
    const year = new Date(date);
    return year.getFullYear();
  }

  return (
    <>
      <BackLink to={backLinkHref} />
      {error &&
        toast.error(`Sorry, but something happened wrong: ${error.message}`, {
          theme: 'colored',
        })}
      {movie && (
        <div>
          <MainContainer>
            {movie.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
                alt={movie.title}
              />
            )}
            <div>
              <h1>
                {movie.title} ({getRelizeYear(movie.release_date)})
              </h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </MainContainer>
          <div>
            <h2>Additional information</h2>
            <Addition>
              <li>
                <AdditionLink to="cast">Cast</AdditionLink>
              </li>
              <li>
                <AdditionLink to="reviews">Reviews</AdditionLink>
              </li>
            </Addition>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};

export default MovieDetails;