import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0 0 300px !important",
  overflowX: "overlay",
  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
  },
}));
const Image = styled("img")({
  width: "auto",
  height: "180px",
});
const Product = ({ product }) => {
  //console.log(product.img_url);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Link
      to={`mobileproduct/${product.product_id}`}
      style={{ textDecoration: "none" }}
    >
      <Component>
        <Box style={{ display: "flex" }}>
          <Image src={product.image_url} alt="" />
          <Box style={{ marginLeft: "10px" }}>
            <Typography>{product.model}</Typography>
            <Typography>Rating {product.rating}</Typography>
            <ul>
              <li>Ram {product.ram_capacity}</li>
              <li>Rom {product.internal_memory}</li>
              <li>Battery {product.battery_capacity} Mh</li>
              <li>Size : {product.screen_size}</li>
              <li> Network {product.has_5g ? "5G" : "4G"}</li>
              <li> price {product.price}</li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Typography style={{ fontSize: 20 }}>{product.price} INR</Typography>
          <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
            Discount 1200 INR
            <Box component="span">
              <img
                src={fassured}
                style={{ width: 77, marginLeft: 20 }}
                alt=""
              />
            </Box>
          </Typography>
          <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
            <Box component="span" style={{ fontSize: 28 }}>
              Free Delievery by Today
            </Box>
            &nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography>Upto 1000Rs Off on Exchange</Typography>
          <Typography>Bank Offer</Typography>
        </Box>
      </Component>
    </Link>
  );
};

export default Product;
