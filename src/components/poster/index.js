import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({ className, path }) => {
  return (
    <img
      className={className}
      src={`http://image.tmdb.org/t/p/original/${path}`} />
  );
};

Poster.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string.isRequired
};

export default Poster;
