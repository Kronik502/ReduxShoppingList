// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your API base URL
  // Additional configurations can be added here
});

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response || error.message || error);
    // Optionally, dispatch an action to update the state with the error
    // dispatch({ type: 'API_ERROR', payload: error });
    return Promise.reject(error);
  }
);

export default axiosInstance;
