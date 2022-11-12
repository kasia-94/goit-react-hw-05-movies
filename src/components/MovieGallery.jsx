import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieGallery = ({ movies }) => {
  const renderGallery = () =>
    movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
      </li>
    ));

  return <ul>{movies ? renderGallery() : null}</ul>;
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
