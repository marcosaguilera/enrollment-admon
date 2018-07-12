// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { GoogleLogin } from 'react-google-login';
import config from '../../../Config/config.json';
import PropTypes from 'prop-types';
import axios from 'axios';

// Assets
import './Login.css';
import './signin.css';

// Components
import Footer from '../../Global/Footer'

class Login extends Component {

  constructor(props){
    super(props);
    
    this.nextPath      = this.nextPath.bind(this);
    this.validateAuth  = this.validateAuth.bind(this);
    //this.saveUser1time = this.saveUser1time.bind(this);

    this.state = {
      isAuthorize: false,
      isRochesterUser: false,
      year : 1999,
      email_loggedin: ''
    }
  }

  componentDidMount(){
    var now = new Date();
    var yearNow = now.getFullYear();

    this.setState({
      isAuthorize: false,
      isRochesterUser: false,
      year : yearNow
    }, () => {
      console.log("logged-in status: " + this.state.isAuthorize + " && " + this.state.isRochesterUser);
    })
  }
  
  nextPath = (data) => {
    if(this.state.isAuthorize === true && this.state.isRochesterUser === true){
      console.log(this.props);
      this.props.history.push('/main', data);
    }else{
      // nothing happens here
    }
  }

  validateAuth = (email, data) => {
    let axiosConfig = {
      headers: {
          'X-Parse-Application-Id': 'U8jcs4wAuoOvBeCUCy4tAQTApcfUjiGmso98wM9h',
          'X-Parse-Master-Key': 'vN7hMK7QknCPf2xeazTaILtaskHFAveqnh6NDwi6',
          'Content-Type': 'application/json;charset=UTF-8'
      }
    };
        
    axios.get('https://parseapi.back4app.com/classes/Access?where={"email":"' + email + '"}', axiosConfig)
      .then(res => {
        console.log("Full object:");
        console.log(res.data);
        console.log("Node object:");
        console.log(res.data.results);
        console.log("Item object:");
        let item = res.data.results;
        
        // jsonLenght gets the number of objects in the response
        let jsonLenght = Object.keys(res.data.results).length;
        console.log("Response size:" + jsonLenght);

        if(jsonLenght > 0){

        }else{

        }

    })
  }

  render() {

    const responseGoogle = (response) => {
      console.log(response);
      console.log(response.El);
      console.log(response.profileObj);
      console.log(response.profileObj.email);

      var email_user = response.profileObj.email; 
      var familyName = response.profileObj.familyName; 
      var givenName  = response.profileObj.givenName; 
      var googleId   = response.profileObj.googleId; 
      var imageUrl   = response.profileObj.imageUrl; 
      var name       = response.profileObj.name;

      var data       = {};
      data.name      = response.profileObj.givenName;
      data.lastName  = response.profileObj.familyName;
      data.lastName  = response.profileObj.familyName;
      data.fullName  = response.profileObj.name;
      data.email     = response.profileObj.email;
      data.googleId  = response.profileObj.googleId;
      data.imageUrl  = response.profileObj.imageUrl;

      if(email_user.includes("@rochester.edu.co")){
        console.log("Ok. Rochester account :)");
        //window.alert("ok");
        this.setState({
          isAuthorize: true,
          isRochesterUser: true,
          email_loggedin: email_user
        }, () => {
          this.nextPath(data);
          //this.validateAuth(email_user, data);
        })
      }else{
        window.alert("Nope. Isn't a Rochester account :(");
      }
    }

    return (
      <div className="Login">

        <Container style={{ paddingTop: '10%' }}>
            <Row>
              <Col xs="3"></Col>
              <Col xs="6">
                <row>
                    <div className="col">
                        <img id="img_rounded" 
                              className="rounded-circle" 
                              src="https://i.imgur.com/ao4s7Md.png" 
                              alt={'Colegio Rochester Logo'} width="180" height="210" />
                    </div>
                </row>
                <p className="text-muted">&copy;Colegio Rochester {this.state.year}</p>
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
                    <GoogleLogin 
                      className="btn btn-primary btn-block"
                      clientId={config.GOOGLE_CLIENT_ID}
                      buttonText="Google Account Sign-in"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                    />
                    
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