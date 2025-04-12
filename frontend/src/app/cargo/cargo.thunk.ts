import { createAsyncThunk } from '@reduxjs/toolkit';
import { CargoInterface } from '../../Interfaces/Cargo';
import axiosInstance from '../../services/api';

export const fetchCargos = createAsyncThunk(
    'cargos/fetchCargos',
    async () => {
        const response = await axiosInstance.get('/Cargo/ListaCargos');
        return response.data;
    }
);

// Asumiendo que necesitarás estos endpoints en el futuro
export const createCargo = createAsyncThunk(
    'cargos/createCargo',
    async (cargoData: CargoInterface) => {
        const response = await axiosInstance.post('/Cargo/CreateCargo', cargoData);
        return response.data;
    }
);

export const updateCargo = createAsyncThunk(
    'cargos/updateCargo',
    async (cargoData: CargoInterface) => {
        const response = await axiosInstance.put('/Cargo/UpdateCargo', cargoData);
        return response.data;
    }
);

export const deleteCargo = createAsyncThunk(
    'cargos/deleteCargo',
    async (id: number) => {
        await axiosInstance.delete(`/Cargo/DeleteCargo/${id}`);
        return id;
    }
);