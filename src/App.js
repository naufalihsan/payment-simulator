import React, { Component } from 'react';

import PersistentDrawerLeft from './components/Drawer/';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersistentDrawerLeft/>
      </div>
    );
  }
}

export default App;
