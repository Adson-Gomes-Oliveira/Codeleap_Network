import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../redux/reducers';
import { Provider } from 'react-redux';

const renderWithRouterAndRedux = (component,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({initialEntries}),
  } = {}) => ({
    ...render(
      <Router location={history.location} navigator={ history }>
        <Provider store={ store }>
          {component}
        </Provider>
      </Router>
    ),
  })

export default renderWithRouterAndRedux;
