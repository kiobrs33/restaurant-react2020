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

// REDUX
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
   startGetOrder,
   startGetSenders,
   startSubmitOrder,
} from "../../redux-config/actions/actions";

// Componentes
import Map from "../administrador/googlemaps/GoogleMap";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import user from "../../assets/img/default-avatar.png";
import loading1 from "../../assets/img/loading/loading1.svg";

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

      // REDUX - actions
      this.props.startGetOrder(id_order);
      this.props.startGetSenders();
   };

   redirectListOrders = () => {
      this.props.history.push("/recepcionist/orders");
   };

   selectSender = (obj) => {
      this.setState({
         id_sender: obj._id,
         name_sender: obj.info.name,
         lastname_sender: obj.info.lastname,
      });
   };

   // Funcion para atender Pedido
   handleSubmit = (event) => {
      var fecha = new Date(); //Fecha actual
      var mes = fecha.getMonth() + 1; //obteniendo mes
      var dia = fecha.getDate(); //obteniendo dia
      var ano = fecha.getFullYear();
      let nowDate = `${ano}/${mes}/${dia}`;

      this.props.startSubmitOrder(
         "roading",
         this.state.id_order,
         this.state.id_sender,
         nowDate
      );
      this.props.history.push("/recepcionist/orders");
      event.preventDefault();
   };

   render() {
      // URL - GOOGLEMAP
      const mapURL =
         "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDBUCi_YsR1AQdmx48i3x1ZIBV5hQ4015Q";

      const { order, workersSenders } = this.props;

      if (Object.keys(order).length === 0) {
         return (
            <div className="content">
               <div align="center">
                  <img src={loading1} />
               </div>
            </div>
         );
      }

      if (order.id_user) {
         var id_pedido = order._id;
         var id_cliente = order.id_user._id;
         var nombres_cliente = order.id_user.info.name;
         var apellidos_cliente = order.id_user.info.lastname;
         var direccion_pedido = order.adress.adress_name;
         var details_orders = order.details_orders;

         var precioTotal = 0;
         var igv;

         details_orders.map((d) => {
            precioTotal += parseFloat(d.price_actuality * d.quantity);
         });
         igv = precioTotal / 1.18;
      }

      return (
         <>
            <div className="content">
               <Row className="justify-content-center">
                  <Col md="10">
                     <Card className="card-user">
                        <CardHeader>
                           <CardTitle tag="h5">Pedido {id_pedido}</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Form onSubmit={this.handleSubmit}>
                              <Row>
                                 <Col md="6">
                                    <h6>Id Cliente:</h6>
                                    <p>{id_cliente}</p>
                                 </Col>
                                 <Col md="6">
                                    <h6>Datos:</h6>
                                    <p>{nombres_cliente}</p>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col md="6">
                                    <h6>Direccion:</h6>
                                    <p>{apellidos_cliente}</p>
                                 </Col>
                                 <Col md="6">
                                    <h6>Fecha Pedido:</h6>
                                    <p>{direccion_pedido}</p>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col md="12">
                                    <h6>Detalles:</h6>
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
                                          {details_orders.map((o) => (
                                             <tr key={o._id}>
                                                <td>{o.id_dish.name}</td>
                                                <td>{o.price_actuality}</td>
                                                <td>{o.quantity}</td>
                                                <td>
                                                   {o.price_actuality *
                                                      o.quantity}
                                                </td>
                                             </tr>
                                          ))}
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
                                             <th>Total:</th>
                                             <td>S/{precioTotal}</td>
                                          </tr>
                                          <tr>
                                             <th>IGV:</th>
                                             <td>S/{igv}</td>
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
                                    overflowX: "auto",
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

                                             borderRadius: "10px",
                                             cursor: "pointer",
                                          }}
                                          key={w._id}
                                          onClick={() => this.selectSender(w)}
                                       >
                                          <div>
                                             <img
                                                alt="..."
                                                className="rounded-circle"
                                                height="50px"
                                                src={
                                                   `https://rest-back-end.herokuapp.com/api/worker/showImage/${w._id}` ||
                                                   user
                                                }
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
                              <div>
                                 {order.adress ? (
                                    <Map
                                       googleMapURL={mapURL}
                                       containerElement={
                                          <div style={{ height: "400px" }} />
                                       }
                                       mapElement={
                                          <div style={{ height: "400px" }} />
                                       }
                                       loadingElement={<p>Cargando...</p>}
                                       mainPosition={{
                                          lat: -16.453110907152375,
                                          lng: -71.53251157820684,
                                       }}
                                       clientPosition={{
                                          lat: parseFloat(
                                             order.adress.adress_latitud
                                          ),
                                          lng: parseFloat(
                                             order.adress.adress_longitud
                                          ),
                                       }}
                                    />
                                 ) : (
                                    "Cargando"
                                 )}
                              </div>
                              <Row className="justify-content-between">
                                 <Col xs="6" md="3">
                                    <Button
                                       className="btn-round"
                                       color="danger"
                                       onClick={this.redirectListOrders}
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
   startSubmitOrder: (state_order, id_order, id_sender, fecha) =>
      dispatch(startSubmitOrder(state_order, id_order, id_sender, fecha)),
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
