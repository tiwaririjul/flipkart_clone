import axios from "axios";

const url = "http://localhost:8000";

export const authenticateLogin = async (user) => {
  try {
    console.log("hii");
    console.log("user ", user);
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};

export const authenticateSignup = async (user) => {
  try {
    console.log("hii");
    console.log("user ", user);
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
    return error.response;
  }
};

export const payusingPaytm = async (product) => {
  try {
    const {data:{key}}= await axios.get(`${url}/api/getkey`);
    const { data:{order} } = await axios.post(`${url}/checkout`, product);
    var options = {
      key, 
      amount: order.amount*100,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, 
      callback_url: "http://localhost:8000/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
      razor.open()
  } catch (error) {
    console.log("Paytm er");
  }
}
