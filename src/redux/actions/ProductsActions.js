import {
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCHING,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_ERROR,
    PRODUCT_FETCHING
} from './types';
import { MAIN_URL } from '../../constants/Config';

export const latestProductsFetch = () => {
    return (dispatch) => {
        dispatch({ type: PRODUCTS_FETCHING });
        //console.log(`${MAIN_URL}/api/v1/products`)
        var request = require('superagent')
        request
            .get(`${MAIN_URL}/api/v1/products`)
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-origin', '*')
            .then ((response) => {
                dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: response.body });
            })
            .catch ((error) => {
                //console.log(error);
                dispatch({ type: PRODUCTS_FETCH_ERROR, payload: error})
            })
    };
};

export const getProduct = (id) => {
    return (dispatch) => {
        dispatch({ type: PRODUCT_FETCHING });
        //console.log(`${MAIN_URL}/api/v1/products`)
        var request = require('superagent')
        request
            .get(`${MAIN_URL}/api/v1/products/${id}`)
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-origin', '*')
            .then ((response) => {
                dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: response.body });
            })
            .catch ((error) => {
                console.log(error);
                dispatch({ type: PRODUCT_FETCH_ERROR, payload: error})
            })
    }
}

export const getTaxonProducts = (taxonId, per_page = 25) => {
    return (dispatch) => {
        dispatch({ type: PRODUCTS_FETCHING });
        //console.log(`${MAIN_URL}/api/v1/products`)
        var request = require('superagent')
        request
            .get(`${MAIN_URL}/api/v1/taxons/products`)
            .query({id: taxonId})
            .query({per_page: per_page})
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-origin', '*')
            .then ((response) => {
                dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: response.body });
            })
            .catch ((error) => {
                console.log(error);
                dispatch({ type: PRODUCTS_FETCH_ERROR, payload: error})
            })
    }
}