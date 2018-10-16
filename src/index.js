import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto'
import reducers from './redux/reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import persistDataLocally from './middleware/persist-data-locally'
//import "./assets/scss/material-kit-react.css?v=1.2.0";



let retrievedState
try {
  retrievedState = localStorage.getItem('ecommerceState')
  if (retrievedState === null){
    retrievedState = {}
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err){
  retrievedState = {}
}

const store = createStore(
    reducers,
    retrievedState,
    applyMiddleware(thunk, persistDataLocally)
);


ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker()