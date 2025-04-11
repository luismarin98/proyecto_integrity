import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DepartamentoInterface } from "../../Interfaces/Departamento";
import { initialState } from "./departamento.state";

const departamentoSlice = createSlice({
    name: "departamento",
    initialState,
    reducers: {
        // Reducers síncronos si necesitas
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
    }
});

export const { setDepartamento, clearDepartamento, updateDepartamentoInList, deleteDepartamentoFromList, addDepartamentoToList } = departamentoSlice.actions;
export default departamentoSlice.reducer;