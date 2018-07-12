// Dependencies
import React, { Component } from 'react';

class Page404 extends Component {

  constructor(props){
    super(props);
    
    this.nextPath      = this.nextPath.bind(this);
  }

  nextPath = () => {
      console.log(this.props);
      this.props.history.push('/login');
  }

  render() {
    return (
      <div className="Page404">
        <div className="jumbotron jumbotron-fluid bg-white text-dark">
          <div>
            <center>
              <h1 className="display-2">¯\_(ツ)_/¯</h1>
              <h1>Page404</h1>
              <h3 className="display-5 py-3">Ups! something went wrong. Let me help you.</h3>
              <button type="button" 
                      className="btn btn-lg btn-outline-primary"
                      onClick={this.nextPath}>¡Yeah! Take out here.</button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;