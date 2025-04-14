import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './cargo.state';
import { CargoInterface } from '../../Interfaces/Cargo';
import { fetchCargos } from './cargo.thunk'; // Importa el thunk

const cargoSlice = createSlice({
    name: 'cargos',
    initialState,
    reducers: {
        setCargo(state, action: PayloadAction<CargoInterface | null>) {
            state.cargo = action.payload;
        },
        clearCargo(state) {
            state.cargo = null;
        },
        updateCargoInList(state, action: PayloadAction<CargoInterface | null>) {
            if (state.lista_cargos) {
                const index = state.lista_cargos.findIndex(cargo => cargo.id === action.payload!.id);
                if (index !== -1 && action.payload) {
                    state.lista_cargos[index] = action.payload;
                }
            }
        },
        deleteCargoFromList(state, action: PayloadAction<number>) {
            if (state.lista_cargos) {
                state.lista_cargos = state.lista_cargos.filter(cargo => cargo.id !== action.payload);
            }
        },
        addCargoToList(state, action: PayloadAction<CargoInterface | null>) {
            if (state.lista_cargos && action.payload) {
                state.lista_cargos.push(action.payload);
            } else if (action.payload) {
                state.lista_cargos = [action.payload];
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCargos.pending, (state) => {
            state.lista_cargos = null; // Opcional: puedes manejar un estado de carga
        });
        builder.addCase(fetchCargos.fulfilled, (state, action: PayloadAction<CargoInterface[]>) => {
            state.lista_cargos = action.payload; // Actualiza la lista de cargos con los datos obtenidos del API
        });
        builder.addCase(fetchCargos.rejected, (state) => {
            state.lista_cargos = []; // Opcional: puedes manejar un estado de error
        });
    }
});

export const { 
    setCargo, 
    clearCargo, 
    updateCargoInList, 
    deleteCargoFromList, 
    addCargoToList 
} = cargoSlice.actions;
export default cargoSlice.reducer;