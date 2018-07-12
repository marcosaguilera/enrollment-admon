import React, { Component } from 'react';
import './assets/css/App.css';

import PropType from 'prop-types';

//Components declaration
import Login from './Modulars/Login/Login'
import Content from '../Components/Global/Content'
import Footer from '../Components/Global/Footer'
//import Main from './Modulars/Main/Main'

class App extends Component {

  static propTypes = {
    children : PropType.object.isRequired
  }

  render() {

    const { children } = this.props;
    console.log("Here props: ");
    console.log(this.props)

    return (
      <div className="App">
          <Content body={children} />
          <Footer copyright="&copy;Colegio Rochester "/>
      </div>
    );
  }
}

export default App;
