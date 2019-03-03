export const URL = 'https://api.themoviedb.org/3';
export const MOVIE_SERVICE_API_KEY = 'ecda70f35b0adf10b67e9bddc1029054';

export const parseQueryString = (parameters = {}) => {
  const searchParams = new URLSearchParams();

  Object.keys(parameters).forEach(key => searchParams.append(key, parameters[key]));

  searchParams.append('api_key', MOVIE_SERVICE_API_KEY);
  searchParams.append('language', 'en-US');

  return searchParams.toString();
};

export const GET = (service, query) => new Promise(async (resolve, reject) => {
  try {
    const response = await fetch(`${URL}${service}?${parseQueryString(query)}`);
    const data = await response.json();

    resolve(data);
  } catch (error) {
    reject(error);
  }
});
