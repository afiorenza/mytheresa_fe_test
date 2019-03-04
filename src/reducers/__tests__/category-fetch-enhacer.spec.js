import categoryFetchEnhacer from '../category-fetch-enhacer';

describe('categoryFetchEnhacer', () => {
  const state = {
    isFetching: false,
    hasFetched: false,
    error: null,
    results: [],
    page: 1,
    total_results: null,
    total_pages: null
  };
  const testCategoryFetch = categoryFetchEnhacer('TEST');

  it('should return state by default', () => {
    expect(testCategoryFetch(state, {})).toEqual(state);
  });

  it('should handle when fetch started', () => {
    const fetchOngoingAction = {
      type: 'FETCH_TEST_ONGOING'
    };

    expect(testCategoryFetch(state, fetchOngoingAction)).toEqual({
      ...state,
      isFetching: true
    });
  });

  it('should handle when data has arrived', () => {
    const fetchSuccessAction = {
      type: 'FETCH_TEST_SUCCESS',
      payload: {
        results: [{
          id: 1
        }],
        page: 1,
        total_results: 10000,
        total_pages: 100
      }
    };

    expect(testCategoryFetch(state, fetchSuccessAction)).toEqual({
      ...state,
      isFetching: false,
      hasFetched: true,
      results: fetchSuccessAction.payload.results,
      page: 1,
      total_results: 10000,
      total_pages: 100
    });
  });

  it('should handle when error happened', () => {
    const fetchFailureAction = {
      type: 'FETCH_TEST_FAILURE',
      payload: {
        error: new Error()
      }
    };

    expect(testCategoryFetch(state, fetchFailureAction)).toEqual({
      ...state,
      isFetching: false,
      hasFetched: true,
      error: fetchFailureAction.payload.error
    });
  });
});
