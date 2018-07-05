// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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
    return (
      <div className="Login">
        <h1>This the login window</h1>
        <Container className="text-center">
            <Row>
              <Col>Main container</Col>
            </Row>
            <button type="button"
                    className="btn btn-primary" 
                    onClick={() => this.nextPath()}>Primary</button>
        </Container>
      </div>
    );
  }
}

export default Login; 