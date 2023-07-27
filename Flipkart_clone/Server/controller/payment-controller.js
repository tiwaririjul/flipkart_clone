import { instance } from "../utils/util.js"
export const Checkout = async (req, res) => {
    const {price} = req.body
    console.log(price);
    var options = {
        amount: price.cost*100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order = await instance.orders.create(options);
        console.log(order);
    res.status(200).json({
        success:true,
        order
    })
}

export const Paymentverification=(req,res)=>{
    console.log(req.body);
    res.status(200).json({success:true})
}