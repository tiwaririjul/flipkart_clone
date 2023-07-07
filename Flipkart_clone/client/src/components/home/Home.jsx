import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import MidSlide from "./MidSlide";
import Header from "../header/Header";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import MidSection from "./MidSection";
const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;
function Home() {
  const { products } = useSelector((state) => state.getProducts);
  // const { products, error } = getProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        {/* <MidSlide products={products} title="Deal of the day" timer={true} /> */}
        <MidSection />
        <Slide products={products} title="Discount for you" timer={false} />
        <Slide products={products} title="Suggestion Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Deal of the day" timer={false} />
        <Slide products={products} title="Deal of the day" timer={false} />
      </Component>
    </>
  );
}

export default Home;
