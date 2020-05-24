import React from "react";
import { Link } from "react-router-dom";
import {
   Card,
   CardHeader,
   CardBody,
   CardTitle,
   Table,
   Row,
   Col,
   Button,
   ButtonGroup,
} from "reactstrap";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// Importando METODOS para la conexion con la STORE de REDUX
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { startGetOrders } from "../../redux-config/actions/actions";

// Importando Imagenes
import img123 from "../../../assets/img/faces/ayo-ogunseinde-1.jpg";

class DishesContainer extends React.Component {
   render() {
      return (
         <>
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
                           <Table striped size="sm" responsive>
                              <thead className="text-primary">
                                 <tr>
                                    <th width="120px">Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Descripcion</th>
                                    <th width="120px" className="text-center">
                                       <Link to={"dishes/NewDish"}>
                                          Nuevo{" "}
                                          <FontAwesomeIcon icon={faPlus} />
                                       </Link>
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>
                                       <img alt="..." src={img123} />
                                    </td>
                                    <td>Dakota Rice</td>
                                    <td>Niger</td>
                                    <td>Oud-Turnhout</td>
                                    <td className="text-center">
                                       <ButtonGroup size="sm" className="mb-2">
                                          <Button color="info">
                                             <FontAwesomeIcon icon={faEdit} />
                                          </Button>
                                          <Button color="danger">
                                             <FontAwesomeIcon
                                                icon={faTrashAlt}
                                             />
                                          </Button>
                                       </ButtonGroup>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <img alt="..." src={img123} />
                                    </td>
                                    <td>Dakota Rice</td>
                                    <td>Niger</td>
                                    <td>Oud-Turnhout</td>
                                    <td className="text-center">
                                       <ButtonGroup size="sm" className="mb-2">
                                          <Button color="info">
                                             <FontAwesomeIcon icon={faEdit} />
                                          </Button>
                                          <Button color="danger">
                                             <FontAwesomeIcon
                                                icon={faTrashAlt}
                                             />
                                          </Button>
                                       </ButtonGroup>
                                    </td>
                                 </tr>
                              </tbody>
                           </Table>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </div>
         </>
      );
   }
}

export default DishesContainer;
