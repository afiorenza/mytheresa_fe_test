const initialState = {
  isFetching: false,
  hasFetched: false,
  error: null,
  results: [],
  page: 1,
  total_results: null,
  total_pages: null
};

export default category => (state = initialState, { type, payload }) => {
  switch (type) {
  case `FETCH_${category}_ONGOING`:
    return {
      ...state,
      isFetching: true,
      hasFetched: false,
      error: null
    };

  case `FETCH_${category}_SUCCESS`:
    return {
      ...state,
      isFetching: false,
      hasFetched: true,
      results: [...state.results, ...payload.results],
      page: payload.page,
      total_results: payload.total_results,
      total_pages: payload.total_pages,
      error: null
    };

  case `FETCH_${category}_FAILURE`:
    return {
      ...state,
      isFetching: false,
      hasFetched: true,
      error: payload.error
    };

  default:
    return state;
  }
};
