import React from "react";
import {
   Button,
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   CardTitle,
   FormGroup,
   Form,
   Input,
   Row,
   Col,
   Table,
} from "reactstrap";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";

class ReceiveOrder extends React.Component {
   // handleListOrders = () => {
   //     this.props.history.push("/recepcionist/orders");
   // };

   render() {
      return (
         <>
            <div className="content">
               <Row className="justify-content-center">
                  <Col md="10">
                     <Card className="card-user">
                        <CardHeader>
                           <CardTitle tag="h5">Pedido #12321</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Form>
                              <Row>
                                 <Col md="6">
                                    <h6>Id Cliente:</h6>
                                    <p>#54456</p>
                                 </Col>
                                 <Col md="6">
                                    <h6>Datos:</h6>
                                    <p>Rene Edgard Lozano Ramos</p>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col md="6">
                                    <h6>Direccion:</h6>
                                    <p>
                                       Av las peñas socabaya 123 - frente al
                                       grifo porongoche
                                    </p>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col md="12">
                                    <h6>Detalles del Pedido:</h6>
                                    <Table striped responsive>
                                       <thead className="text-primary">
                                          <tr>
                                             <th>Plato</th>
                                             <th>Comentario</th>
                                             <th>Cantidad</th>
                                             <th>Total</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>Arroz con Pato</td>
                                             <td>
                                                El arroz con pato sin ensalada y
                                                sin pato
                                             </td>
                                             <td>12</td>
                                             <td>S/ 56.00</td>
                                          </tr>
                                          <tr>
                                             <td>Arroz con Perro</td>
                                             <td>
                                                El arroz con pato sin ensalada y
                                                sin pato
                                             </td>
                                             <td>12</td>
                                             <td>S/ 56.00</td>
                                          </tr>
                                          <tr>
                                             <td>Arroz con Gato</td>
                                             <td>
                                                El arroz con pato sin ensalada y
                                                sin pato
                                             </td>
                                             <td>12</td>
                                             <td>S/ 56.00</td>
                                          </tr>
                                       </tbody>
                                    </Table>
                                 </Col>
                              </Row>
                              <br />
                              <Row className="justify-content-end">
                                 <Col md="6">
                                    <Table striped>
                                       <tbody>
                                          <tr>
                                             <th>Subtotal:</th>
                                             <td>S/234.00</td>
                                          </tr>
                                          <tr>
                                             <th>Descuento:</th>
                                             <td>S/232.00</td>
                                          </tr>
                                          <tr>
                                             <th>Total:</th>
                                             <td>S/234234.00</td>
                                          </tr>
                                       </tbody>
                                    </Table>
                                 </Col>
                              </Row>
                              <br />
                              <h5>Lista de transportistas libres</h5>
                              <Row>
                                 <Col md="4">
                                    <Card
                                       inverse
                                       body
                                       style={{
                                          background:
                                             "linear-gradient(120deg, #e74d6b 10%, #8cc8ac 90%)",
                                          minHeight: "0px",
                                       }}
                                    >
                                       <div className="text-center">
                                          <img
                                             alt="..."
                                             className="border-gray"
                                             height="80px"
                                             src={require("assets/img/mike.jpg")}
                                          />
                                       </div>
                                       <span className="text-center">
                                          Juanito Ccahuaya Madariaga
                                       </span>
                                       <Button
                                          className="btn-round"
                                          color="default"
                                          block
                                       >
                                          Seleccionar
                                       </Button>
                                    </Card>
                                 </Col>
                                 <Col md="4">
                                    <Card
                                       inverse
                                       body
                                       style={{
                                          background:
                                             "linear-gradient(120deg, #e74d6b 10%, #8cc8ac 90%)",
                                          minHeight: "0px",
                                       }}
                                    >
                                       <div className="text-center">
                                          <img
                                             alt="..."
                                             className="border-gray"
                                             height="80px"
                                             src={require("assets/img/mike.jpg")}
                                          />
                                       </div>
                                       <span className="text-center">
                                          Luis Hector Ccahuaya
                                       </span>
                                       <Button
                                          className="btn-round"
                                          color="default"
                                          block
                                       >
                                          Seleccionar
                                       </Button>
                                    </Card>
                                 </Col>
                                 <Col md="4">
                                    <Card
                                       inverse
                                       body
                                       style={{
                                          background:
                                             "linear-gradient(120deg, #e74d6b 10%, #8cc8ac 90%)",
                                          minHeight: "0px",
                                       }}
                                    >
                                       <div className="text-center">
                                          <img
                                             alt="..."
                                             className="border-gray"
                                             height="80px"
                                             src={require("assets/img/mike.jpg")}
                                          />
                                       </div>
                                       <span className="text-center">
                                          Pepe Ccahuaya Madariaga
                                       </span>
                                       <Button
                                          className="btn-round"
                                          color="default"
                                          block
                                       >
                                          Seleccionar
                                       </Button>
                                    </Card>
                                 </Col>
                              </Row>
                              <Row className="justify-content-between">
                                 <Col xs="6" md="3">
                                    <Button
                                       className="btn-round"
                                       color="danger"
                                       onClick={this.handleListOrders}
                                       block
                                    >
                                       <FontAwesomeIcon icon={faArrowLeft} />{" "}
                                       Volver
                                    </Button>
                                 </Col>
                                 <Col xs="6" md="3">
                                    <Button
                                       className="btn-round"
                                       color="success"
                                       block
                                    >
                                       <FontAwesomeIcon icon={faSave} /> Guardar
                                    </Button>
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

export default ReceiveOrder;
