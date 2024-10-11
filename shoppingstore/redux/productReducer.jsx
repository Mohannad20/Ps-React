import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from './actions';

const initialState = {
  products : []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // Avoid duplicating products by checking if they already exist in the state
      const newProducts = action.payload.filter(newProduct => {
        return !state.products.some(existingProduct => existingProduct.id === newProduct.id);
      });

      return {
        ...state,
        products: [...state.products, ...newProducts],  // Only add new, unique products
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    
    default:
      return state;
  }
};