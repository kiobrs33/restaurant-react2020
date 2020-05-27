import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startGetCustomers } from "../../../redux-config/actions/actions";

import TableCustomers from "./TableCustomers";

// import TableDishes from "./TableDishes";

class CustomersContainer extends React.Component {
   componentDidMount = () => {
      this.props.startGetCustomers();
   };

   render() {
      const { customers } = this.props;
      console.log(customers);
      return (
         <div className="content">
            <Row>
               <Col md="12">
                  <Card>
                     <CardHeader>
                        <CardTitle tag="h4">Lista de Clientes</CardTitle>
                        <p className="card-category">Clientes</p>
                     </CardHeader>
                     <CardBody>
                        {customers.length !== 0 ? (
                           <TableCustomers
                              customers={customers}
                              {...this.props}
                           />
                        ) : (
                           "Cargando"
                        )}
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

// Validacion de Props
CustomersContainer.propTypes = {
   startGetCustomers: PropTypes.func.isRequired,
};

// Acciones
const mapDispatchToProps = (dispatch) => ({
   startGetCustomers: () => dispatch(startGetCustomers()),
});
const mapStateToProps = (state) => ({
   customers: state.customers,
});

// Insertando nuevas propiedades al Componente
const DishesContainerConectado = connect(
   mapStateToProps,
   mapDispatchToProps
)(CustomersContainer);

export default DishesContainerConectado;
