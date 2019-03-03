import React from 'react';
import PropTypes from 'prop-types';

const AsyncComponent = ({ isFetching, hasFetched, error, renderView }) => {
  if (isFetching) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error fetching data.
      </div>
    );
  }

  if (!isFetching && hasFetched) {
    return renderView();
  }

  return null;
};

AsyncComponent.propTypes = {
  isFetching: PropTypes.bool,
  hasFetched: PropTypes.bool,
  error: PropTypes.object,
  renderView: PropTypes.func.isRequired
};

export default AsyncComponent;
