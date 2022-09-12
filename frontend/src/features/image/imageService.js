import axios from "axios";

const API_URI = "/api/images/";

const getImages = async () => {
  const response = await axios.get(`${API_URI}get`);
  return response.data;
};

const imageService = {
  getImages,
};

export default imageService;
