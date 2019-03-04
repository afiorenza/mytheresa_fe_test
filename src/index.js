import './index.scss';

import 'babel-core/register';
import 'babel-polyfill';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { Header } from 'components';
import { Home, Movie } from 'views';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createReducers from 'reducers';
import React from 'react';
import thunk from 'redux-thunk';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const store = createStore(
  createReducers(history),
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
    : applyMiddleware(
      routerMiddleware(history),
      thunk
    )
);

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <div className='app'>
          <Header />

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/movie/:id' component={Movie} />
          </Switch>
        </div>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
