import { PRODUCTS_LOADED, ADD_TO_CART } from '../constants/action-types';

const initialState = {
  cartTotal: 12,
  products: [],
  expandedCart: false
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return {
        ...state,
        products: state.products.concat(action.payload)
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartTotal: state.cartTotal + 1
      };

    default:
      return state
  }
};

export default rootReducer;
