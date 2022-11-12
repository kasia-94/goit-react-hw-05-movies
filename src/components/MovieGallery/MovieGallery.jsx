import PropTypes from 'prop-types';
import { MovieItem, MovieList } from './MovieGallery.styled';

export const MovieGallery = ({ movies }) => {
  const renderGallery = () =>
    movies.map(({ id, title }) => (
      <li key={id}>
        <MovieItem to={`/movies/${id}`}>{title}</MovieItem>
      </li>
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
