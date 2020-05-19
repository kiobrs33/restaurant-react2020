import { put, call, takeLatest } from "redux-saga/effects";
import { START_GET_ORDERS, END_GET_ORDERS } from "redux-config/actions/actions";
// import axios from "axios";
import apiCall from "../api/apiCall";

// Aqui las funciones respresentan PETICIONES A LA API - CRUD
function* getOrders() {
   try {
      const result = yield call(
         apiCall,
         "get",
         "https://rest-back-end.herokuapp.com/api/orders/show",
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0"
      );
      yield put({ type: END_GET_ORDERS, orders: result.orders });
   } catch (error) {}
}

// WATCHERS
// Exporta todas las funciones
// Cada Funcion ESTA al tanto y escuchando todas las ACCIONES QUE SE DISPAREN
export default function* orders() {
   yield takeLatest(START_GET_ORDERS, getOrders);
}
