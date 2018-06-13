// Dependencies
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>This the login window</h1>
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default Login; 