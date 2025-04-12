import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/api';
import { DepartamentoInterface } from '../../Interfaces/Departamento';

export const fetchDepartamentos = createAsyncThunk(
    'departamentos/fetchDepartamentos',
    async () => {
        const response = await axiosInstance.get('/Departamento/GetAllDepartamentos');
        return response.data;
    }
);

export const createDepartamento = createAsyncThunk(
    'departamentos/createDepartamento',
    async (departamentoData: DepartamentoInterface) => {
        const response = await axiosInstance.post('/Departamento/CreateDepartamento', departamentoData);
        return response.data;
    }
);

export const deleteDepartamento = createAsyncThunk(
    'departamentos/deleteDepartamento',
    async (id: number) => {
        await axiosInstance.delete(`/Departamento/DeleteDepartamento/${id}`);
        return id;
    }
);