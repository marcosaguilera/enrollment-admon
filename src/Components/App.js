import React, { Component } from 'react';
import './assets/css/App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

//import PropType from 'prop-types';

//Components declaration
//import Login from './Modulars/Login/Login'
import Main from './Modulars/Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Main />
      </div>
    );
  }
}

export default App;
