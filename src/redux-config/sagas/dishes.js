import { put, call, takeLatest } from "redux-saga/effects";
import {
   START_GET_DISHES,
   END_GET_DISHES,
   SUBMIT_NEW_DISH,
} from "../actions/actions";

// APICALL - (METHOD, URL, HEADERS, DATA)
import apiCall from "../api/apiCall";

// Aqui las funciones respresentan PETICIONES A LA API - CRUD
function* getDishes() {
   try {
      const result = yield call(
         apiCall,
         "GET",
         "https://rest-back-end.herokuapp.com/api/dishes/all",
         {
            token:
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
         }
      );
      //   console.log(result.data);
      yield put({ type: END_GET_DISHES, dishes: result.data });
   } catch (error) {
      console.log(error);
   }
}

function* submitNewDish(action) {
   var newForm = new FormData();
   newForm.append("archivo", action.data.archivo);
   newForm.append("name", action.data.name);
   newForm.append("price", action.data.price);
   newForm.append("id_category", action.data.id_category);
   try {
      const result = yield call(
         apiCall,
         "post",
         "https://rest-back-end.herokuapp.com/api/dishes/create",
         {
            token:
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
         },
         newForm
      );
      console.log(result);
      //   yield put({ type: END_GET_DISHES, dishes: result.data });
   } catch (error) {
      console.log(error);
   }
}

// WATCHERS
// Exporta todas las funciones
// Cada Funcion ESTA al tanto y escuchando todas las ACCIONES QUE SE DISPAREN
export default function* dishes() {
   yield takeLatest(START_GET_DISHES, getDishes);
   yield takeLatest(SUBMIT_NEW_DISH, submitNewDish);
}
