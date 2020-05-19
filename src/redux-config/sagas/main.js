import { all } from "redux-saga/effects";
import orders from "./orders";

export default function* rootSaga() {
   // Recibe un ARREGLO DE WATCHERS
   yield all([orders()]);
}
