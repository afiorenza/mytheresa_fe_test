import './index.scss';

import 'babel-core/register';
import 'babel-polyfill';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { Home, Movie } from 'views';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createReducers from 'reducers';
import React from 'react';
import thunk from 'redux-thunk';

const history = createBrowserHistory();

const store = createStore(
  createReducers(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
);

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/movie/:id' component={Movie} />
          </Switch>
        </div>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
