import React from 'react';
import PropTypes from 'prop-types';
import { HOST } from '../../constants';
import './product.scss';

const Product = ({ item, onClick, inCart }) => {
  const { title, prices, imageUrl } = item;
  const imgSrc = `${HOST}${imageUrl}`;
  const price = prices[0] ? `${Math.round(prices[0].amount)} ${prices[0].currency}` : null;

  return (
    <div className="product">
      <img src={imgSrc} alt="" />
      <h3>{title}</h3>
      <p className="product__price">{price}</p>
      <button disabled={inCart} onClick={()=>onClick(item.id)}>
        <span>Add to cart</span>
      </button>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  inCart: PropTypes.number
}

export default Product;
