import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT } from './productActions';
import faker from 'faker';

const initialState = {
  products: Array.from({ length: 8 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.fashion(),
    quantity : 0
  })),
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
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
    case INCREMENT_PRODUCT:
      return{
        ...state,
        products: state.products.map((product) => product.id === action.payload ? {...product, quantity : quantity+1} : product)
      };
    case DECREMENT_PRODUCT:
      return{
        ...state,
        products: state.products.map((product) => product.id === action.payload ? {...product, quantity : quantity+1} : product).filter(product=> product.quantity>0)

      }
    default:
      return state;
  }
};

export default productReducer;
