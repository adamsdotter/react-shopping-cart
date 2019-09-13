import React from 'react';
import './product.scss';

const Product = ({ item }) => (
  <div className="product">
    <h3>{item.title}</h3>
    <img src="https://images-na.ssl-images-amazon.com/images/I/81pybH09vyL._SY355_.jpg" alt="" />
    <button>Add to cart</button>
  </div>
);

export default Product;
