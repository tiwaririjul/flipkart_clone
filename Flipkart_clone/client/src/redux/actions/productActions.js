import axios from 'axios';
import * as actionTypes from '../constants/productConstants';
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};
export const getProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};

export const getMobileProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/getdata`);
        dispatch({ type: actionTypes.GET_MOBILE_DATA_SUCCES, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_MOBILE_DATA_FAILURE, payload: error.response });
    }
};

export const getMobileProductDetail = (id) => async (dispatch) => {
    try {
       // dispatch({ type: actionTypes.GET_MOBILE_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/mobileproduct/${id}`);
        
        dispatch({ type: actionTypes.GET_MOBILE_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_MOBILE_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};