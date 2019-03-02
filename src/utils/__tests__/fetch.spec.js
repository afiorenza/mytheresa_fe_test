import {
  GET,
  MOVIE_SERVICE_API_KEY,
  parseQueryString,
  URL
} from '../fetch';

describe.only('fetch utils', () => {

  describe('parseQueryString', () => {

    it('should return string with the parameters parsed', () => {
      expect(parseQueryString()).toEqual('api_key=ecda70f35b0adf10b67e9bddc1029054');
      expect(parseQueryString({
        a: 1,
        b: 2,
        c: 3
      })).toEqual('a=1&b=2&c=3&api_key=ecda70f35b0adf10b67e9bddc1029054');
    });
  });

  describe('GET', () => {
    beforeEach(() => {
      fetch.resetMocks()
    });

    it('should call with correct parameters', () => {
      GET('/test', {
        a: 1,
        b: 2
      });

      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch).toBeCalledWith(`${URL}/test?a=1&b=2&api_key=${MOVIE_SERVICE_API_KEY}`);
    });
  });
});
