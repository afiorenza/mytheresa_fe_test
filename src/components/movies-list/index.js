import './movies-list.scss';

import { AsyncComponent } from '../';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const MoviesList = props => {

  const renderList = () => {
    return (
      <div className='movies-list'>
        <Link
          to={`/category/${props.category}`}>
          <h3
            className='movies-list--title'>
            {props.title}
          </h3>
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
    <div className={props.className}>
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
