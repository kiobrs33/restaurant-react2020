import { all } from "redux-saga/effects";
import orders from "./orders";
import dishes from "./dishes";

export default function* rootSaga() {
   // Recibe un ARREGLO DE WATCHERS
   yield all([orders(), dishes()]);
}
