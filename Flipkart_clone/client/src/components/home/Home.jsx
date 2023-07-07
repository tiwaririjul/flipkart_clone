import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import Header from "../header/Header";
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts  } from '../../redux/actions/productActions';
const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;
function Home() {
  // const getProducts = useSelector(state => state.getProducts);
  // const { products, error } = getProducts;
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </>
  );
}

export default Home;
