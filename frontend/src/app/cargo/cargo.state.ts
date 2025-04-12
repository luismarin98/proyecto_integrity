import { CargoInterface } from "../../Interfaces/Cargo";

export interface CargoState {
    lista_cargos: CargoInterface[] | null;
    cargo: CargoInterface | null;
}

export const initialState: CargoState = {
    lista_cargos: null,
    cargo: null
};