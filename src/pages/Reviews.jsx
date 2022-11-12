import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { fetchMovieReviews } from 'fetchMovies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {isLoading && <Loader />}
      {error &&
        toast.error(`Sorry, but something happened wrong: ${error.message}`, {
          theme: 'colored',
        })}

      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                {author ? (
                  <>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                  </>
                ) : (
                  "We don't hane any reviews for this movie"
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
