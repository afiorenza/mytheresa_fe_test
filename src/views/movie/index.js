import './movie.scss';

import { AsyncComponent, Poster } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as movieActions from 'actions/movie';
import React, { Component } from 'react';

class Movie extends Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  renderMovieDetails = () => {
    const { movie } = this.props;

    return (
      <div className='movie'>
        <h1 className='movie--title'>
          {movie.original_title}
        </h1>

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
  dispatch => bindActionCreators(movieActions, dispatch)
)(Movie);
