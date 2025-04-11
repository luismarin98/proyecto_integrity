import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Reemplaza 5000 con el puerto de tu API .NET
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;