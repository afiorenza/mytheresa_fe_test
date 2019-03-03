import './movie.scss';

import { AsyncComponent, Poster } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovie } from 'actions/movie';
import { addToCart } from 'actions/cart';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Movie extends Component {

  static propTypes = {
    fetchMovie: PropTypes.func,
    match: {
      params: {
        id: PropTypes.string
      }
    },
    movie: PropTypes.object,
    addToCart: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  renderMovieDetails = () => {
    const { movie } = this.props;

    return (
      <div className='movie'>
        <h2 className='movie--title'>
          {movie.original_title}
        </h2>

        <button
          className='movie--add-item-button'
          onClick={this.props.addToCart.bind(this, movie)}>
          <i className='movie--add-item-icon fas fa-cart-plus' />
        </button>

        <h3 className='movie--tag-line'>
          {movie.tagline}
        </h3>

        <div className='movie--popularity'>
          {movie.overview}
        </div>

        <Poster
          className='movie--poster'
          path={movie.backdrop_path} />
      </div>
    );
  }

  render() {
    return (
      <AsyncComponent
        {...this.props}
        renderView={this.renderMovieDetails} />
    );
  }
}

export default connect(
  ({ movie }) => {
    return { ...movie };
  },
  dispatch => bindActionCreators({ addToCart, fetchMovie }, dispatch)
)(Movie);
