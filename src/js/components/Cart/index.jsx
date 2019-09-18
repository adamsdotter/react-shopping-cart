import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartOverview from '../CartOverview/'
import './cart.scss';

const mapStateToProps = state => {
  return {
    count: state.cart.count,
    items: state.cart.items,
    sumTotal: state.cart.sumTotal
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
      const { items, count, sumTotal } = this.props;

      return (
        <div className="cart">
          <h1>Cart</h1>
          <p>Product count: { count }</p>
          <p>Total amount: { sumTotal }</p>
          <button onClick={this.toggleViewCart}>View cart</button>
          { this.state.expanded ? <CartOverview items={items} /> : null }
        </div>
      );
    }
}

Cart.propTypes = {
  count: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  sumTotal: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Cart);
