import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {  getProductReducer,getProductDetailsReducer ,getMobileProductsReducer,getMobileProductDetailsReducer} from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductsDetails:getProductDetailsReducer,
    getMobileProducts:getMobileProductsReducer,
    getMobileProductDetail:getMobileProductDetailsReducer
})

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;