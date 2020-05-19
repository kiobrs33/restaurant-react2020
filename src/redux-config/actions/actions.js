// Se crea el IDENTIFICADOR por separado y luego se pasa a la ACCION
export const SET_LOGIN = "SET_LOGIN";
export const START_GET_ORDERS = "START_GET_ORDERS";
export const END_GET_ORDERS = "END_GET_ORDERS";
export const NEW_ORDER = "NEW_ORDER";

// Se exporta una FUNCION que recibe VALOR o DATA desde el COMPONENTE
// TYPE es el identificador de la ACCION
export const setLogin = (val1, val2) => ({
   type: SET_LOGIN,
   username: val1,
   password: val2,
});

export const startGetOrders = () => ({
   type: START_GET_ORDERS,
});

export const endGetOrders = () => ({
   type: END_GET_ORDERS,
});

export const newOrder = (payload) => ({
   type: NEW_ORDER,
   new_order: payload,
});
