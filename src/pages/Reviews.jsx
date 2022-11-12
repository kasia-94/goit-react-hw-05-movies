import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'fetchMovies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        setError(error.message);
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
