import axios from 'axios';
import {
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCHING
} from './types';
import { MAIN_URL } from '../../constants/Config';

export const latestProductsFetch = () => {
    return (dispatch) => {
        dispatch({ type: PRODUCTS_FETCHING });
        
        console.log(`${MAIN_URL}/api/v1/products`)
        // axios.get(`${MAIN_URL}/api/v1/products`)
        //     .then(response => {
        //         dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: response });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         dispatch({ type: PRODUCTS_FETCH_ERROR, payload: error})
        //     });
        var request = require('superagent')
        request
            .get(`${MAIN_URL}/api/v1/products`)
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-origin', '*')
            // .set('Access-Control-Allow-Methods', 'PUT, DELETE, GET')
            .then ((response) => {
                //console.log(response.body)
                dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: response.body });
            })
            .catch ((error) => {
                console.log(error);
                dispatch({ type: PRODUCTS_FETCH_ERROR, payload: error})
            })
    };
};