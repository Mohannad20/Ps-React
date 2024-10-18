import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from './actions';

const initialState = {
  products : []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newProducts = Array.isArray(action.payload) ? action.payload : [action.payload];  // Handle if action.payload is a single product or an array

      // Filter out duplicate products
      const mergedProducts = [
        ...state.products, 
        ...newProducts.filter(newProduct => 
          !state.products.some(existingProduct => existingProduct.id === newProduct.id)
        )
      ];

      return {
        ...state,
        products: mergedProducts,
      };
    }
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