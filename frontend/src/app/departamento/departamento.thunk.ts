import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../services/api";
import { DepartamentoInterface } from "../../Interfaces/Departamento";

// Thunks asíncronos para interactuar con la API (CRUD de Departamento)
const fetchDepartamentos = createAsyncThunk('departamento/fetchDepartamentos', async () => {
    const response = await apiClient.get('/departamento');
    return response.data;
});

const fetchDepartamentoById = createAsyncThunk('departamento/fetchDepartamentoById', async (id: number) => {
    const response = await apiClient.get(`/departamento/${id}`);
    return response.data;
});

const createDepartamento = createAsyncThunk('departamento/createDepartamento', async (departamentoData: DepartamentoInterface) => {
    const response = await apiClient.post('/departamento', departamentoData);
    return response.data;
});

const updateDepartamento = createAsyncThunk('departamento/updateDepartamento', async ({ id, departamentoData }: { id: number; departamentoData: DepartamentoInterface }) => {
    const response = await apiClient.put(`/departamento/${id}`, departamentoData);
    return response.data;
});

const deleteDepartamento = createAsyncThunk('departamento/deleteDepartamento', async (id: number) => {
    await apiClient.delete(`/departamento/${id}`);
    return id;
});

export { fetchDepartamentos, fetchDepartamentoById, createDepartamento, updateDepartamento, deleteDepartamento };