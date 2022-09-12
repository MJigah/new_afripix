import axios from "axios";

const API_URL = "/api/categories/";

const getOne = async (id) => {
  const response = await axios.get(API_URL+id);
  if (response.data) {
    localStorage.setItem("categories", JSON.stringify(response.data));
  }

  return response.data;
};

const imageService = {
  getOne,
};

export default imageService;
