import React, { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { getMobileProducts } from "../../redux/actions/productActions";
import { Slider, Box, Typography, Button } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 5000,
    label: "5000",
  },
  {
    value: 10000,
    label: "10000",
  },
  {
    value: 50000,
    label: "50000",
  },
  {
    value: 100000,
    label: "100000",
  },
];

const productsPerPage = 5; // Number of products to display per page

const Category = () => {
  const { Mobiproducts } = useSelector((state) => state.getMobileProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMobileProducts());
  }, [dispatch]);

  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const filteredProducts = Mobiproducts
    ? Mobiproducts.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      )
    : [];

  // Calculate total number of pages based on the productsPerPage
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get the products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Box px={2}>
        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={priceRange}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={100000}
          step={1000}
          marks={marks}
        />
        <Typography>
          Min Price: {priceRange[0]} INR | Max Price: {priceRange[1]} INR
        </Typography>
      </Box>
      {currentProducts.length > 0 ? (
        currentProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })
      ) : (
        <p>No products in the selected price range.</p>
      )}
      {/* Pagination */}
      <Box mt={2} display="flex" justifyContent="center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            variant={currentPage === index + 1 ? "contained" : "outlined"}
            color="primary"
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
    </div>
  );
};

export default Category;
