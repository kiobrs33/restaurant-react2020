import React from "react";

import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startGetOrders } from "../../redux-config/actions/actions";

import io from "socket.io-client";

import TableOrders from "./TableOrders";

class Orders extends React.Component {
   handleReceiveOrder = () => {
      this.props.history.push("/recepcionist/orders/receive_order");
   };

   componentDidMount = () => {
      // Disparando accion para obtener ORDERS
      this.props.startGetOrders();

      this.socket = io("https://rest-back-end.herokuapp.com");
      // this.socket = io("http://192.168.0.4:3000");
      this.socket.on("newOrderGenerated", (sms) => {
         console.log(sms);
         this.props.startGetOrders();
      });
   };

   render() {
      return (
         <>
            <div className="content">
               <Row>
                  <Col md="12">
                     <Card>
                        <CardHeader>
                           <CardTitle tag="h4">Simple Table</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <TableOrders />
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </div>
         </>
      );
   }
}

// Validadcion de pros del COMPONENTE
// En este caso se esta validando que las PROPS sean funciones
Orders.propTypes = {
   startGetOrders: PropTypes.func.isRequired,
};

// Disparando una ACCION
const mapDispatchToProps = (dispatch) => ({
   startGetOrders: () => dispatch(startGetOrders()),
});

const OrdersConectado = connect(null, mapDispatchToProps)(Orders);

export default OrdersConectado;
