import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button, styled } from "@mui/material";
import { addToCart ,IncrementCart,DecrementCart} from "../../redux/actions/cartActions";
const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({item,removeItemFromCart}) => {
    const dispatch = useDispatch();
    const [ counter, setCounter ] = useState(1);
    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
        dispatch(IncrementCart(item.id || item.product_id, counter))
    };
    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
        if(counter<1){
            removeItemFromCart(item.id ||  item.product_id);
        }
        dispatch(DecrementCart(item.id ||  item.product_id, counter))
    };
    // const addItemtoCart = () => {

    //     dispatch(addToCart(id, qunatity))
    //     navigate('/cart')
    //   }
    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} >-</StyledButton>
            <Button disabled>{item.quantity}</Button>
            <StyledButton onClick={() => handleIncrement()} >+</StyledButton>
        </Component>
    );
}

export default GroupedButton;