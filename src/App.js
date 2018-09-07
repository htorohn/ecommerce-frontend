import React, { Component } from 'react';
//import { createBrowserHistory } from "history";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./views/HomePage/HomePage"
import ProductDetail from "./views/Products/ProductDetail"

//var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductDetail} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
