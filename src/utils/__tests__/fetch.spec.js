import {
  GET,
  MOVIE_SERVICE_API_KEY,
  parseQueryString,
  URL
} from '../fetch';

describe('fetch utils', () => {

  describe('parseQueryString', () => {

    it('should return string with the parameters parsed', () => {
      expect(parseQueryString()).toEqual('api_key=ecda70f35b0adf10b67e9bddc1029054&language=en-US');
      expect(parseQueryString({
        a: 1,
        b: 2,
        c: 3
      })).toEqual('a=1&b=2&c=3&api_key=ecda70f35b0adf10b67e9bddc1029054&language=en-US');
    });
  });

  describe('GET', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should call with correct parameters', async () => {
      const response = { id: 1234 };

      fetch.mockResponseOnce(JSON.stringify(response));

      const data = await GET('/test', {
        a: 1,
        b: 2
      });

      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch).toHaveBeenCalledWith(`${URL}/test?a=1&b=2&api_key=${MOVIE_SERVICE_API_KEY}&language=en-US`);
      expect(data).toEqual(response);
    });
  });
});
