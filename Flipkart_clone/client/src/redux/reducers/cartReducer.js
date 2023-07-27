import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            console.log(item);
            const existItem = state.cartItems.find(product => product.id === item.id);
            if(existItem){
                return {
                    ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return  { ...state, cartItems: [...state.cartItems, item]}
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
        case actionTypes.INCREMENT:
            const item1=action.payload;
            const findItem = state.cartItems.find(product => product.id === item1.id);
            findItem.quantity=item1.quantity;
            return {
                ...state, cartItems: [...state.cartItems, findItem]
            }
        default:
            return state;
    }
}