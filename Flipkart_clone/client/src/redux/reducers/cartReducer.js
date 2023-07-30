import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            let existItem;
            if(Object.keys(item).length>15){
                existItem = state.cartItems.find(product => product.product_id === item.product_id);
                if (existItem) {
                    return {...state, cartItems:[...state.cartItems] };
                } 
                else {
                    return { ...state, cartItems: [...state.cartItems, item] }
                }
            }else{
                existItem = state.cartItems.find(product => product.id === item.id);
                if (existItem) {
                        return {...state, cartItems:[...state.cartItems] };
                } else {
                    return { ...state, cartItems: [...state.cartItems, item] }
                }
            }
            
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
        case actionTypes.REMOVE_MOBILE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(product => product.product_id !== action.payload)
            }
        case actionTypes.INCREMENT:
            const productId = action.payload;
            let updatedCartItems;
            if(productId.id.toString().length > 8){
                updatedCartItems = state.cartItems.map((item) => {
                    if (item.product_id === productId.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            }else{
                updatedCartItems = state.cartItems.map((item) => {
                   if (item.id === productId.id) {
                       return { ...item, quantity: item.quantity + 1 };
                   }
                   return item;
               });
            }
            return { ...state, cartItems: updatedCartItems };
        case actionTypes.DECREMENT:
            const productId2 = action.payload;
            let updatedCartItems2;
            if(productId2.id.toString().length > 8){
                updatedCartItems2 = state.cartItems.map((item) => {
                    if (item.product_id === productId2.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
            }else{
                updatedCartItems2 = state.cartItems.map((item) => {
                   if (item.id === productId2.id) {
                       return { ...item, quantity: item.quantity - 1 };
                   }
                   return item;
               });
            }
            return { ...state, cartItems: updatedCartItems2 };
        default:
            return state;
    }
}