import axios from "axios";

const API_URI = "/api/images/";

const upload = async (data) => {
  const response = await axios.post(API_URI, data);
  return response.data;
};

const getImages = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URI}get`, data, config);
  return response.data;
};

const imageService = {
  upload,
  getImages,
};

export default imageService;
