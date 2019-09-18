import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartOverview from '../CartOverview/'
import './cart.scss';

const mapStateToProps = state => {
  return {
    cartCount: state.cart.count,
    items: state.cart.items
  };
};

class Cart extends React.Component {
    constructor() {
      super();

      this.state = {
        expanded: true
      };

      this.toggleViewCart = this.toggleViewCart.bind(this);
    }

    toggleViewCart() {
      this.setState({ expanded: !this.state.expanded });
    }

    render() {
      const { items, cartCount } = this.props;

      return (
        <div className="cart">
          <h1>Cart</h1>
          Product count {cartCount}
          <button onClick={this.toggleViewCart}>View cart</button>
          { this.state.expanded ? <CartOverview items={items} /> : null }
        </div>
      );
    }
}

Cart.propTypes = {
  cartCount: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Cart);
