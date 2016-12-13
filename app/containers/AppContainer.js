import React, { Component } from 'react';
import PostList from '../components/PostList'; 
import Navbar from '../components/Navbar';

export default class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = Object.assign;
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Navbar />
        </div>
        <div className="col-xs-10">
          <PostList allPosts={this.props}/>
        </div>
      </div>
    );
  }
}
