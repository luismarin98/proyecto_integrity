import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/api';
import { CargoInterface } from '../../Interfaces/Cargo';

export const fetchCargos = createAsyncThunk(
    'cargos/fetchCargos',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get<CargoInterface[]>('/Cargo/ListaCargos');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Error al obtener los cargos');
        }
    }
);