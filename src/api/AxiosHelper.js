import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: {
    api_key: "0f2fa3f84537ad4b53c9e3c913d2e012",
  },
});

export default axiosInstance;
