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
        <div class="cart">
          <h1 className="visually-hidden">Avensia's webshop</h1>
          <button onClick={this.toggleViewCart}>
            <span className="text">View cart</span>
            <span role="img" aria-label="Cart items">&#128722;</span>
            { count }
          </button>

          { this.state.expanded ? <CartOverview items={items} sumTotal={sumTotal} /> : null }
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
