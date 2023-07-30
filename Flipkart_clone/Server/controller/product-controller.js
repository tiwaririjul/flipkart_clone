import Product from "../model/productSchema.js";
import Mobile from "../model/Mobile.js";
export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.json(products);
  } catch (error) {}
};

export const getProductById = async (request, response) => {
  try {
    const products = await Product.findOne({ id: request.params.id });
    if(products){
      response.json(products);
    }else{
      const products = await Mobile.findOne({ product_id: request.params.id });
      response.json(products);
    }
    
  } catch (error) {}
};

export const getData = async (request, response) => {
  try {
    const products = await Mobile.find({}).limit(10);
    response.json(products);
  } catch (error) {}
};

export const getMobileProductByid= async (request, response) => {
  try {
    const products = await Mobile.findOne({ product_id: request.params.id });
   // console.log(products);
    response.json(products);
  } catch (error) {}
};