import cart from './cart';
import movie from './movie';
import movies from './movies';

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  cart,
  movie,
  movies
});
