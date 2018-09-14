import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav/Nav'


import route from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {route}
      </div>
    );
  }
}

export default App;
