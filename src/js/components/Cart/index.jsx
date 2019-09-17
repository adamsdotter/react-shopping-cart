import React from 'react';
import './cart.scss';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      products: []
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div className="cart">
        <h1>Carty</h1>
        Product count {products.length}
        <div className="products">{products}</div>
      </div>
    );
  }
}

export default Cart;
