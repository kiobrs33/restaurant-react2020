import { put, call, takeLatest } from "redux-saga/effects";
import {
   START_GET_ORDERS,
   END_GET_ORDERS,
   START_GET_ORDER,
   END_GET_ORDER,
   START_GET_SENDERS,
   END_GET_SENDERS,
   START_SUBMIT_ORDER,
} from "redux-config/actions/actions";
// import axios from "axios";
import apiCall from "../api/apiCall";

// Aqui las funciones respresentan PETICIONES A LA API - CRUD
function* getOrders() {
   try {
      const result = yield call(
         apiCall,
         "get",
         "http://localhost:3001/api/orders/all",
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0"
      );
      yield put({ type: END_GET_ORDERS, orders: result.orders });
   } catch (error) {}
}

function* getOrder(action) {
   try {
      const result = yield call(
         apiCall,
         "get",
         `http://localhost:3001/api/orders/showOne/${action.id_order}`,
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0"
      );
      yield put({ type: END_GET_ORDER, order: result.data });
   } catch (error) {}
}

function* getSenders() {
   try {
      const result = yield call(
         apiCall,
         "get",
         "http://localhost:3001/api/worker/all_Workers_Senders",
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0"
      );
      yield put({ type: END_GET_SENDERS, senders: result.data });
   } catch (error) {}
}

function* submitOrder(action) {
   try {
      // Actulizando EL ESTADO DE LA ORDEN
      const result1 = yield call(
         apiCall,
         "put",
         `http://localhost:3001/api/orders/update/${action.id_order}`,
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
         { state: action.state_order }
      );

      const result2 = yield call(
         apiCall,
         "put",
         `http://localhost:3001/api/worker/update_orders_worker/${action.id_sender}`,
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
         { id_order: action.id_order }
      );
      // yield put({ type: END_GET_SENDERS, senders: result.workers });
   } catch (error) {
      console.log(error);
   }
}

// WATCHERS
// Exporta todas las funciones
// Cada Funcion ESTA al tanto y escuchando todas las ACCIONES QUE SE DISPAREN
export default function* orders() {
   yield takeLatest(START_GET_ORDERS, getOrders);
   yield takeLatest(START_GET_ORDER, getOrder);
   yield takeLatest(START_GET_SENDERS, getSenders);
   yield takeLatest(START_SUBMIT_ORDER, submitOrder);
}
