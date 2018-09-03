import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto'
import reducers from './redux/reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./assets/scss/material-kit-react.css?v=1.2.0";

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();