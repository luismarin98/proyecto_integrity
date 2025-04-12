import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userSlice from './users/user.slice';
import departamentoSlice from './departamento/departamento.slice';
import cargoSlice from './cargo/cargo.slice';

const reducer = {
  user: userSlice,
  departamento: departamentoSlice,
  cargo: cargoSlice,
}

export const store = configureStore({ reducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;