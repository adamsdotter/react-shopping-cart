import React from 'react';

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      products: 'Loading products...',
      error: null
    };
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
      .then(items => {
        const products = items.map(item => item.title);
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
        {this.state.products || this.state.error }
      </div>
    );
  }
}

export default Products;
