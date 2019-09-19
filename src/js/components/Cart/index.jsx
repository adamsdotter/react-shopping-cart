import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartOverview from '../CartOverview/'
import './cart.scss';

const mapStateToProps = state => {
  return {
    count: state.cart.count,
    items: state.cart.items,
    sumTotal: state.cart.sumTotal,
    currency: state.cart.currency
  };
};

class Cart extends React.Component {
    constructor() {
      super();

      this.state = {
        expanded: true,
        animateIcon: false
      };

      this.toggleViewCart = this.toggleViewCart.bind(this);
      this.timer = null;
    }

    toggleViewCart() {
      this.setState({ expanded: !this.state.expanded });
    }

    componentDidUpdate(prevProps) {
      if (prevProps.count < this.props.count) {
        this.setState({ animateIcon: true });

        this.timer = setTimeout(() => {
          this.setState({ animateIcon: false });
        }, 500);
      }
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    render() {
      const { items, count, sumTotal, currency } = this.props;

      return (
        // <div className={`cart ${this.state.expanded ? 'cart--expanded' : 'cart--collapsed'}`}>
        <div className="cart">
          <h1 className="visually-hidden">Avensia's webshop</h1>
          <button className="toggle-cart" onClick={this.toggleViewCart}>
            <span className="toggle-cart__text">View cart</span>
            <span
              className={`toggle-cart__icon ${this.state.animateIcon ? 'animate' : ''}`}
              role="img"
              aria-hidden>
              &#128722;
            </span>
            { count }
          </button>

          { this.state.expanded ? <CartOverview items={items} sumTotal={sumTotal} currency={currency} /> : null }
        </div>
      );
    }
}

Cart.propTypes = {
  count: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  sumTotal: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Cart);
