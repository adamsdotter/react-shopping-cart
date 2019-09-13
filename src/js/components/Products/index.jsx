import React from 'react';
import Product from '../Product';
import './products.scss';

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      error: null
    };
  }

  products() {
    const { error } = this.state;
    let products = this.state.products;

    if (products.length) {
      products = this.state.products.map((item) => {
        console.log('ITEM:', item);
        return <li key={item.id}><Product item={item} /></li>;
      });
    }

    return error ? error : products;
  }

  fetchProducts() {
    this.setState({ error: null });

    fetch('http://localhost:8181/products')
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(products => {
        this.setState({ products })
      })
      .catch(err => {
        const error = `Error: ${err}`;
        this.setState({ error });
      });
  }

  componentDidMount() {
    this.fetchProducts();
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

export default Products;
