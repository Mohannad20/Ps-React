export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const ADD_TO_CART='ADD_TO_CART';
export const REMOVE_FROM_CART='REMOVE_FROM_CART';

export const addToCart=(product)=>({
  type:ADD_TO_CART,
  payload:product
})
export const removeFromCart=(id)=>({
  type:REMOVE_FROM_CART,
  payload:id
})

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});
export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});
export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});


