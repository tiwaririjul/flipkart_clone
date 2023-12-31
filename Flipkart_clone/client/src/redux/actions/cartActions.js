import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
    } catch (error) {
        console.log('Error while calling cart API');
    }
};
export const IncrementCart = (id, qunatity) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.INCREMENT, payload: { id, qunatity } })
    } catch (error) {
        console.log("Error While Updating the Quantity...");
    }

}

export const DecrementCart = (id, qunatity) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.DECREMENT, payload: { id, qunatity } })
    } catch (error) {
        console.log("Error While Updating the Quantity...");
    }

}
export const removeFromCart = (id) => (dispatch) => {
    if(id.toString().length < 8){
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            payload: id
        })
    }else{
        dispatch({
            type: actionTypes.REMOVE_MOBILE_FROM_CART,
            payload: id
        })
    }
};