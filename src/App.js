import React from 'react';

const App = () => (
  <div className="cart">
    <h1>Shopping cart</h1>
  </div>
);

export default App;


// const container = document.createElement('div');
// document.body.appendChild(container);
//
// // NOTE: The code below is just to make sure everything is working fine
//
// container.innerText = 'Loading...';
//
// fetch('http://localhost:8181/products')
//   .then(
//     response =>
//       response.ok
//         ? response.json()
//         : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
//   )
//   .then(products => {
//     container.innerText = "It's working!\n\n";
//     container.innerText += 'Found sample products:\n';
//     products.forEach(product => (container.innerText += `- ${product.title}\n`));
//   })
//   .catch(error => {
//     container.innerText = `Error: ${error}`;
//   });
