import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetails ,getMobileProductDetail} from "../../redux/actions/productActions";
import { styled, Box, Typography, Grid } from "@mui/material";
import Actionitems from "./Actionitems";
import ProductDetail from "./ProductDetail";

//css
const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));
const RightContainer = styled(Grid)`
  margin-top: 50px;
  & > p {
    margin-top: 10px;
  }
`;

function MobileView() {
  const dispatch = useDispatch();
  const { id } = useParams();
   const {mobileproduct} = useSelector((state)=> state.getMobileProductDetail);
  useEffect(() => {
    dispatch(getMobileProductDetail(id));
  },[id,dispatch]);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Component>
      {mobileproduct  && Object.keys(mobileproduct).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitems product={mobileproduct} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={mobileproduct } />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
}

export default MobileView;
