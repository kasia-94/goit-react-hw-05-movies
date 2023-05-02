import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  MovieImage,
  MovieItem,
  MovieLi,
  MovieList,
  Overlay,
  Overview,
  Title,
} from './MovieGallery.styled';

export const MovieGallery = ({ movies }) => {
  const location = useLocation();
  const renderGallery = () =>
    movies.map(({ id, poster_path, title, overview }) => (
      <MovieLi key={id}>
        {poster_path ? (
          <MovieItem
            to={`/movies/${id}`}
            state={{ from: `${location.pathname}${location.search}` }}
          >
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <Overlay>
              <Title>{title}</Title>
              <Overview>{overview}</Overview>
            </Overlay>
          </MovieItem>
        ) : (
          <MovieItem
            to={`/movies/${id}`}
            state={{ from: `${location.pathname}${location.search}` }}
          >
            <MovieImage
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              alt={title}
            />
            <p>{title}</p>
          </MovieItem>
        )}
      </MovieLi>
    ));

  return <MovieList>{movies ? renderGallery() : null}</MovieList>;
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
