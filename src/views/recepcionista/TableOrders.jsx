import React from "react";

import { Table, Button } from "reactstrap";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";

class TableOrders extends React.Component {
   handleReceiveOrder = () => {
      this.props.history.push("/recepcionist/orders/receive_order");
   };

   render() {
      const { orders } = this.props;
      console.log(orders);
      return (
         <Table striped responsive>
            <thead className="text-primary">
               <tr>
                  <th width="5%">Orden ID</th>
                  <th>CLiente ID</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Fecha Pedido</th>
                  <th width="15%">Estado</th>
                  <th width="10%">Accion</th>
               </tr>
            </thead>
            <tbody>
               {orders.map((o) => (
                  <tr key={o._id}>
                     <td>{o._id.substring(5, 10)}</td>
                     <td>324323</td>
                     <td>{o.id_user.info.name}</td>
                     <td>{o.id_user.info.lastname}</td>
                     <td>{o.date.date_issue}</td>
                     <td>No se sabe</td>
                     <td>
                        <Button
                           color="info"
                           className="btn-round"
                           size="sm"
                           onClick={this.handleReceiveOrder}
                           block
                        >
                           ver
                        </Button>
                     </td>
                  </tr>
               ))}
               {/* <tr>
                     <td>1</td>
                     <td>324323</td>
                     <td>Rene Edgard</td>
                     <td>Lozano Ramos</td>
                     <td>12/12/2020 13:45</td>
                     <td className="bg-danger text-center">Pendiente</td>
                     <td>
                        <Button
                           color="info"
                           className="btn-round"
                           size="sm"
                           onClick={this.handleReceiveOrder}
                           block
                        >
                           ver
                        </Button>
                     </td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td>324323</td>
                     <td>Rene Edgard</td>
                     <td>Lozano Ramos</td>
                     <td>12/12/2020 13:45</td>
                     <td className="bg-warning text-center">Atendiendolo</td>
                     <td>
                        <Button
                           color="info"
                           className="btn-round"
                           size="sm"
                           onClick={this.handleReceiveOrder}
                           block
                        >
                           ver
                        </Button>
                     </td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td>324323</td>
                     <td>Rene Edgard</td>
                     <td>Lozano Ramos</td>
                     <td>12/12/2020 13:45</td>
                     <td className="bg-primary text-center">En camino</td>
                     <td>
                        <Button
                           color="info"
                           className="btn-round"
                           size="sm"
                           onClick={this.handleReceiveOrder}
                           block
                        >
                           ver
                        </Button>
                     </td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td>324323</td>
                     <td>Rene Edgard</td>
                     <td>Lozano Ramos</td>
                     <td>12/12/2020 13:45</td>
                     <td className="bg-success text-center">Entregado</td>
                     <td>
                        <Button
                           color="info"
                           className="btn-round"
                           size="sm"
                           block
                           onClick={this.handleReceiveOrder}
                        >
                           ver
                        </Button>
                     </td>
                  </tr> */}
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
