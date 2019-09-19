import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/';
import './cart-overview.scss';

const getItem = item => <li><CartItem key={item.id} item={item} /></li>;

const CartOverview = ({ items, sumTotal }) => {
  return (
    <div className="cart-overview">
      { items.length
        ? (
          <div>
            <ul>{items.map(item => getItem(item))}</ul>
            <p>Total sum { sumTotal }</p>
          </div>
        )
        : <p className="empty-cart">Your cart is empty <span aria-hidden>&#128546;</span></p>
      }
    </div>
  );
}

CartOverview.propTypes = {
  items: PropTypes.array.isRequired,
  sumTotal: PropTypes.number.isRequired
}

export default CartOverview;
