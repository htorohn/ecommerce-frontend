import {
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCHING,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_ERROR,
    PRODUCT_FETCHING
} from '../actions/types';

const INITIAL_STATE = {
    isFetching: false,
    products: {},
    current_product: {},
    productFetching: true,
    error: false,
    productError: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //Lista de productos
        case PRODUCTS_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case PRODUCTS_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                products: action.payload
            }
        case PRODUCTS_FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            }
            
        //Detailed Product
        case PRODUCT_FETCHING:
            return {
                ...state,
                productFetching: true,
                current_product: {},
                productError: false
            }
        case PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                productFetching: false,
                productError: false,
                current_product: action.payload
            }
        case PRODUCT_FETCH_ERROR:
            return {
                ...state,
                productFetching: false,
                productError: true
            }
        //
        default:
            return state;
    }
};