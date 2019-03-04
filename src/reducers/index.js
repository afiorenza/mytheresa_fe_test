import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { TOP_RATED_MOVIES, POPULAR_MOVIES } from 'actions/action-types';
import cart from './cart';
import categoryFetchEnhacer from './category-fetch-enhacer';
import movie from './movie';

export default (history) => combineReducers({
  router: connectRouter(history),
  cart,
  movie,
  popularMovies: categoryFetchEnhacer(POPULAR_MOVIES),
  topRatedMovies: categoryFetchEnhacer(TOP_RATED_MOVIES)
});
