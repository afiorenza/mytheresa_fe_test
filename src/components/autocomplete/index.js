import './autocomplete.scss';

import React, { Component } from 'react';
import { GET } from 'utils/fetch';
import { debounce } from 'lodash';
import { withRouter } from 'react-router-dom';

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocus: false,
      inputValue: '',
      moviesResult: []
    };

    this.debouncedInputChange = debounce(this.searchMovies, 500);
  }

  searchMovies = async (value) => {
    if (value === '') {
      this.setState({
        moviesResult: []
      })
    } else {
      const data = await GET('/3/search/movie', {
        query: value
      });

      this.setState({
        moviesResult: data.results
      });
    }
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputValue: value
    }, () => this.debouncedInputChange(value));
  }

  handleInputFocus = () => {
    this.setState({
      isFocus: true
    });
  }

  handleInputBlur = () => {
    this.setState({
      isFocus: false
    });
  }

  handleItemMouseDown = id => {
    this.props.history.push(`/movie/${id}`);
  }

  render() {
    const { isFocus, moviesResult } = this.state;

    return (
      <div
        className='autocomplete'>
        <input
          className='autocomplete--input'
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          onFocus={this.handleInputFocus}
          placeholder='Search movies...'
          type='text'
          value={this.state.inputValue} />

        {
          isFocus && moviesResult.length > 0
            ? <div
              className='autocomplete--suggestions-pop-up'>
              <ul className='autocomplete--suggestions-list'>
                {
                  moviesResult.map(movie =>
                    <li
                      className='autocomplete--suggestions-list-item'
                      key={movie.id}
                      onMouseDown={this.handleItemMouseDown.bind(this, movie.id)}>
                      {
                        movie.poster_path
                          ? <img
                            className='autocomplete--movie-poster'
                            src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                          : null
                      }

                      <div className='autocomplete--movie-data'>
                        <span>{movie.title}</span>

                        <div className='autocomplete--movie-overview'>
                          {movie.overview}
                        </div>
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
            : null
        }
      </div>
    );
  }
}

export default withRouter(Autocomplete);
