/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// Importando componente que RECIBIRA EL STORE
import { Provider } from "react-redux";
// Importando el STORE para la aplicacion
import { store } from "redux-config/store/store";

// CSS personalizado
import "assets/css/restaurant.css";

import AdminLayout from "layouts/Admin.jsx";
import RecepcionistLayout from "layouts/Receptionist.jsx";

import Login from "views/Login.jsx";

const hist = createBrowserHistory();

// El componenete PROVIDER contiene toda la aplicacion con el FIN de que todos los componentes HIJOS puedan conectarse AL STORE

ReactDOM.render(
   <Provider store={store}>
      <Router history={hist}>
         <Switch>
            <Route
               path="/admin"
               render={(props) => <AdminLayout {...props} />}
            />
            <Route
               path="/recepcionist"
               render={(props) => <RecepcionistLayout {...props} />}
            />
            <Route path="/login" component={Login} />

            <Redirect to="/admin/dashboard" />
         </Switch>
      </Router>
   </Provider>,
   document.getElementById("root")
);
