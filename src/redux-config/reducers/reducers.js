import { SET_LOGIN, END_GET_ORDERS, NEW_ORDER } from "../actions/actions";

// reducer recibe el estado ACTUAL DEL STORE Y AGREGA DATOS dependiendo a la accion
export const reducers = (estado, accion) => {
   switch (accion.type) {
      case SET_LOGIN:
         return {
            ...estado,
            usuario: accion.username,
            password: accion.password,
         };
      case END_GET_ORDERS:
         return {
            ...estado,
            orders: accion.orders,
         };
      case NEW_ORDER:
         return {
            ...estado,
            orders: estado.orders.concat(accion.new_order),
         };
      default:
         return estado;
   }
};
