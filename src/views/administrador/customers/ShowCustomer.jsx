import React from "react";
import {
   Button,
   Card,
   CardHeader,
   CardBody,
   CardTitle,
   FormGroup,
   Form,
   Input,
   Row,
   Col,
} from "reactstrap";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startGetCustomer } from "../../../redux-config/actions/actions";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";

// Importando Imagenes
import img123 from "../../../assets/img/faces/ayo-ogunseinde-1.jpg";

class ShowCustomer extends React.Component {
   state = {};
   handleListCustomers = () => {
      this.props.history.push("/admin/customers");
   };
   handleChanges = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   handleSubmit = (e) => {
      e.preventDefault();
   };
   componentDidMount = () => {
      let id_customer = this.props.match.params.idCustomer;
      this.props.startGetCustomer(id_customer);
   };
   render() {
      let { customer } = this.props;

      return (
         <>
            <div className="content">
               <Row className="justify-content-center">
                  <Col md="10">
                     <Card className="card-user">
                        <CardHeader>
                           <CardTitle tag="h5">
                              Informacion del Cliente
                           </CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Form onSubmit={this.handleSubmit}>
                              <Row>
                                 <Col md="3">
                                    <div align="center">
                                       <img
                                          alt="..."
                                          height="150px"
                                          align="center"
                                          src={img123}
                                       />
                                    </div>
                                 </Col>
                                 <Col md="9">
                                    <Row>
                                       <Col md="12">
                                          <FormGroup>
                                             <label>Nombre</label>
                                             <Input
                                                placeholder="nombre producto"
                                                type="text"
                                                name="name"
                                                value={
                                                   customer.info
                                                      ? customer.info.name
                                                      : "Cargando"
                                                }
                                                readOnly
                                             />
                                          </FormGroup>
                                       </Col>
                                       <Col md="6">
                                          <FormGroup>
                                             <label>Apellidos</label>
                                             <Input
                                                placeholder="precio producto"
                                                type="number"
                                                name="lastname"
                                                value={
                                                   customer.info
                                                      ? customer.info.lastname
                                                      : "Cargando"
                                                }
                                                readOnly
                                             />
                                          </FormGroup>
                                       </Col>
                                       <Col md="6">
                                          <FormGroup>
                                             <label>Telefono</label>
                                             <Input
                                                placeholder="precio producto"
                                                type="number"
                                                name="telefono"
                                                value={
                                                   customer.info
                                                      ? customer.info.telefono
                                                      : "Cargando"
                                                }
                                                readOnly
                                             />
                                          </FormGroup>
                                       </Col>
                                    </Row>
                                 </Col>
                              </Row>
                              <Row className="mt-2">
                                 <Col md="12">
                                    <FormGroup>
                                       <label>Dni</label>
                                       <Input
                                          type="textarea"
                                          placeholder="Ingredientes del platillo"
                                          value={
                                             customer.info
                                                ? customer.info.DNI
                                                : "Cargando"
                                          }
                                          readOnly
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row>

                              <Row className="justify-content-between">
                                 <Col xs="6" md="3">
                                    <Button
                                       className="btn-round"
                                       color="danger"
                                       onClick={this.handleListCustomers}
                                       block
                                    >
                                       <FontAwesomeIcon icon={faArrowLeft} />{" "}
                                       Volver
                                    </Button>
                                 </Col>
                                 <Col xs="6" md="3">
                                    {/* <Button
                                       type="submit"
                                       className="btn-round"
                                       color="success"
                                       block
                                    >
                                       <FontAwesomeIcon icon={faSave} /> Guardar
                                    </Button> */}
                                 </Col>
                              </Row>
                           </Form>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </div>
         </>
      );
   }
}

// Validacion de Props
ShowCustomer.propTypes = {
   startGetCustomer: PropTypes.func.isRequired,
};

// Acciones
const mapDispatchToProps = (dispatch) => ({
   startGetCustomer: (id_customer) => dispatch(startGetCustomer(id_customer)),
});
const mapStateToProps = (state) => ({
   customer: state.customer,
});

// Insertando nuevas propiedades al Componente
const ShowCustomerConected = connect(
   mapStateToProps,
   mapDispatchToProps
)(ShowCustomer);

export default ShowCustomerConected;
