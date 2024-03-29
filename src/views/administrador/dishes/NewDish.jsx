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
import {
   startGetCategories,
   submitNewDish,
} from "../../../redux-config/actions/actions";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";

// Importando Imagenes
import sinImagen from "../../../assets/img/sin-image.jpg";

class NewDish extends React.Component {
   state = {
      name: "",
      price: 0,
      archivo: "",
      id_category: "",
   };
   handleListDishes = () => {
      this.props.history.push("/admin/dishes");
   };
   handleChanges = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   handleChangesFiles = (e) => {
      let files = e.target.files;
      this.setState({ archivo: files[0] });
   };

   handleSubmit = (e) => {
      const { name, price, archivo, id_category } = this.state;
      this.props.submitNewDish({
         name,
         price,
         archivo,
         id_category,
      });
      e.preventDefault();
   };
   componentDidMount = () => {
      this.props.startGetCategories({});
   };
   render() {
      const { categories } = this.props;
      return (
         <>
            <div className="content">
               <Row className="justify-content-center">
                  <Col md="10">
                     <Card className="card-user">
                        <CardHeader>
                           <CardTitle tag="h5">Nuevo plato</CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Form onSubmit={this.handleSubmit}>
                              <Row>
                                 <Col md="3">
                                    <div align="center">
                                       <img
                                          alt="..."
                                          height="150px"
                                          align="center"
                                          src={sinImagen}
                                       />
                                    </div>
                                 </Col>
                                 <Col md="9">
                                    <Row>
                                       <Col md="12">
                                          <FormGroup>
                                             <label>Nombre</label>
                                             <Input
                                                placeholder="nombre producto"
                                                type="text"
                                                name="name"
                                                onChange={this.handleChanges}
                                                value={this.state.name}
                                             />
                                          </FormGroup>
                                       </Col>
                                       <Col md="6">
                                          <FormGroup>
                                             <label>Precio</label>
                                             <Input
                                                placeholder="precio producto"
                                                type="number"
                                                name="price"
                                                onChange={this.handleChanges}
                                                value={this.state.price}
                                             />
                                          </FormGroup>
                                       </Col>
                                       <Col md="6">
                                          <FormGroup>
                                             <label>Categoria</label>
                                             <Input
                                                type="select"
                                                name="id_category"
                                                onChange={this.handleChanges}
                                             >
                                                <option value="">
                                                   Seleccione
                                                </option>
                                                {categories.map((c) => (
                                                   <option
                                                      key={c._id}
                                                      value={c._id}
                                                   >
                                                      {c.name}
                                                   </option>
                                                ))}
                                             </Input>
                                          </FormGroup>
                                       </Col>
                                    </Row>
                                 </Col>
                              </Row>
                              <input
                                 type="file"
                                 name="archivo"
                                 onChange={this.handleChangesFiles}
                              />
                              <Row className="mt-2">
                                 <Col md="12">
                                    <FormGroup>
                                       <label>Ingredientes</label>
                                       <Input
                                          type="textarea"
                                          placeholder="Ingredientes del platillo"
                                          onChange={this.handleChanges}
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col md="12">
                                    <FormGroup>
                                       <label>Descripcion</label>
                                       <Input
                                          type="textarea"
                                          rows="5"
                                          placeholder="Descripcion del platillo"
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
NewDish.propTypes = {
   startGetCategories: PropTypes.func.isRequired,
   submitNewDish: PropTypes.func.isRequired,
};

// Acciones
const mapDispatchToProps = (dispatch) => ({
   startGetCategories: () => dispatch(startGetCategories()),
   submitNewDish: (data) => dispatch(submitNewDish(data)),
});
const mapStateToProps = (state) => ({
   categories: state.categories,
});

// Insertando nuevas propiedades al Componente
const NewDishConectado = connect(mapStateToProps, mapDispatchToProps)(NewDish);

export default NewDishConectado;
