import { fetchCategory } from '../category';
import { GET } from 'utils/fetch';

jest.mock('utils/fetch');

describe('category', () => {
  const dispatch = jest.fn();

  beforeEach(() => dispatch.mockClear());

  describe('fetchCategory', () => {
    GET.mockResolvedValue({
      page: 1,
      results: []
    });

    it('should dispatch on going before api call', async () => {
      await fetchCategory('test')(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_test_ONGOING'
      });
    });

    it('should dispatch success and data if api call is OK', async () => {
      await fetchCategory('test')(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_test_SUCCESS',
        payload: {
          page: 1,
          results: []
        }
      });
    });

    it('should dispatch failure and error if api call is not OK', async () => {
      GET.mockRejectedValue('MOCK_ERROR');

      await fetchCategory('test')(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_test_FAILURE',
        payload: {
          error: 'MOCK_ERROR'
        }
      });
    });
  });
});
