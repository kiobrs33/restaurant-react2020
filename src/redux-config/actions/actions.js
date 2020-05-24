// Se crea el IDENTIFICADOR por separado y luego se pasa a la ACCION
export const SET_LOGIN = "SET_LOGIN";
export const START_GET_ORDERS = "START_GET_ORDERS";
export const END_GET_ORDERS = "END_GET_ORDERS";
export const NEW_ORDER = "NEW_ORDER"; //Sin usar
export const START_GET_ORDER = "START_GET_ORDER";
export const END_GET_ORDER = "END_GET_ORDER";
export const START_GET_SENDERS = "START_GET_SENDERS";
export const END_GET_SENDERS = "END_GET_SENDERS";
export const START_SUBMIT_ORDER = "START_SUBMIT_ORDER";
export const START_GET_DISHES = "START_GET_DISHES";
export const END_GET_DISHES = "END_GET_DISHES";

// Se exporta una FUNCION que recibe VALOR o DATA desde el COMPONENTE
// TYPE es el identificador de la ACCION
export const setLogin = (val1, val2) => ({
   type: SET_LOGIN,
   username: val1,
   password: val2,
});

// Para obtener una lista de PEDIDOS
export const startGetOrders = () => ({
   type: START_GET_ORDERS,
});
export const endGetOrders = () => ({
   type: END_GET_ORDERS,
});

// Para obtener un PEDIDO
export const startGetOrder = (id_order) => ({
   type: START_GET_ORDER,
   id_order,
});
export const endGetOrder = () => ({
   type: END_GET_ORDER,
});

// Para obtener lista de TRANSPORTADORES
export const startGetSenders = () => ({
   type: START_GET_SENDERS,
});
export const endGetSenders = () => ({
   type: END_GET_SENDERS,
});

// Atender Pedido
export const startSubmitOrder = (state_order, id_order, id_sender) => ({
   type: START_SUBMIT_ORDER,
   state_order,
   id_order,
   id_sender,
});

// Para obtener lista de PLATOS
export const startGetDishes = () => ({
   type: START_GET_DISHES,
});
export const endGetDishes = () => ({
   type: END_GET_DISHES,
});

// export const newOrder = (payload) => ({
//    type: NEW_ORDER,
//    new_order: payload,
// });
