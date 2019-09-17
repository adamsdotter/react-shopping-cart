import { FETCH_PRODUCTS, ADD_TO_CART } from '../constants/action-types';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
