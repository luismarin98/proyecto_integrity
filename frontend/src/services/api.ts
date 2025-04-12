import axios from 'axios';

const API_BASE_URL = 'https://localhost:7216/api'; // Ajusta el puerto según tu configuración de .NET

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Interceptor para manejar errores
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error('Error de API:', error.response.data);
            // Aquí puedes manejar errores específicos de .NET
            if (error.response.status === 400) {
                console.error('Error de validación:', error.response.data.errors);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;