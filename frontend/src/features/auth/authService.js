import axios from "axios";

const API_URL = "/api/users/";

const register = async (userData) => {
  const response = await axios.post(`${API_URL}register`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const profileUpload = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}upload`, userData, config);
  if(response.data){
    localStorage.setItem('userProfile', JSON.stringify(response.data))
  }
  return response.data;
};

const updateUser = async (data, token) => {
  const {userData, userId} = data;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(`${API_URL+userId}`, userData, config)
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
}

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  profileUpload,
  updateUser,
};

export default authService;
