export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
export const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';

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
  type: INCREMENT_PRODUCT,
  payload: id,
});
export const decrementQuantity = (id) => ({
  type: DECREMENT_PRODUCT,
  payload: id,
});


