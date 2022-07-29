import axios from "axios";

const API_URI = "/api/images/";

const getUserImages = async (id, token) => {

    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

  const response = await axios.get(API_URI + id, config)

//   if(response.data){
//     localStorage.setItem('userImages', JSON.stringify(response.data))
//   }

  return response.data
}

const userImageService = {

  getUserImages,
};

export default userImageService;
