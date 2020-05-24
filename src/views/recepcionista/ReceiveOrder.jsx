import React from "react";
import {
   Button,
   Card,
   CardHeader,
   CardBody,
   CardTitle,
   Form,
   Row,
   Col,
   Table,
   Spinner,
} from "reactstrap";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
   startGetOrder,
   startGetSenders,
   startSubmitOrder,
} from "../../redux-config/actions/actions";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";

import user from "../../assets/img/default-avatar.png";

class ReceiveOrder extends React.Component {
   state = {
      state_order: "accepted",
      id_order: "",
      id_sender: "",
      name_sender: "",
      lastname_sender: "",
   };

   componentDidMount = () => {
      var id_order = this.props.match.params.idOrder;
      this.setState({
         id_order: id_order,
      });

      // Disparando para obtener ORDER y obtener SENDERS
      this.props.startGetOrder(id_order);
      this.props.startGetSenders();
   };

   handleListOrders = () => {
      this.props.history.push("/recepcionist/orders");
   };

   // Funcion para escoger TRABAJADOR
   handleEscogerSender = (obj) => {
      this.setState({
         id_sender: obj._id,
         name_sender: obj.info.name,
         lastname_sender: obj.info.lastname,
      });
   };

   // Funcion para lanzar ATENDER EL PEDIDO
   handleSubmit = (event) => {
      this.props.startSubmitOrder(
         "roading",
         this.state.id_order,
         this.state.id_sender
      );
      this.props.history.push("/recepcionist/orders");
      event.preventDefault();
   };

   render() {
      const { order, workersSenders } = this.props;
      if (order.id_user) {
         var id_pedido = order._id;
         var id_cliente = order.id_user._id;
         var nombres_cliente = order.id_user.info.name;
         var apellidos_cliente = order.id_user.info.lastname;
         var direccion_pedido = order.adress.adress_name;
         var detalles_pedidos = order.details_orders;
      }

      var sutotal, total;
      return (
         <>
            <div className="content">
               <Row className="justify-content-center">
                  <Col md="10">
                     <Card className="card-user">
                        <CardHeader>
                           <CardTitle tag="h5">
                              Pedido {order.id_user ? id_pedido : "Cargando.."}
                           </CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Form onSubmit={this.handleSubmit}>
                              <Row>
                                 <Col md="6">
                                    <h6>Id Cliente:</h6>
                                    <p>
                                       {order.id_user
                                          ? id_cliente
                                          : "Cargando.."}
                                    </p>
                                 </Col>
                                 <Col md="6">
                                    <h6>Datos:</h6>
                                    <p>
                                       {order.id_user
                                          ? `${nombres_cliente} ${apellidos_cliente}`
                                          : "Cargando.."}
                                    </p>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col md="6">
                                    <h6>Direccion:</h6>
                                    <p>
                                       {order.id_user
                                          ? direccion_pedido
                                          : "Cargando.."}
                                    </p>
                                 </Col>
                                 <Col md="6">
                                    <h6>Fecha Pedido:</h6>
                                    <p>
                                       {order.id_user
                                          ? order.date.date_issue
                                          : "Cargando.."}
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
                                             <th>Precio</th>
                                             <th>Cantidad</th>
                                             <th>Total</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          {order.id_user ? (
                                             detalles_pedidos.map((o) => (
                                                <tr key={o._id}>
                                                   <td>{o.id_dish.name}</td>
                                                   <td>{o.price_actuality}</td>
                                                   <td>{o.quantity}</td>
                                                   <td>
                                                      {o.price_actuality *
                                                         o.quantity}
                                                   </td>
                                                </tr>
                                             ))
                                          ) : (
                                             <tr>
                                                <td
                                                   colSpan="4"
                                                   className="text-center"
                                                >
                                                   <Spinner
                                                      style={{
                                                         width: "4rem",
                                                         height: "4rem",
                                                      }}
                                                      color="dark"
                                                   />
                                                </td>
                                             </tr>
                                          )}
                                       </tbody>
                                    </Table>
                                 </Col>
                              </Row>
                              <br />
                              <Row className="justify-content-end">
                                 <Col md="6">
                                    <p>
                                       Aqui se muestra los detalles del pedido
                                       hecho por los clientes!
                                    </p>
                                 </Col>
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
                                             <td>{total}</td>
                                          </tr>
                                       </tbody>
                                    </Table>
                                 </Col>
                              </Row>
                              <br />
                              <h5>
                                 Lista de transportistas libres(Seleccione Uno)
                              </h5>
                              <div
                                 style={{
                                    height: "auto",
                                    overflowX: "scroll",
                                    display: "flex",
                                 }}
                              >
                                 {workersSenders.length !== 0 ? (
                                    workersSenders.map((w) => (
                                       <div
                                          className="text-white text-center p-2 m-2"
                                          style={{
                                             background:
                                                "linear-gradient(120deg,#16BFFD ,#CB3066)",
                                             width: "150px",
                                             borderRadius: "10px",
                                             cursor: "pointer",
                                          }}
                                          key={w._id}
                                          onClick={() =>
                                             this.handleEscogerSender(w)
                                          }
                                       >
                                          <div>
                                             <img
                                                alt="..."
                                                className="rounded-circle"
                                                height="50px"
                                                src={w.img || user}
                                             />
                                          </div>
                                          <span
                                             className="text-center"
                                             style={{ fontSize: "12px" }}
                                          >
                                             {`${w.info.name} ${w.info.lastname}`}
                                          </span>
                                          <br />
                                          <span
                                             className="text-center"
                                             style={{ fontSize: "12px" }}
                                          >
                                             {`${w.orders_worker.length} pedidos`}
                                          </span>
                                       </div>
                                    ))
                                 ) : (
                                    <div>
                                       <Spinner
                                          style={{
                                             width: "4rem",
                                             height: "4rem",
                                          }}
                                          color="dark"
                                       />
                                    </div>
                                 )}
                              </div>
                              <div className="text-center text-white bg-dark rounded">
                                 <h4>
                                    {this.state.name_sender !== ""
                                       ? `${this.state.name_sender} ${this.state.lastname_sender}`
                                       : "Seleccionar"}
                                 </h4>
                              </div>
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
                                       <FontAwesomeIcon icon={faSave} /> Atender
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

ReceiveOrder.propTypes = {
   startGetOrder: PropTypes.func.isRequired,
   startGetSenders: PropTypes.func.isRequired,
   startSubmitOrder: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
   startGetOrder: (id_order) => dispatch(startGetOrder(id_order)),
   startGetSenders: () => dispatch(startGetSenders()),
   startSubmitOrder: (state_order, id_order, id_sender) =>
      dispatch(startSubmitOrder(state_order, id_order, id_sender)),
});

const mapStateToProps = (state) => ({
   order: state.receiveOrder,
   workersSenders: state.workersSenders,
});

const ReceiveOrderConectado = connect(
   mapStateToProps,
   mapDispatchToProps
)(ReceiveOrder);

export default ReceiveOrderConectado;
