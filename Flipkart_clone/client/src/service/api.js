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

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${url}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
