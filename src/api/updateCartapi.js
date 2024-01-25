import axios from "axios";
import { url } from "../constants";

const updateCartapi = async (data) => {
  const response = await axios({
    url: `${url}/cart/`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data:JSON.stringify(data)
  });
  return response.data;
};
export default updateCartapi;
