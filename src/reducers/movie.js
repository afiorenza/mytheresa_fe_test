import {
  FETCH_MOVIE_ONGOING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from 'actions/action-types';

const initialState = {
 isFetching: false,
 hasFetched: false,
 movie: {},
 error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_ONGOING:
      return {
        ...state,
        isFetching: true,
        hasFetched: false,
        movie: {},
        error: null
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        movie: payload.movie,
        error: null
      };

    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        error: payload.error
      };

    default:
      return state;
  }
}
