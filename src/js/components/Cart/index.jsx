import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './cart.scss';

const mapStateToProps = state => {
  return { cartTotal: state.cartTotal };
};

let Cart = ({ cartTotal }) => (
  <div className="cart">
    <h1>Carty</h1>
    Product count {cartTotal}
  </div>
);

Cart.propTypes = {
  cartTotal: PropTypes.number.isRequired
}

Cart = connect(mapStateToProps)(Cart);

export default Cart;
