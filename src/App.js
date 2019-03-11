import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./views/HomePage/HomePage"
import ProductDetail from "./views/Products/ProductDetail"
import Shop from "./views/Shop/Shop"
import Cart from "./views/Cart/Cart"
import Login from "./views/User/Login"
import { taxonomiesFetch } from './redux/actions'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./assets/css/react-slick.css"

class App extends Component {
  componentWillMount(){
    this.props.taxonomiesFetch()
  }
  
  render() {
    return (
      //<div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/shop/:taxon" component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={Login} />
        </Switch>
        </BrowserRouter>
      //</div>
    );
  }
}

export default connect(null, { taxonomiesFetch })(App);
