import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://code-acenew-back-1.vercel.app",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to headers
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
