import React, { useState } from 'react'
import { useEffect } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getMobileProducts } from '../../redux/actions/productActions';
const Category = () => {
    const { Mobiproducts } = useSelector((state) => state.getMobileProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMobileProducts());
    }, [dispatch]);
    return (
        <div>
          {Mobiproducts ? (
            Mobiproducts.map((product) => {
                return <Product key={product.id} product={product}/>
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    
}

export default Category
