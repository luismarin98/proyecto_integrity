import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const cargo_state = (state: RootState) => state.cargo; // Cambia 'cargo' por el nombre de tu slice si es diferente

const selectAllCargos = createSelector(cargo_state, (state) => state.lista_cargos);
const cargoSelector = createSelector(cargo_state, (state) => state.cargo); // Selector to get the current cargo

export { cargoSelector, selectAllCargos }