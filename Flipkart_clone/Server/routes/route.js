import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import {  getProducts,getProductById } from '../controller/product-controller.js';
import { Checkout,Paymentverification } from "../controller/payment-controller.js";
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products",getProducts);
router.get('/product/:id', getProductById);



router.post('/checkout', Checkout);
router.post('/paymentverification', Paymentverification);
router.get('/api/getkey',(req,res)=>{
    res.status(200).json({key:process.env.RAZOPAY_API_KEY});
})
export default router;
