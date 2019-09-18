import { FETCH_PRODUCTS, ADD_TO_CART, FETCH_CART_COUNT } from '../constants/action-types';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });

export const fetchCartCount = () => ({ type: FETCH_CART_COUNT });

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
