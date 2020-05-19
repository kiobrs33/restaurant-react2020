import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setLogin } from "../redux-config/actions/actions";

import io from "socket.io-client";

import {
   CardHeader,
   Button,
   Input,
   Row,
   Col,
   FormGroup,
   Card,
   CardBody,
   Form,
   Container,
} from "reactstrap";

class Login extends React.Component {
   state = {
      username: "",
      password: "",
   };

   componentDidMount() {
      this.socket = io("localhost:8080");

      this.socket.on("sms", (sms) => {
         console.log(sms);
      });
   }

   usernameHandler = (e) => this.setState({ username: e.target.value });
   passwordHandler = (e) => this.setState({ password: e.target.value });

   submitHandler = () => {
      console.log(this.state.username + "--" + this.state.password);

      this.socket.emit("sms", {
         username: this.state.username,
         password: this.state.password,
      });

      // Enviando datos a las props del COMPONENTE
      this.props.setLogin(this.state.username, this.state.password);
   };

   render() {
      return (
         <Container fluid className="bg-login">
            <Row className="align-items-center justify-content-center vh-100">
               <Col sm="5" lg="3">
                  <div className="img-login"></div>
                  <Card className="card-login">
                     <CardHeader>
                        <h5 align="center">Iniciar Sesion</h5>
                     </CardHeader>
                     <CardBody>
                        <Form>
                           <FormGroup>
                              <Input
                                 className="input-login"
                                 placeholder="Usuario"
                                 type="text"
                                 value={this.state.username}
                                 onChange={this.usernameHandler}
                              />
                           </FormGroup>
                           <FormGroup>
                              <Input
                                 className="input-login"
                                 placeholder="Contraseña"
                                 type="password"
                                 value={this.state.password}
                                 onChange={this.passwordHandler}
                              />
                           </FormGroup>
                           <Button
                              className="btn btn-danger btn-login btn-block"
                              onClick={this.submitHandler}
                           >
                              Iniciar Sesion
                           </Button>
                        </Form>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Container>
      );
   }
}

// Validadcion de pros del COMPONENTE
// En este caso se esta validando que las PROPS sean funciones
Login.propTypes = {
   setLogin: PropTypes.func.isRequired,
};

// Disparando una ACCION DESDE EL COMPONENTE login
const mapDispatchToProps = (dispatch) => ({
   // Accediendo a la prop SETLOGIN y recibiendo su VALOR , en este caso recibe la CONTRASEÑA Y USUARIO
   // Los valores se pasan al ACTION DE nombre setLogin
   setLogin: (val1, val2) => dispatch(setLogin(val1, val2)),
});

const LoginConectado = connect(null, mapDispatchToProps)(Login);

export default LoginConectado;
