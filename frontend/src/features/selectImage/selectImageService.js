import axios from "axios";

const API_URI = "/api/images/";

const selectImage = async (id) => {
  const response = await axios.get(API_URI+"single/"+id);
  return response.data;
};

const relatedImages = async (id) => {
  const response = await axios.get(API_URI+"single/"+id+"/related");
  return response.data;
};

const imageService = {
    selectImage,
    relatedImages
};

export default imageService;
