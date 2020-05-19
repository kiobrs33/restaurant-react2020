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

// Importando ICONOS FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";

class NewEmployee extends React.Component {
    handleListEmployees = () => {
        this.props.history.push("/admin/employees");
    };

    render() {
        return (
            <>
                <div className="content">
                    <Row className="justify-content-center">
                        <Col md="10">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">
                                        Nuevo trabajador
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Nombres</label>
                                                    <Input
                                                        placeholder="nombres"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Apellidos</label>
                                                    <Input
                                                        placeholder="apellidos"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Direccion</label>
                                                    <Input
                                                        placeholder="direccion"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="3">
                                                <FormGroup>
                                                    <label>Dni</label>
                                                    <Input
                                                        placeholder="dni"
                                                        type="number"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <label>Telefono</label>
                                                    <Input
                                                        placeholder="telefono"
                                                        type="number"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Correo</label>
                                                    <Input
                                                        placeholder="correo"
                                                        type="email"
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
                                                        this.handleListEmployees
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

export default NewEmployee;
