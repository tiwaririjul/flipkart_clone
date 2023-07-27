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
    const {
      data: { key },
    } = await axios.get(`${url}/api/getkey`);
    const {
      data: { order },
    } = await axios.post(`${url}/checkout`, product);
    var options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:8000/paymentverification",
      prefill: {
        name: "Gaurav Kumar",

        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    console.log("Paytm er");
  }
};
