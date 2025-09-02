import axios from "axios";
import { getToken, removeToken } from "./Cookies";

const API_BASE_URL = "http://127.0.0.1:8000";

// Create axios instance
export const API = axios.create({
    baseURL: `${API_BASE_URL}/api`,
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

// Request interceptor to add token to every request
API.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors globally
API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle unauthorized access
        if (error.response?.status === 401) {
            removeToken();
            // Redirect to login page
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }
        
        // Handle other errors
        if (error.response?.status === 403) {
            console.error('Access forbidden');
        }
        
        if (error.response?.status >= 500) {
            console.error('Server error:', error.response.data);
        }
        
        return Promise.reject(error);
    }
);

export default API;