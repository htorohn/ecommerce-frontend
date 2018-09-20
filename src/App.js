import React, { Component } from 'react';
//import { createBrowserHistory } from "history";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./views/HomePage/HomePage"
import ProductDetail from "./views/Products/ProductDetail"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./assets/css/react-slick.css"

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
