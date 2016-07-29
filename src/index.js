import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Hello} from './app/hello.js';
import {Dataset} from './app/dataset/dataset';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
    <Route path="/dataset" component={Dataset}/>
  </Router>,
  document.getElementById('root')
);
