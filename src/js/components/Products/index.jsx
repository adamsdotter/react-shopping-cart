import React from 'react';
import { connect } from 'react-redux';
import { addToCart, fetchProducts } from '../../actions/';
import Product from '../Product';
import './products.scss';

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addToCart(product)),
    fetchProducts: () => dispatch(fetchProducts())
  };
};

const mapStateToProps = state => {
  return { products: state.products.items };
};

class Products extends React.Component {
  products() {
    let { products } = this.props;

    return products.length
      ? products.map((item) => (<li key={item.id}><Product item={item} onClick={this.onClick.bind(this)} /></li>))
      : products;
  }

  onClick(id) {
    this.props.addToCart({ id });
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="products">
        <h1>Products</h1>
        <ul className="product-list">{this.products()}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
