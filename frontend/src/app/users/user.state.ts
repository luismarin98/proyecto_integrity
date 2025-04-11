import { UserInterface } from "../../Interfaces/UserInterface";

interface UserSlice {
    lista_usuarios: UserInterface[] | null;
    usuario: UserInterface | null;    // Otros campos que necesites
}

const initialState: UserSlice = {
    lista_usuarios: null,
    usuario: null,
}

export { initialState };
export type { UserSlice };