import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Provider from 'react-redux';
import store from './react/store'
import AppContainer from './containers/AppContainer';
import PostList from './components/PostList';

// import AddPostContainer from './containers/AddPostContainer';

const onPostListEnter = function() {
  console.log('running on enter')
  store.dispatch(getAllPosts)
}


ReactDOM.render(
  <Provider store={store} >
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
    <IndexRedirect to="/posts" />
      <Route path="/posts" component={PostList} onEnter={onPostListEnter} />
      {/*<Route path="/post-form" component={AddPostContainer}/>*/}
    </Route>
  </Router>
  </Provider >,
  document.getElementById('app')
);
