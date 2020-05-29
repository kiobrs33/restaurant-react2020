import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startSetLogin } from "../redux-config/actions/actions";

// import io from "socket.io-client";

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
      // this.socket = io("localhost:8080");
      // this.socket.on("sms", (sms) => {
      //    console.log(sms);
      // });
      console.log(this.props.token);
   }

   handleIngreso = () => {
      this.props.history.push("/admin/dishes");
   };

   handleOnChange = (e) => {
      console.log(e.target.value);
      this.setState({ [e.target.name]: e.target.value });
   };

   handleSubmit = (e) => {
      // this.socket.emit("sms", {
      //    username: this.state.username,
      //    password: this.state.password,
      // });
      // Enviando un OBJETO con DATOS
      const { username, password } = this.state;
      this.props.startSetLogin({ username, password });
      e.preventDefault();
   };

   render() {
      // const { token } = this.props;
      // if (token) {
      //    console.log(token);
      //    // this.handleIngreso;
      // }
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
                        <Form onSubmit={this.handleSubmit}>
                           <FormGroup>
                              <Input
                                 className="input-login"
                                 placeholder="Usuario"
                                 type="text"
                                 name="username"
                                 value={this.state.username}
                                 onChange={this.handleOnChange}
                              />
                           </FormGroup>
                           <FormGroup>
                              <Input
                                 className="input-login"
                                 placeholder="Contraseña"
                                 type="password"
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.handleOnChange}
                              />
                           </FormGroup>
                           <Button
                              className="btn  btn-login btn-block"
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
Login.propTypes = {
   startSetLogin: PropTypes.func.isRequired,
};

// Disparando una ACCION DESDE EL COMPONENTE login
const mapDispatchToProps = (dispatch) => ({
   // Accediendo a la prop SETLOGIN y recibiendo su VALOR , en este caso recibe la CONTRASEÑA Y USUARIO
   // Los valores se pasan al ACTION DE nombre setLogin
   startSetLogin: (datos) => dispatch(startSetLogin(datos)),
});
const mapStateToProps = (state) => ({
   token: state.token,
});

const LoginConectado = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginConectado;
