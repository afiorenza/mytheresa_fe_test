import movie from '../movie';
import {
  FETCH_MOVIE_ONGOING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from 'actions/action-types';

describe('movie', () => {
  const state = {
    isFetching: false,
    hasFetched: false,
    movie: {},
    error: null
  };

  it('should return state by default', () => {
    expect(movie(state, {})).toEqual(state);
  });

  it('should handle when fetch started', () => {
    const fetchOngoingAction = {
      type: FETCH_MOVIE_ONGOING
    };

    expect(movie(state, fetchOngoingAction)).toEqual({
      ...state,
      isFetching: true
    });
  });

  it('should handle when data has arrived', () => {
    const fetchSuccessAction = {
      type: FETCH_MOVIE_SUCCESS,
      payload: {
        movie: {}
      }
    };

    expect(movie(state, fetchSuccessAction)).toEqual({
      ...state,
      isFetching: false,
      hasFetched: true,
      movie: fetchSuccessAction.payload.movie
    });
  });

  it('should handle when error happened', () => {
    const fetchFailureAction = {
      type: FETCH_MOVIE_FAILURE,
      payload: {
        error: new Error()
      }
    };

    expect(movie(state, fetchFailureAction)).toEqual({
      ...state,
      isFetching: false,
      hasFetched: true,
      error: fetchFailureAction.payload.error
    });
  });
});
