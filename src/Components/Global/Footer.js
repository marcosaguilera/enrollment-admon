//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import '../Global/assets/css/Footer.css';

class Footer extends Component {

  constructor(props){
    super(props);

    this.state = {
      year : 1999
    }
  }

  componentDidMount(){
    var now = new Date();
    //console.log(now);
    var yearNow = now.getFullYear();
    //console.log(yearNow);
    this.setState({
      year : yearNow
    }, () => {
      //console.log("year updated!");
    })
  }

  static propTypes = {
    copyright: PropTypes.string
  };

  render() {
    const { copyright = '&copy; React 2018' } = this.props
    return (
      <div className="bg-light text-dark">
        {/* BEGIN: Sticky Footer */}
            <div id="footer_container">
                <div id="footer">
                  <p id="pfooter">{copyright} {this.state.year} | <a href="https://rochester.edu.co/politica-proteccion-datos/" rel="noopener noreferrer" target="_blank">Protección de Datos</a> </p> 
                </div>
            </div>
        {/* END: Sticky Footer */}    
    </div>
    
    );
  }
}

export default Footer;
