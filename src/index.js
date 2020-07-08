import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Root from 'Root'
import App from 'App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App}></Route>
    </BrowserRouter>
    
  </Root>,
  document.getElementById('root')
);
serviceWorker.unregister();
