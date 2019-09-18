import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCartCount } from '../../actions';
import './cart.scss';

const mapDispatchToProps = dispatch => {
  return {
    getCartCount: () => dispatch(fetchCartCount())
  };
};

const mapStateToProps = state => {
  return { cartCount: state.cart.count };
};

class Cart extends React.Component {

    componentDidMount() {
      this.props.getCartCount();
    }

    render() {
      return (
        <div className="cart">
          <h1>Cart</h1>
          Product count {this.props.cartCount}
        </div>
      );
    }
}

Cart.propTypes = {
  cartCount: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
