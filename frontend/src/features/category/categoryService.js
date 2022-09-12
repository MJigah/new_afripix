import axios from "axios";

const API_URL = "/api/categories/";

const get = async () => {
  const response = await axios.get(API_URL);
  if (response.data) {
    localStorage.setItem("categories", JSON.stringify(response.data));
  }

  return response.data;
};



const authService = {
  get,
};

export default authService;
