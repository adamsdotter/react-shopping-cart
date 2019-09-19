import React from 'react';
import PropTypes from 'prop-types';
import { HOST } from '../../constants';
import './product.scss';

const Product = ({ item, onClick, inCart }) => {
  const { title, prices, imageUrl } = item;
  const imgSrc = `${HOST}${imageUrl}`;
  const price = prices[0] ? `${prices[0].amount} ${prices[0].currency}` : null;

  return (
    <div className="product">
      <img src={imgSrc} alt="" />
      <h3>{title}</h3>
      <p class="price">{price}</p>
      <button disabled={inCart} onClick={()=>onClick(item.id)}><span>Add to cart</span></button>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  inCart: PropTypes.number
}

export default Product;
