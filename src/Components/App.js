import React, { Component } from 'react';
import './assets/css/App.css';

import PropType from 'prop-types';

//Components declaration
import Login from './Modulars/Login/Login'
//import Main from './Modulars/Main/Main'

class App extends Component {
  static propTypes = {
    children : PropType.object.isRequired
  }

  render() {

    const { children } = this.props;

    return (
      <div className="App">
          <Login body={children} />
      </div>
    );
  }
}

export default App;
