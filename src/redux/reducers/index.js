import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer'
import Taxonomies from './TaxonomiesReducer'
import ProductImage from './ProductImageReducer'
//import CartReducer from './CartReducer'
//import OrderReducer from './OrderReducer'

export default combineReducers({
    productsList: ProductsReducer,
    taxonomies: Taxonomies,
    productImage: ProductImage
    //cart: CartReducer,
    //order: OrderReducer
});