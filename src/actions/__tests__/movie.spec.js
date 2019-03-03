import { fetchMovie } from '../movie';
import { GET } from 'utils/fetch';

jest.mock('utils/fetch');

describe('movie', () => {
  const dispatch = jest.fn();

  describe('fetchMovie', () => {
    GET.mockResolvedValue({
      id: 1234
    });

    beforeEach(() => dispatch.mockClear());

    it('should call fetch on going action before api call', async () => {
      await fetchMovie(1234)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_MOVIE_ONGOING'
      });
    });

    it('should dispatch success and data if api call is OK', async () => {
      await fetchMovie(1234)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_MOVIE_SUCCESS',
        payload: {
          movie: {
            id: 1234
          }
        }
      });
    });

    it('should dispatch failure and error if api call is not OK', async () => {
      GET.mockRejectedValue('MOCK_ERROR');

      await fetchMovie(1234)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_MOVIE_FAILURE',
        payload: {
          error: 'MOCK_ERROR'
        }
      });
    });
  });
});
