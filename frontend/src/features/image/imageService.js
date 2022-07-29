import axios from "axios";

const API_URI = "/api/images/";

const upload = async (data, token) => {

  const config = {
    headers : {
        Authorization: `Bearer ${token}`
    }
}

  const response = await axios.post(API_URI, data, config);
  return response.data;
};

const getImages = async () => {
  const response = await axios.get(`${API_URI}get`);
  return response.data;
};

const imageService = {
  upload,
  getImages,
};

export default imageService;
