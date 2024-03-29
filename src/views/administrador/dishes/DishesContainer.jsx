import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
   startGetDishes,
   startGetCategories,
} from "../../../redux-config/actions/actions";

import TableDishes from "./TableDishes";

class DishesContainer extends React.Component {
   componentDidMount = () => {
      this.props.startGetDishes();
   };
   render() {
      const { dishes } = this.props;

      return (
         <div className="content">
            <Row>
               <Col md="12">
                  <Card>
                     <CardHeader>
                        <CardTitle tag="h4">Lista de Platos</CardTitle>
                        <p className="card-category">
                           Todos los platos del restaurant
                        </p>
                     </CardHeader>
                     <CardBody>
                        {dishes.length !== 0 ? (
                           <TableDishes dishes={dishes} {...this.props} />
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
DishesContainer.propTypes = {
   startGetDishes: PropTypes.func.isRequired,
};

// Acciones
const mapDispatchToProps = (dispatch) => ({
   startGetDishes: () => dispatch(startGetDishes()),
});
const mapStateToProps = (state) => ({
   dishes: state.dishes,
});

// Insertando nuevas propiedades al Componente
const DishesContainerConectado = connect(
   mapStateToProps,
   mapDispatchToProps
)(DishesContainer);

export default DishesContainerConectado;
