import { all } from "redux-saga/effects";
import orders from "./orders";
import dishes from "./dishes";
import categories from "./categories";
import customers from "./customers";
import workers from "./workers";

export default function* rootSaga() {
   // Recibe un ARREGLO DE WATCHERS
   yield all([orders(), dishes(), categories(), customers(), workers()]);
}
