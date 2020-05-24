import React from "react";

import { Table, Button, Spinner } from "reactstrap";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";

class TableOrders extends React.Component {
   handleReceiveOrder = (id) => {
      this.props.history.push(`/recepcionist/orders/receive_order/${id}`);
   };

   render() {
      const { orders } = this.props;
      return (
         <Table striped responsive>
            <thead className="text-primary">
               <tr>
                  <th></th>
                  <th>Estado</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Fecha Pedido</th>
                  <th width="10%">Accion</th>
               </tr>
            </thead>
            <tbody>
               {orders.length === 0 ? (
                  <tr>
                     <td colSpan="6" className="text-center">
                        <Spinner
                           style={{ width: "10rem", height: "10rem" }}
                           color="success"
                        />
                     </td>
                  </tr>
               ) : (
                  orders.map((o) => (
                     <tr key={o._id}>
                        <td className="text-center">
                           {o.state === "send" ? (
                              <Spinner type="grow" color="primary" />
                           ) : o.state === "accepted" ? (
                              <Spinner type="grow" color="info" />
                           ) : o.state === "denied" ? (
                              <Spinner type="grow" color="danger" />
                           ) : o.state === "roading" ? (
                              <Spinner type="grow" color="dark" />
                           ) : o.state === "finish" ? (
                              <Spinner type="grow" color="success" />
                           ) : o.state === "incomplete" ? (
                              <Spinner type="grow" color="warning" />
                           ) : (
                              "N/T"
                           )}
                        </td>
                        <td>
                           {o.state === "send" ? (
                              <b className="text-primary">Recibido</b>
                           ) : o.state === "accepted" ? (
                              <b className="text-info">Aceptado</b>
                           ) : o.state === "denied" ? (
                              <b className="text-danger">Denegado</b>
                           ) : o.state === "roading" ? (
                              <b className="text-dark">Atendido</b>
                           ) : o.state === "finish" ? (
                              <b className="success">Entregado</b>
                           ) : o.state === "incomplete" ? (
                              <b className="text-primary">Incompleto</b>
                           ) : (
                              <b>Sin estado</b>
                           )}
                        </td>
                        <td>{o.id_user.info.name}</td>
                        <td>{o.id_user.info.lastname}</td>
                        <td>{o.date.date_issue}</td>
                        <td>
                           <Button
                              type="button"
                              color="info"
                              className="btn-round"
                              size="sm"
                              onClick={() => this.handleReceiveOrder(o._id)}
                              block
                           >
                              ver
                           </Button>
                        </td>
                     </tr>
                  ))
               )}
            </tbody>
         </Table>
      );
   }
}
const mapStateToProps = (state) => ({
   orders: state.orders,
});

const TableOrdersConectado = connect(mapStateToProps, null)(TableOrders);

export default TableOrdersConectado;
