import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DepartamentoInterface } from '../../Interfaces/Departamento';
import { initialState } from './departamento.state';
import { fetchDepartamentos } from './departamento.thunk'; // Importa el thunk

const departamentoSlice = createSlice({
    name: 'departamento',
    initialState,
    reducers: {
        setDepartamento(state, action: PayloadAction<DepartamentoInterface | null>) {
            state.departamento = action.payload;
        },
        clearDepartamento(state) {
            state.departamento = null;
        },
        updateDepartamentoInList(state, action: PayloadAction<DepartamentoInterface | null>) {
            if (state.lista_departamentos) {
                const index = state.lista_departamentos.findIndex(departamento => departamento.id === action.payload!.id);
                if (index !== -1) {
                    if (action.payload) {
                        state.lista_departamentos[index] = action.payload;
                    }
                }
            }
        },
        deleteDepartamentoFromList(state, action: PayloadAction<number>) {
            if (state.lista_departamentos) {
                state.lista_departamentos = state.lista_departamentos.filter(departamento => departamento.id !== action.payload);
            }
        },
        addDepartamentoToList(state, action: PayloadAction<DepartamentoInterface | null>) {
            if (state.lista_departamentos) {
                state.lista_departamentos.push(action.payload!);
            } else {
                state.lista_departamentos = [action.payload!];
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDepartamentos.pending, (state) => {
            state.lista_departamentos = null; // Opcional: puedes manejar un estado de carga
        });
        builder.addCase(fetchDepartamentos.fulfilled, (state, action: PayloadAction<DepartamentoInterface[]>) => {
            state.lista_departamentos = action.payload; // Actualiza la lista de departamentos con los datos obtenidos del API
        });
        builder.addCase(fetchDepartamentos.rejected, (state) => {
            state.lista_departamentos = []; // Opcional: puedes manejar un estado de error
        });
    }
});

export const { 
    setDepartamento, 
    clearDepartamento, 
    updateDepartamentoInList, 
    deleteDepartamentoFromList, 
    addDepartamentoToList 
} = departamentoSlice.actions;
export default departamentoSlice.reducer;