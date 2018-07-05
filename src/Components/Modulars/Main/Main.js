// Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// Import assets
import './style5.css';
import './Main.css';

class Main extends Component {

  constructor(props){
    super(props);

    this.handleSearch       = this.handleSearch.bind(this);
    this.handleOnChange     = this.handleOnChange.bind(this);
    this.handleUpdateData   = this.handleUpdateData.bind(this);
    this.handlePutParseData = this.handlePutParseData.bind(this);
    this.toggle             = this.toggle.bind(this);

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
      modal_objectId              : '',
      modal_codigo                : '',
      modal_nombres               : '',
      modal_apellidos             : '',
      modal_tarifa_plena          : 0,
      modal_bibliobanco           : 0,
      modal_tarifa_reducida_7_5   : 0,
      modal_tarifa_reducida_15    : 0,
      modal_descuento_exalumno    : 0,
      modal_descuento_2do_hno     : 0,
      modal_descuento_3er_hno     : 0,
      modal_descuento_4to_hno     : 0,
      modal_empleado              : 0,
      modal_santa_barbara         : 0,
      modal_convenio              : 0,
      modal_otros                 : 0,
      modal_grado                 : ''

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
            console.log("Value " + this.state.search_code);
        })     
    }
    if(e.target.id === 'input-matricula-plena'){
        this.setState({
            modal_tarifa_plena: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_tarifa_plena);
        })     
    }
    if(e.target.id === 'input-bibliobanco'){
        this.setState({
            modal_bibliobanco: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_bibliobanco);
        })     
    }
    if(e.target.id === 'input-matricula-75'){
        this.setState({
            modal_tarifa_reducida_7_5: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_tarifa_reducida_7_5);
        })     
    }
    if(e.target.id === 'input-matricula-15'){
        this.setState({
            modal_tarifa_reducida_15: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_tarifa_reducida_15);
        })     
    }
    if(e.target.id === 'input-ex-alumno'){
        this.setState({
            modal_descuento_exalumno: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_descuento_exalumno);
        })     
    }
    if(e.target.id === 'input-santabarbara'){
        this.setState({
            modal_santa_barbara: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_santa_barbara);
        })     
    }
    if(e.target.id === 'input-jardin-convenio'){
        this.setState({
            modal_convenio: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_convenio);
        })     
    }
    if(e.target.id === 'input-2do-hijo'){
        this.setState({
            modal_descuento_2do_hno: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_descuento_2do_hno);
        })     
    }
    if(e.target.id === 'input-3er-hijo'){
        this.setState({
            modal_descuento_3er_hno: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_descuento_3er_hno);
        })     
    }
    if(e.target.id === 'input-4to-hijo'){
        this.setState({
            modal_descuento_4to_hno: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_descuento_4to_hno);
        })     
    }
    if(e.target.id === 'input-empleado'){
        this.setState({
            modal_empleado: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_empleado);
        })     
    }
    if(e.target.id === 'input-otro'){
        this.setState({
            modal_otros: Number(e.target.value)
        }, () => {
            console.log("Value " + this.state.modal_otros);
        })     
    }

  }

  handleUpdateData = () => {
        //var data                              = new Object();
        var data                              = {};
        data.objectId                         = this.state.modal_objectId;
        data.Codigo                           = this.state.modal_codigo;
        data.Apellidos                        = this.state.modal_apellidos;
        data.Nombres                          = this.state.modal_nombres;
        data.Derecho_Matricula_Plena          = this.state.modal_tarifa_plena;
        data.Bibliobanco                      = this.state.modal_bibliobanco;
        data.Derecho_por_pago_anualidades_7_5 = this.state.modal_tarifa_reducida_7_5;
        data.Derecho_por_pago_anualidades_15  = this.state.modal_tarifa_reducida_15;
        data.Empleado                         = this.state.modal_empleado;
        data.Grado                            = this.state.modal_grado;
        data.Hijo_2                           = this.state.modal_descuento_2do_hno;
        data.Hijo_3                           = this.state.modal_descuento_3er_hno;
        data.Hijo_4                           = this.state.modal_descuento_4to_hno;
        data.Hijo_Exalumno                    = this.state.modal_descuento_exalumno;
        data.Jardin_Convenio                  = this.state.modal_convenio;
        data.SantaBarbara                     = this.state.modal_santa_barbara;
        data.Otros                            = this.state.modal_otros;
        console.log(data);
        
        var retVal = window.confirm("¿Estas seguro de realizar esta acción?");
        if( retVal === true ){
            this.handlePutParseData(data);
            this.setState({
                modal : false
            }, () =>{
                
            })
            this.handleSearch()
            return true;
        }
        else{
            return false;
        }
  }

  handlePutParseData = (data) => {
    let axiosConfig = {
        headers: {
            'X-Parse-Application-Id': 'U8jcs4wAuoOvBeCUCy4tAQTApcfUjiGmso98wM9h',
            'X-Parse-Master-Key': 'vN7hMK7QknCPf2xeazTaILtaskHFAveqnh6NDwi6',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };

    console.log('https://parseapi.back4app.com/classes/EnrollmentData/' + this.state.modal_objectId);

    axios.put('https://parseapi.back4app.com/classes/EnrollmentData/' + this.state.modal_objectId , data, axiosConfig)
         .then(res => {   
             console.log(res);      
         })
         .catch(error => {
            console.log(error);
    });

  }

  edit = (data) => { 
        // Do whatever you want
        console.log(data);
        console.log(data.objectId);

        this.setState({
            modal_objectId             :  data.objectId,
            modal_codigo               :  data.Codigo,
            modal_nombres              :  data.Nombres,
            modal_apellidos            :  data.Apellidos,
            modal_tarifa_plena         :  data.Derecho_Matricula_Plena,
            modal_bibliobanco          :  data.Bibliobanco,
            modal_tarifa_reducida_7_5  :  data.Derecho_por_pago_anualidades_7_5,
            modal_tarifa_reducida_15   :  data.Derecho_por_pago_anualidades_15,
            modal_descuento_exalumno   :  data.Hijo_Exalumno,
            modal_descuento_2do_hno    :  data.Hijo_2,
            modal_descuento_3er_hno    :  data.Hijo_3,
            modal_descuento_4to_hno    :  data.Hijo_4,
            modal_convenio             :  data.Jardin_Convenio,
            modal_empleado             :  data.Empleado,
            modal_santa_barbara        :  data.SantaBarbara,
            modal_otros                :  data.Otros,
            modal_grado                :  data.Grado

        } , () =>  {
            this.toggle();
        })
        
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
                                <a href={null}>Home 1</a>
                            </li>
                            <li>
                                <a href={null}>Home 2</a>
                            </li>
                            <li>
                                <a href={null}>Home 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href={null}>About</a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href={null}>Page 1</a>
                            </li>
                            <li>
                                <a href={null}>Page 2</a>
                            </li>
                            <li>
                                <a href={null}>Page 3</a>
                            </li>
                        </ul>
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
                            <table className="table table-hover ">
                                <thead>
                                <tr>
                                    <th scope="col" className="border-left border-right"><center>&nbsp;</center></th>
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
                                                <td className="border"><center>
                                                    <button className="btn btn-warning btn-sm" onClick={() => this.edit(item)} > 
                                                        <div>
                                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                        </div>
                                                    </button>
                                                    </center>
                                                </td>
                                                <td><center>{item.Codigo}</center></td>
                                                <td>{item.Nombres}</td>
                                                <td>{item.Apellidos}</td>
                                                <td>{item.Grado}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table> 

                            <Modal id="modalWindow" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}></ModalHeader>
                                <ModalBody>
                                    <main className="shadow-sm p-3 mb-2 bg-white rounded">
                                        <div className="row">
                                            <div className="col-12"><h3>{this.state.modal_nombres} {this.state.modal_apellidos}</h3></div>
                                        </div>
                                        <div className="row">
                                            <div className="col"><h4>Código: {this.state.modal_codigo}</h4></div>
                                            <div className="col"><h4>{this.state.modal_grado}</h4></div>
                                            <div className="col"></div>
                                            <div className="col"></div>
                                        </div>
                                    </main>
                                    <form className="py-3">
                                        <div className="row">
                                            <div className="col">
                                                <h6>Conceptos</h6>
                                                <hr/>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Derecho matrícula plena</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_tarifa_plena} className="form-control form-control-sm" id="input-matricula-plena" placeholder="$ 0.0" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Bibliobanco</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_bibliobanco} className="form-control form-control-sm" id="input-bibliobanco" placeholder="$ 0.0" />
                                                    </div>     
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Derecho por pago anualidades 7.5%</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_tarifa_reducida_7_5} className="form-control form-control-sm" id="input-matricula-75" placeholder="$ 0.0" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Derecho por pago anualidades 15%</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_tarifa_reducida_15} className="form-control form-control-sm" id="input-matricula-15" placeholder="$ 0.0" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <h6>Descuentos</h6>
                                                <hr/>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Hijo de ex-alumno</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_descuento_exalumno} className="form-control form-control-sm" id="input-ex-alumno" placeholder="$ 0.0" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Ex alumno Santa Barbara Preschool</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_santa_barbara} className="form-control form-control-sm" id="input-santabarbara" placeholder="$ 0.0" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Ex alumno Jardín Convenio</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_convenio} className="form-control form-control-sm" id="input-jardin-convenio" placeholder="$ 0.0" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Empleado</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_empleado} className="form-control form-control-sm" id="input-empleado" placeholder="$ 0.0" />
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="col">
                                                <h6>&nbsp;</h6>
                                                <hr/>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">2do Hijo</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_descuento_2do_hno} className="form-control form-control-sm" id="input-2do-hijo" placeholder="$ 0.0" />
                                                    </div> 
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">3er Hijo</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_descuento_3er_hno} className="form-control form-control-sm" id="input-3er-hijo" placeholder="$ 0.0" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">4to Hijo</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_descuento_4to_hno} className="form-control form-control-sm" id="input-4to-hijo" placeholder="$ 0.0" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Otro</label>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" onChange={this.handleOnChange} value={this.state.modal_otros} className="form-control form-control-sm" id="input-otro" placeholder="$ 0.0" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.handleUpdateData}>Actualizar</Button>
                                    <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
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