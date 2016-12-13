import React, { Component } from 'react';

import Navbar from '../components/Navbar';

export default class AppContainer extends Component {
  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Navbar />
        </div>
        <div className="col-xs-10">
          {
            props.children && React.cloneElement(props.children, props)
          }
        </div>
      </div>
    );
  }
}
