import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';

// TODO: correct img

const Product = ({ item, onClick }) => (
  <div className="product">
    <h3>{item.title}</h3>
    <img src="https://images-na.ssl-images-amazon.com/images/I/81pybH09vyL._SY355_.jpg" alt="" />
    <button onClick={()=>onClick(item)}>Add to cart</button>
  </div>
);

Product.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Product;
