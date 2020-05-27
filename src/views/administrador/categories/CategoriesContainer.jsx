import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startGetCategories } from "../../../redux-config/actions/actions";

import TableCategories from "./TableCategories";

class CategoriesContainer extends React.Component {
   componentDidMount = () => {
      this.props.startGetCategories();
   };
   render() {
      const { categories } = this.props;

      return (
         <div className="content">
            <Row>
               <Col md="12">
                  <Card>
                     <CardHeader>
                        <CardTitle tag="h4">Lista de Platos</CardTitle>
                        <p className="card-category">Categorias</p>
                     </CardHeader>
                     <CardBody>
                        {categories.length !== 0 ? (
                           <TableCategories
                              categories={categories}
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
CategoriesContainer.propTypes = {
   startGetCategories: PropTypes.func.isRequired,
};

// Acciones
const mapDispatchToProps = (dispatch) => ({
   startGetCategories: () => dispatch(startGetCategories()),
});
const mapStateToProps = (state) => ({
   categories: state.categories,
});

// Insertando nuevas propiedades al Componente
const CategoriesContainerConectado = connect(
   mapStateToProps,
   mapDispatchToProps
)(CategoriesContainer);

export default CategoriesContainerConectado;
