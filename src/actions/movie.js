import {
  FETCH_MOVIE_ONGOING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from 'actions/action-types';
import { GET } from 'utils/fetch';

export const fetchMovie = id => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIE_ONGOING
  });

  try {
    const response = await GET(`/movie/${id}`);

    dispatch({
      type: FETCH_MOVIE_SUCCESS,
      payload: {
        movie: response
      }
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIE_FAILURE,
      payload: {
        error
      }
    });
  }
};
