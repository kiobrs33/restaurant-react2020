import { put, call, takeLatest } from "redux-saga/effects";
import {
   START_GET_ORDERS,
   END_GET_ORDERS,
   START_GET_ORDER,
   END_GET_ORDER,
   START_GET_SENDERS,
   END_GET_SENDERS,
   START_SUBMIT_ORDER,
} from "../actions/actions";

// APICALL - (METHOD, URL, HEADERS, DATA)
import apiCall from "../api/apiCall";

const mainUrl = "https://rest-back-end.herokuapp.com";

// Obteniendo PEDIDOS
function* getOrders() {
   try {
      const result = yield call(apiCall, "GET", `${mainUrl}/api/orders/all`, {
         token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
      });
      yield put({ type: END_GET_ORDERS, orders: result.orders });
   } catch (error) {
      console.log(error);
   }
}

// Obteniendo INFORMACION DEL PEDIDO
function* getOrder(action) {
   try {
      const result = yield call(
         apiCall,
         "GET",
         `${mainUrl}/api/orders/showOne/${action.id_order}`,
         {
            token:
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
         }
      );
      yield put({ type: END_GET_ORDER, order: result.data });
   } catch (error) {
      console.log(error);
   }
}

// Obteniendo TRABAJADORES del tipo REMITENTE
function* getSenders() {
   try {
      const result = yield call(
         apiCall,
         "GET",
         `${mainUrl}/api/worker/all_Workers_Senders`,
         {
            token:
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
         }
      );
      yield put({ type: END_GET_SENDERS, senders: result.data });
   } catch (error) {
      console.log(error);
   }
}

function* submitOrder(action) {
   try {
      // Actulizando EL ESTADO DE LA ORDEN
      const result1 = yield call(
         apiCall,
         "PUT",
         `${mainUrl}/api/orders/update/${action.id_order}`,
         {
            token:
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
            "Content-Type": "application/json",
         },
         // { state: action.state_order }
         JSON.stringify({
            state: action.state_order,
            "date.date_acceptance": action.fecha,
         })
      );

      const result2 = yield call(
         apiCall,
         "PUT",
         `${mainUrl}/api/worker/update_orders_worker/${action.id_sender}`,
         {
            token:
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
            "Content-Type": "application/json",
         },
         JSON.stringify({ id_order: action.id_order })
      );
   } catch (error) {
      console.log(error);
   }
}

// WATCHERS
// Exporta todas las funciones
// Cada FUNCION ESCUCHANDO todas las ACCIONES QUE SE DISPAREN desde los componentes
export default function* orders() {
   yield takeLatest(START_GET_ORDERS, getOrders);
   yield takeLatest(START_GET_ORDER, getOrder);
   yield takeLatest(START_GET_SENDERS, getSenders);
   yield takeLatest(START_SUBMIT_ORDER, submitOrder);
}
