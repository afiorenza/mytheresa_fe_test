import React from 'react';
import PropTypes from 'prop-types';

const AsyncComponent = ({ isFetching, hasFetched, error, children }) => {
  if (isFetching) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (hasFetched && error) {
    return (
      <div>
        Error fetching data.
      </div>
    );
  }

  return children;
};

AsyncComponent.propTypes = {
  isFetching: PropTypes.bool,
  hasFetched: PropTypes.bool,
  error: PropTypes.object,
  children: PropTypes.node
};

export default AsyncComponent;
