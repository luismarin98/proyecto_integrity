import { DepartamentoInterface } from "../../Interfaces/Departamento";

interface DepartamentoSlice {
    lista_departamentos: DepartamentoInterface[] | null;
    departamento: DepartamentoInterface | null;    // Otros campos que necesites
}  

const initialState: DepartamentoSlice = {
    lista_departamentos: null,
    departamento: null,
}

export { initialState };
export type { DepartamentoSlice };