import { PRODUCTS_LOADED, ADD_TO_CART, CART_COUNT } from '../constants/action-types';

const initialState = {
  products: [],
  cart: {
    expanded: false,
    count: 0,
    sumTotal: 0,
    products: []
  }
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return {
        ...state,
        products: state.products.concat(action.payload)
      };
    case CART_COUNT:
      return {
        ...state,
        cart: {
          ...state.cart,
          count: action.payload
        }
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          count: state.cart.count + 1
        }
      };

    default:
      return state
  }
};

export default rootReducer;
