// Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

// Import assets
import './style5.css';
import './Main.css';

class Main extends Component {

  constructor(props){
    super(props);

    this.handleSearch    = this.handleSearch.bind(this);
    this.handleOnChange  = this.handleOnChange.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      objectId              : '',
      createdAt             : '',
      updatedAt             : '',
      codigo                : '',
      nombres               : '',
      apellidos             : '',
      tarifa_plena          : 0,
      bibliobanco           : 0,
      tarifa_reducida_7_5   : 0,
      tarifa_reducida_15    : 0,
      descuento_exalumno    : 0,
      descuento_2do_hno     : 0,
      descuento_3er_hno     : 0,
      descuento_4to_hno     : 0,
      empleado              : 0,
      santa_barbara         : 0,
      convenio              : 0,
      otros                 : 0,
      grado                 : '',
      student_code          : '',
      data                  : [],
      columns               : [],

      // State
      search_code           : '',

      // UI states
      modal                 : false,

      // Modal States
      
    };
  }

  componentDidMount(){

    let axiosConfig = {
      headers: {
          'X-Parse-Application-Id': 'U8jcs4wAuoOvBeCUCy4tAQTApcfUjiGmso98wM9h',
          'X-Parse-Master-Key': 'vN7hMK7QknCPf2xeazTaILtaskHFAveqnh6NDwi6',
          'Content-Type': 'application/json;charset=UTF-8'
      }
    };
        
    axios.get('https://parseapi.back4app.com/classes/EnrollmentData?limit=20', axiosConfig)
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
      
        this.setState({
           data: item
        }, () => {
          console.log(item);
          console.log(this.state.data);
        })
    })

  }

  handleSearch(){

    if(this.state.search_code.length > 0){
        let axiosConfig = {
            headers: {
                'X-Parse-Application-Id': 'U8jcs4wAuoOvBeCUCy4tAQTApcfUjiGmso98wM9h',
                'X-Parse-Master-Key': 'vN7hMK7QknCPf2xeazTaILtaskHFAveqnh6NDwi6',
                'Content-Type': 'application/json;charset=UTF-8'
            }
          };
              
          axios.get('https://parseapi.back4app.com/classes/EnrollmentData?limit=20&where={"Codigo":"' + this.state.search_code + '"}', axiosConfig)
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
            
              this.setState({
                 data: item
              }, () => {
                console.log(item);
                console.log(this.state.data);
              })
          })
    }else{
        let axiosConfig = {
            headers: {
                'X-Parse-Application-Id': 'U8jcs4wAuoOvBeCUCy4tAQTApcfUjiGmso98wM9h',
                'X-Parse-Master-Key': 'vN7hMK7QknCPf2xeazTaILtaskHFAveqnh6NDwi6',
                'Content-Type': 'application/json;charset=UTF-8'
            }
          };
              
          axios.get('https://parseapi.back4app.com/classes/EnrollmentData?limit=20', axiosConfig)
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
            
              this.setState({
                 data: item
              }, () => {
                console.log(item);
                console.log(this.state.data);
              })
          })
    }

    
  }

  handleOnChange(e){
    if(e.target.id === 'student_code_search'){
        this.setState({
            search_code: e.target.value
        }, () => {
            console.log("Code for search " + this.state.search_code);
        })     
     }

  }

  edit = (data) => { 
        // Do whatever you want
        console.log(data);
        console.log(data.objectId);
        this.toggle();
        
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
  
        <div className="wrapper">
            {/* Sidebar Holder */}
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Page Content Holder */}
            <div id="content">
                <main role="main">

                        <div className="my-3">
                            <nav className="navbar navbar-dark shadow-sm bg-light rounded border ">
                                <h4><div style={{ color: 'gray' }}>Estudiantes</div></h4>
                                <form className="form-inline">
                                    <input 
                                        id="student_code_search"
                                        onChange={this.handleOnChange} 
                                        className="form-control mr-sm-2" 
                                        type="text"
                                        maxLength="5"
                                        placeholder="Código estudiante" 
                                        aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="search" onClick={this.handleSearch}>Buscar</button>
                                </form>
                            </nav>
                            <table className="table table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col"><center>Edit</center></th>
                                    <th scope="col"><center>#</center></th>
                                    <th scope="col"><center>Código</center></th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Grado</th>
                                </tr>
                                </thead>
                                <tbody id="cursorPointer">
                                    { this.state.data.map( (item, key) => {
                                        return (
                                            <tr key = {key} >
                                                <td><center><button onClick={() => this.edit(item)} > Edit </button></center></td>
                                                <td><center>{item.objectId}</center></td>
                                                <td><center>{item.Codigo}</center></td>
                                                <td>{item.Nombres}</td>
                                                <td>{item.Apellidos}</td>
                                                <td>{item.Grado}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table> 

                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{width:'800px'}}>
                                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    <form>
                                        <div class="row">
                                            <div class="col">
                                                <h5>Conceptos</h5>
                                                <hr/>
                                                <div class="form-group">
                                                    <label for="inputEmail4">Derecho matrícula plena</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="$ 0.0" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4">Bibliobanco</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="$ 0.0" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4">Derecho por pago anualidades 7.5%</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="$ 0.0" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputEmail4">Derecho por pago anualidades 15%</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="$ 0.0" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Last name" />
                                            </div>
                                        </div>
                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>

                        </div>
                </main>
            </div>
        </div>
    );
  }
}

export default Main;