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
export const START_GET_CATEGORIES = "START_GET_CATEGORIES";
export const END_GET_CATEGORIES = "END_GET_CATEGORIES";
export const START_GET_WORKERS = "START_GET_WORKERS";
export const END_GET_WORKERS = "END_GET_WORKERS";
export const START_GET_CUSTOMERS = "START_GET_CUSTOMERS";
export const END_GET_CUSTOMERS = "END_GET_CUSTOMERS";
export const START_GET_CUSTOMER = "START_GET_CUSTOMER";
export const END_GET_CUSTOMER = "END_GET_CUSTOMER";
export const SUBMIT_NEW_DISH = "SUBMIT_NEW_DISH";
export const SUBMIT_NEW_CATEGORY = "SUBMIT_NEW_CATEGORY";

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

// Para obtener lista de TRANSPORTADORES - TRABAJADORES
export const startGetSenders = () => ({
   type: START_GET_SENDERS,
});
export const endGetSenders = () => ({
   type: END_GET_SENDERS,
});

// Atender Pedido
export const startSubmitOrder = (state_order, id_order, id_sender, fecha) => ({
   type: START_SUBMIT_ORDER,
   state_order,
   id_order,
   id_sender,
   fecha,
});

// Para obtener lista de PLATOS
export const startGetDishes = () => ({
   type: START_GET_DISHES,
});
export const endGetDishes = () => ({
   type: END_GET_DISHES,
});

// Para obtener lista de CATEGORIAS
export const startGetCategories = () => ({
   type: START_GET_CATEGORIES,
});
export const endGetCategories = () => ({
   type: END_GET_CATEGORIES,
});

// Para obtener lista de TRABAJADORES
export const startGetWorkers = () => ({
   type: START_GET_WORKERS,
});
export const endGetWorkers = () => ({
   type: END_GET_WORKERS,
});

// Para obtener lista de Clientes
export const startGetCustomers = () => ({
   type: START_GET_CUSTOMERS,
});
export const endGetCustomers = () => ({
   type: END_GET_CUSTOMERS,
});

// Para obtener informacion del cliente
export const startGetCustomer = (id_customer) => ({
   type: START_GET_CUSTOMER,
   id_customer,
});
export const endGetCustomer = () => ({
   type: END_GET_CUSTOMER,
});

// Guardar nuevo PLATO
export const submitNewDish = (data) => ({
   type: SUBMIT_NEW_DISH,
   data: {
      name: data.name,
      price: data.price,
      id_category: data.id_category,
      archivo: data.archivo,
   },
});

// Guardar nuevo CATEGORIA
export const submitNewCategory = (data) => ({
   type: SUBMIT_NEW_CATEGORY,
   data,
});

// export const newOrder = (payload) => ({
//    type: NEW_ORDER,
//    new_order: payload,
// });
