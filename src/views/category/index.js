import './category.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCategory } from 'actions/category';
import { Link } from 'react-router-dom';
import camelCase from 'lodash/camelCase';
import InfiniteScroll from 'react-infinite-scroller';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React from 'react';
import startCase from 'lodash/startCase';

export const Category = ({ fetchCategory, page, results, total_pages, isFetching, match }) => {

  const loadMore = async (page) => {
    if (!isFetching) {
      await fetchCategory(match.params.category, page);
    }
  };

  return (
    <div className='category'>
      <h2>{startCase(match.params.category)}</h2>

      <InfiniteScroll
        initialLoad={isEmpty(results)}
        pageStart={page}
        loadMore={loadMore}
        hasMore={total_pages ? page <= total_pages : true}
        loader={<div key={0}>Loading...</div>}
      >
        <ul className='category--list'>
          {
            results.map((item) =>
              <li
                className='category--list-item'
                key={item.id}>
                <Link to={`/movie/${item.id}`}>
                  {item.original_title}
                </Link>
              </li>
            )
          }
        </ul>
      </InfiniteScroll>
    </div>
  );
};

Category.propTypes = {
  fetchCategory: PropTypes.func.isRequired,
  page: PropTypes.number,
  results: PropTypes.array.isRequired,
  total_pages: PropTypes.number,
  isFetching: PropTypes.bool,
  match: PropTypes.object.isRequired
};

export default connect(
  (state, ownProps) => {
    return state[`${camelCase(ownProps.match.params.category)}Movies`];
  },
  dispatch => bindActionCreators({ fetchCategory }, dispatch)
)(Category);
