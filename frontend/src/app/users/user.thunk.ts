import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserInterface } from '../../Interfaces/UserInterface';
import axiosInstance from '../../services/api';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await axiosInstance.get('/User/GetAllUsers');
        return response.data;
    }
);

export const createUser = createAsyncThunk(
    'users/createUser',
    async (userData: UserInterface) => {
        const response = await axiosInstance.post('/User/CreateUser', userData);
        return response.data;
    }
);

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (userData: UserInterface) => {
        const response = await axiosInstance.put('/User/UpdateUser', userData);
        return response.data;
    }
);

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id: number) => {
        await axiosInstance.delete(`/User/DeleteUser/${id}`);
        return id;
    }
);