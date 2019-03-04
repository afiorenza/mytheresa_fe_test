import './home.scss';

import { Autocomplete, MoviesList } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCategory } from 'actions/category';
import { TOP_RATED_MOVIES, POPULAR_MOVIES } from 'actions/action-types';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Home extends Component {

  static propTypes = {
    topRatedMovies: PropTypes.object.isRequired,
    popularMovies: PropTypes.object.isRequired,
    fetchCategory: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { topRatedMovies, popularMovies } = this.props;

    this.props.fetchCategory(TOP_RATED_MOVIES, topRatedMovies.page);
    this.props.fetchCategory(POPULAR_MOVIES, popularMovies.page);
  }

  render() {
    return (
      <div className='home'>
        <Autocomplete />

        <div className='home--categories-list'>
          <MoviesList
            className='home--category-list'
            category={TOP_RATED_MOVIES}
            title='Top rated'
            {...this.props.topRatedMovies} />

          <MoviesList
            className='home--category-list'
            category={POPULAR_MOVIES}
            title='Popular'
            {...this.props.popularMovies} />
        </div>
      </div>
    );
  }
}

export default connect(
  ({ topRatedMovies, popularMovies }) => ({
    topRatedMovies,
    popularMovies
  }),
  dispatch => bindActionCreators({ fetchCategory }, dispatch)
)(Home);
