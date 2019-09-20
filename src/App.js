import React from 'react';
import Products from './js/components/Products/';
import Cart from './js/components/Cart/';

// TODO:
// - add error handling to api calls
// - slide down cart on expadnd

function App() {
  return (
    <div className="app">
      <Cart />
      <Products />
    </div>
  );
};

export default App;
