import './movies-list.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { AsyncComponent } from '../';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const MoviesList = props => {

  const renderList = () => {
    return (
      <div>
        <Link to={`/category/${props.category}`}>
          <h3>{props.title}</h3>
        </Link>

        <ul className='movies-list--list'>
          {
            props.results
              .slice(0, 10)
              .map(item =>
                <li
                  className='movies-list--list-item'
                  key={item.id}>
                  <Link to={`/movie/${item.id}`}>
                    {item.original_title}
                  </Link>
                </li>
              )
          }
        </ul>
      </div>
    );
  };

  return (
    <div className={classNames('movies-list', props.className)}>
      <AsyncComponent
        {...props}
        renderView={renderList} />
    </div>
  );
};

MoviesList.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  results: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default MoviesList;
