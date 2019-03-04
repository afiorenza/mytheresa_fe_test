import { GET } from 'utils/fetch';

export const fetchCategory = (category, page = 1) => async (dispatch) => {
  dispatch({
    type: `FETCH_${category}_ONGOING`
  });

  try {
    const response = await GET(`/movie/${category}`, {
      page
    });

    dispatch({
      type: `FETCH_${category}_SUCCESS`,
      payload: {
        ...response
      }
    });
  } catch (error) {
    dispatch({
      type: `FETCH_${category}_FAILURE`,
      payload: {
        error
      }
    });
  }
};
