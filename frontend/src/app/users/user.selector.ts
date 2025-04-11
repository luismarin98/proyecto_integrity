import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const usuario_state = (state: RootState) => state.user; // Cambia 'user' por el nombre de tu slice si es diferente

// Selector to get the list of users
const selectAllUsers = createSelector(usuario_state, (state) => state.lista_usuarios);
const userSelector = createSelector(usuario_state, (state) => state.usuario); // Selector to get the current user
const userIdSelector = createSelector(usuario_state, (state) => state.usuario!.id); // Selector to get the current user ID

export { selectAllUsers, userSelector, userIdSelector };