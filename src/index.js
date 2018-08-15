import 'sanitize.css/sanitize.css';
import './css/main.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Welcome from './Welcome';

// TODO: Render the `Vote` component instead of the `Welcome` one
import Vote from './Vote';

render(
  <Provider store={store}>
    <Welcome />
  </Provider>,
  document.getElementById('root')
);
