import {
   END_SET_LOGIN,
   END_GET_ORDERS,
   END_GET_ORDER,
   END_GET_SENDERS,
   END_GET_DISHES,
   END_GET_CATEGORIES,
   END_GET_CUSTOMERS,
   END_GET_CUSTOMER,
} from "../actions/actions";

// reducer recibe el estado ACTUAL DEL STORE Y AGREGA DATOS dependiendo a la accion
export const reducers = (estado, accion) => {
   switch (accion.type) {
      case END_SET_LOGIN:
         return {
            ...estado,
            token: accion.token,
         };
      case END_GET_ORDER:
         // console.log(accion.order);
         return {
            ...estado,
            receiveOrder: accion.order,
         };
      case END_GET_ORDERS:
         return {
            ...estado,
            orders: accion.orders,
         };
      case END_GET_SENDERS:
         return {
            ...estado,
            workersSenders: accion.senders,
         };
      case END_GET_DISHES:
         return {
            ...estado,
            dishes: accion.dishes,
         };
      case END_GET_CATEGORIES:
         return {
            ...estado,
            categories: accion.categories,
         };
      case END_GET_CUSTOMERS:
         return {
            ...estado,
            customers: accion.customers,
         };
      case END_GET_CUSTOMER:
         return {
            ...estado,
            customer: accion.customer,
         };
      // case NEW_ORDER:
      //    return {
      //       ...estado,
      //       orders: estado.orders.concat(accion.new_order),
      //    };
      default:
         return estado;
   }
};
