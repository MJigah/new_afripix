import axios from "axios";

const API_URI = "/api/images/";

const getUserImages = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URI + id, config);
  return response.data;
};

const upload = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("/api/images/", data, config);
  return response.data;
};

const userImageService = {
  getUserImages,
  upload,
};

export default userImageService;
