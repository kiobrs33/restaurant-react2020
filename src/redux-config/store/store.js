import { createStore, applyMiddleware, compose } from "redux";
import reduxSaga from "redux-saga";

import rootSaga from "../sagas/main";

// Importando REDUCERS
import { reducers } from "../reducers/reducers";

// Inciando UN OBJETO VACIO COMO ESTADO INICIAL del STORE
const estadoInicial = { orders: [] };

// Para utilizar DEEVTOOLS con MIDDLEWARE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = reduxSaga();

export const store = createStore(
   reducers,
   estadoInicial,
   composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
