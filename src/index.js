import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from 'Root'
import App from 'App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
serviceWorker.unregister();
