import React, { useState, useContext } from "react";

import { Box, Typography, Badge, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Profile from "./Profile";

import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  color: 'inherit',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  }
}));


const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    fontSize: 12,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    background: "#2874f0",
    color: "#FFFFFF",
  },
}));

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  // const { account, setAccount } = useContext(LoginContext);

  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  const { account, setAccount } = useContext(DataContext);

  console.log(account);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography>cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
