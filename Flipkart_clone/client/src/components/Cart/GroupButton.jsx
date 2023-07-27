import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button, styled } from "@mui/material";
import { addToCart ,IncrementCart} from "../../redux/actions/cartActions";
const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({id}) => {
    const dispatch = useDispatch();
    const [ counter, setCounter ] = useState(1);
    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
        dispatch(IncrementCart(id, counter))
    };
    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
       // dispatch(addToCart(id, counter))
    };
    // const addItemtoCart = () => {

    //     dispatch(addToCart(id, qunatity))
    //     navigate('/cart')
    //   }
    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} disabled={counter == 0}>-</StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()} disabled={counter == 10}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;