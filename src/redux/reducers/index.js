import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer'
import Taxonomies from './TaxonomiesReducer'
//import CartReducer from './CartReducer'
//import OrderReducer from './OrderReducer'

export default combineReducers({
    productsList: ProductsReducer,
    taxonomies: Taxonomies
    //cart: CartReducer,
    //order: OrderReducer
});