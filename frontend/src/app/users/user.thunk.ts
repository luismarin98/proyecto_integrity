import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../services/api";
import { UserInterface } from "../../Interfaces/UserInterface";

// Thunks asíncronos para interactuar con la API (CRUD de User)
const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await apiClient.get('/users');
    return response.data;
});

const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: number) => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
});

const createUser = createAsyncThunk('users/createUser', async (userData: UserInterface) => {
    const response = await apiClient.post('/users', userData);
    return response.data;
});

const updateUser = createAsyncThunk('users/updateUser', async ({ id, userData }: { id: number; userData: UserInterface }) => {
    const response = await apiClient.put(`/users/${id}`, userData);
    return response.data;
});

const deleteUser = createAsyncThunk('users/deleteUser', async (id: number) => {
    await apiClient.delete(`/users/${id}`);
    return id;
});

export { fetchUsers, fetchUserById, createUser, updateUser, deleteUser };