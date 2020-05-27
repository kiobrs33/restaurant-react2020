import { put, call, takeLatest } from "redux-saga/effects";
import {
   START_GET_CATEGORIES,
   END_GET_CATEGORIES,
   SUBMIT_NEW_CATEGORY,
} from "../actions/actions";
// import axios from "axios";
import apiCall from "../api/apiCall";

// Aqui las funciones respresentan PETICIONES A LA API - CRUD
function* getCategories() {
   try {
      const result = yield call(
         apiCall,
         "get",
         "https://rest-back-end.herokuapp.com/api/categories/all",
         {
            token:
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoia2lvYnJzMzMiLCJwYXNzd29yZCI6IiQyYSQxMCQvbVVoRFkwbzE3UDN4NmpieHQ2SzZPUzc5TFYxZWFrTDQyQVdSZUg1T1NOQzdkMEN3b1Y1QyIsImlhdCI6MTU4ODQ4ODM4MSwiZXhwIjoxNTkxMDgwMzgxfQ.YQy316pqdUfVcjSmUVGBO0DRdSGRK0wj7KLzcHNDjt0",
         }
      );
      //   console.log(result.data);
      yield put({ type: END_GET_CATEGORIES, categories: result.data });
   } catch (error) {
      console.log(error);
   }
}

function* submitNewCategory(action) {
   var newForm = new FormData();
   newForm.append("name", action.data.name);
   try {
      const result = yield call(
         apiCall,
         "post",
         "https://rest-back-end.herokuapp.com/api/categories/create",
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
export default function* categories() {
   yield takeLatest(START_GET_CATEGORIES, getCategories);
   yield takeLatest(SUBMIT_NEW_CATEGORY, submitNewCategory);
}
