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
import { submitNewCategory } from "../../../redux-config/actions/actions";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";

class NewCategory extends React.Component {
   state = {
      name: "",
   };
   handleListDishes = () => {
      this.props.history.push("/admin/categories");
   };
   handleChanges = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   handleSubmit = (e) => {
      const { name } = this.state;

      this.props.submitNewCategory({
         name,
      });
      e.preventDefault();
   };
   render() {
      return (
         <>
            <div className="content">
               <Row className="justify-content-center">
                  <Col md="10">
                     <Card className="card-user">
                        <CardHeader>
                           <CardTitle tag="h5">Nueva Categoria</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Form onSubmit={this.handleSubmit}>
                              <Row>
                                 <Col md="6">
                                    <FormGroup>
                                       <label>Nombre</label>
                                       <Input
                                          placeholder="Nombre categoria"
                                          type="text"
                                          name="name"
                                          onChange={this.handleChanges}
                                          value={this.state.name}
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row>
                              <Row className="justify-content-between">
                                 <Col xs="6" md="3">
                                    <Button
                                       className="btn-round"
                                       color="danger"
                                       onClick={this.handleListDishes}
                                       block
                                    >
                                       <FontAwesomeIcon icon={faArrowLeft} />{" "}
                                       Volver
                                    </Button>
                                 </Col>
                                 <Col xs="6" md="3">
                                    <Button
                                       type="submit"
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

// Validacion de Props
NewCategory.propTypes = {
   submitNewCategory: PropTypes.func.isRequired,
};

// Acciones
const mapDispatchToProps = (dispatch) => ({
   submitNewCategory: (data) => dispatch(submitNewCategory(data)),
});

// Insertando nuevas propiedades al Componente
const NewCategoryConectado = connect(null, mapDispatchToProps)(NewCategory);

export default NewCategoryConectado;
