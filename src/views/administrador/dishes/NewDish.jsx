import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

import { Link } from "react-router-dom";

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";

// Importando Imagenes
import img123 from "../../../assets/img/faces/clem-onojeghuo-2.jpg";

class NewDish extends React.Component {
    handleListDishes = () => {
        this.props.history.push("/admin/dishes");
    };
    render() {
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
                                    <Form>
                                        <Row>
                                            <Col md="3">
                                                <div align="center">
                                                    <img
                                                        alt="..."
                                                        height="150px"
                                                        align="center"
                                                        src={img123}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="9">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label>
                                                                Nombre
                                                            </label>
                                                            <Input
                                                                placeholder="nombre producto"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup>
                                                            <label>
                                                                Precio
                                                            </label>
                                                            <Input
                                                                placeholder="precio producto"
                                                                type="number"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup>
                                                            <label>
                                                                Categoria
                                                            </label>
                                                            <Input
                                                                type="select"
                                                                name="select"
                                                                id="exampleSelect1"
                                                            >
                                                                <option>
                                                                    Frituras
                                                                </option>
                                                                <option>
                                                                    Ensaladas
                                                                </option>
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row className="mt-2">
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Ingredientes</label>
                                                    <Input
                                                        type="textarea"
                                                        placeholder="Ingredientes del platillo"
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
                                                    onClick={
                                                        this.handleListDishes
                                                    }
                                                    block
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faArrowLeft}
                                                    />{" "}
                                                    Volver
                                                </Button>
                                            </Col>
                                            <Col xs="6" md="3">
                                                <Button
                                                    className="btn-round"
                                                    color="success"
                                                    block
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faSave}
                                                    />{" "}
                                                    Guardar
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

export default NewDish;
