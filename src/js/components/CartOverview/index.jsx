import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/';
import './cart-overview.scss';

const getItem = (item) => {
  return <CartItem key={item.id} item={item} />
};

const CartOverview = ({ items, sumTotal }) => {
  return (
    <div className="cart-overview">
      { items ? items.map(item => getItem(item)) : null }
      <p>Total sum { sumTotal }</p>
    </div>
  );
}

CartOverview.propTypes = {
  items: PropTypes.array.isRequired,
  sumTotal: PropTypes.number.isRequired
}

export default CartOverview;
