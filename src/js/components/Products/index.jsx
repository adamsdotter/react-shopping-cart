import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart, fetchProducts } from '../../actions/';
import Product from '../Product';
import './products.scss';

// refactor
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
    fetchProducts: () => dispatch(fetchProducts())
  };
};

const mapStateToProps = state => {
  return {
    items: state.products.items,
    cartItems: state.cart.items
  };
};

function Products({ items, cartItems, addToCart, fetchProducts }) {
  const getGroducts = () => {
    return items.length
      ? items.map((item) => (
        <li key={item.id}>
          <Product item={item} onClick={onClick.bind(this)} inCart={isItemInCart(item.id)} />
        </li>
      ))
      : items;
  }

  const isItemInCart = (id) => cartItems.filter(el => el.id === id).length;
  const onClick = (id) => addToCart(id);

  useEffect(
    () => {
      if (!items.length) {
        fetchProducts();
      }
    }, [items]
  )

  return (
    <div className="products">
      <h2>Our products</h2>
      <ul className="product-list">{getGroducts()}</ul>
    </div>
  );
}

Products.propTypes = {
  items: PropTypes.array.isRequired,
  cartItems: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
