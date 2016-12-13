import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//import store from './store';

// import AddPostContainer from './containers/AddPostContainer';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer} foo={'foo'}>
      {/*<Route path="/post-form" component={AddPostContainer}/>*/}
    </Route>
  </Router>,
  document.getElementById('app')
);
