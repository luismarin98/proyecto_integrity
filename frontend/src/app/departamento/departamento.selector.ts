import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const departamento_state = (state: RootState) => state.departamento; // Cambia 'user' por el nombre de tu slice si es diferente

const selectAllDepartamentos = createSelector(departamento_state, (state) => state.lista_departamentos);
const departamentoSelector = createSelector(departamento_state, (state) => state.departamento); // Selector to get the current user
const departamentoIdSelector = createSelector(departamento_state, (state) => state.departamento!.id); // Selector to get the current user ID

export { selectAllDepartamentos, departamentoSelector, departamentoIdSelector };