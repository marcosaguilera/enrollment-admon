// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { GoogleLogin } from 'react-google-login';
import config from '../../../Config/config.json';

import './Login.css';
import './signin.css';

class Login extends Component {
  constructor(props){
    super(props);

    this.nextPath = this.nextPath.bind(this);
  }
  
  nextPath = () => {
    console.log(this.props);
    this.props.history.push('/main');
  }

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="Login">

        <Container style={{ paddingTop: '10%' }}>
            <Row>
              <Col xs="3"></Col>
              <Col xs="6">
                
                <form className="form-signin">
                    <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                      </label>
                    </div>
                    <GoogleLogin className="btn btn-primary btn-block"
                      clientId={config.GOOGLE_CLIENT_ID}
                      buttonText="Google Account Sign-in"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                    />
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>

                    
                </form>

              </Col>
              <Col xs="3"></Col>
            </Row>
            
        </Container>
      </div>
    );
  }
}

export default Login; 