import React, { Component } from 'react';
import './assets/css/App.css';

import PropType from 'prop-types';

//Components declaration
import Login from './Modulars/Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Login />
      </div>
    );
  }
}

export default App;
