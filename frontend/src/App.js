import React, { Component } from 'react';

import './App.css';

import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-xs-10 col-md-8 mx-auto">
            <p>Hello World!</p>
            <AppRouter />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
