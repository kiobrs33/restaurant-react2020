import { put, call, takeLatest } from "redux-saga/effects";
import { START_GET_COORDENADAS, END_GET_COORDENADAS } from "../actions/actions";

// APICALL - (METHOD, URL, HEADERS, DATA)
import apiCall from "../api/apiCall";

// Aqui las funciones respresentan PETICIONES A LA API - CRUD
function* getCoordenadas(action) {
   try {
      const result = yield call(
         apiCall,
         "get",
         `http://router.project-osrm.org/route/v1/driving/${lng_main},${lat_main};${lng_client},${lat_client}?geometries=geojson`
      );
      console.log(result);
      //   yield put({ type: END_GET_CATEGORIES, categories: result.data });
   } catch (error) {
      console.log(error);
   }
}

// WATCHERS
// Exporta todas las funciones
// Cada Funcion ESTA al tanto y escuchando todas las ACCIONES QUE SE DISPAREN
export default function* mapas() {
   yield takeLatest(START_GET_COORDENADAS, getCoordenadas);
}
