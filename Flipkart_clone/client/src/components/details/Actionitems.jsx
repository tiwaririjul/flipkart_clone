import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Button, Box, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
// import { payUsingPaytm } from "../../service/api";
// import { post } from "../../utils/paytm";
import { post } from "../../utils/paytm";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { payusingPaytm } from "../../service/api";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  borderRadius: 2,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

const Actionitems = ({ product }) => {
  let id;
  if (Object.keys(product).length > 15) {
    id = product.product_id;
  } else {
    id = product.id;
  }
  const addItemtoCart = () => {
    dispatch(addToCart(id, 1));
    navigate("/cart");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { account, setAccount } = useContext(DataContext);

  const buyNow = async () => {
    const res = await payusingPaytm(product,account);
    console.log(res);
  };
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl || product.image_url} alt="product" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, backgroundColor: "#ff9f00" }}
        onClick={() => addItemtoCart()}
      >
        <Cart />
        Add to cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{ backgroundColor: "#fb541b" }}
        onClick={() => buyNow()}
      >
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};
export default Actionitems;
