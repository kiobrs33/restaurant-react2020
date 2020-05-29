import { put, call, takeLatest } from "redux-saga/effects";
import { START_SET_LOGIN, END_SET_LOGIN } from "../actions/actions";

// APICALL - (METHOD, URL, HEADERS, DATA)
import apiCall from "../api/apiCall";

// Aqui las funciones respresentan PETICIONES A LA API - CRUD
function* getToken(action) {
   try {
      const result = yield call(
         apiCall,
         "POST",
         "https://rest-back-end.herokuapp.com/api/login/sign_in",
         { "Content-Type": "application/json" },
         JSON.stringify({
            user: action.datos.username,
            password: action.datos.password,
         })
      );
      console.log(result);
      yield put({ type: END_SET_LOGIN, token: result.token });
   } catch (error) {
      console.log(error);
   }
}

// WATCHERS
// Exporta todas las funciones
// Cada Funcion ESTA al tanto y escuchando todas las ACCIONES QUE SE DISPAREN
export default function* login() {
   yield takeLatest(START_SET_LOGIN, getToken);
}
