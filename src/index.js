import './index.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { Home } from './views';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createReducers from './reducers';
import React from 'react';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
