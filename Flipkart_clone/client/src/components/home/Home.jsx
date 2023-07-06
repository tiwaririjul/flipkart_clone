import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import Header from "../header/Header";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;
function Home() {
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
