import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from '../../Interfaces/UserInterface';
import { initialState } from './user.state';

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Reducers síncronos si necesitas
        setUser(state, action: PayloadAction<UserInterface | null>) {
            state.usuario = action.payload;
        },
        clearUser(state) {
            state.usuario = null;
        },
        updateUserInList(state, action: PayloadAction<UserInterface | null>) {
            if (state.lista_usuarios) {
                const index = state.lista_usuarios.findIndex(user => user.id === action.payload!.id);
                if (index !== -1) {
                    if (action.payload) {
                        state.lista_usuarios[index] = action.payload;
                    }
                }
            }
        },
        deleteUserFromList(state, action: PayloadAction<number>) {
            if (state.lista_usuarios) {
                state.lista_usuarios = state.lista_usuarios.filter(user => user.id !== action.payload);
            }
        },
        addUserToList(state, action: PayloadAction<UserInterface | null>) {
            if (state.lista_usuarios) {
                state.lista_usuarios.push(action.payload!);
            } else {
                state.lista_usuarios = [action.payload!];
            }
        }
    }
});

export const { setUser, clearUser, updateUserInList, deleteUserFromList, addUserToList } = usersSlice.actions;
export default usersSlice.reducer;