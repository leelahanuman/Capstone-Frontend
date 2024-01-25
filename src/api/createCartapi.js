import axios from "axios";
import { url } from "../constants";

const createCartapi = async (id) => {
  const token=localStorage.getItem('token')
  const response = await axios({
    url: `${url}/cart/`,
    method: "POST",
    headers: { "Content-Type": "application/json", authtoken:token,productid:id },
  });
  return response.data;
  
};
export default createCartapi;
