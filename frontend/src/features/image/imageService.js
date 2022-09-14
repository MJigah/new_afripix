import axios from "axios";

const API_URI = "/api/images/";

const getImages = async () => {
  const response = await axios.get(`${API_URI}get`);
  return response.data;
};

const likeImage = async (data) => {
  const response = await axios.post(`${API_URI}like`, data);
  const checkImages = JSON.parse(localStorage.getItem('images'))
  const foundImages = checkImages.map((image) => {
    return image._id === response.data._id ? response.data : image
  });
  localStorage.setItem('images', JSON.stringify(foundImages));

  return response.data;
};

const imageService = {
  getImages,
  likeImage,
};

export default imageService;
