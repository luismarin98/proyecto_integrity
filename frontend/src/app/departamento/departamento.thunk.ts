import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/api';
import { DepartamentoInterface } from '../../Interfaces/Departamento';

export const fetchDepartamentos = createAsyncThunk(
    'departamentos/fetchDepartamentos',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get<DepartamentoInterface[]>('/Departamento/GetAllDepartamentos');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Error al obtener los departamentos');
        }
    }
);