import axios, { AxiosError } from 'axios';
import { ApiError } from '../Interfaces/ApiResponse';

const API_BASE_URL = 'https://localhost:7216/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    (error: AxiosError<ApiError>) => {
        if (error.response) {
            console.error('API Error:', {
                status: error.response.status,
                message: error.response.data?.message
            });
        } else if (error.request) {
            console.error('Network Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;