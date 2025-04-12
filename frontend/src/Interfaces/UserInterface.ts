export interface UserInterface {
    id?: number;
    primer_nombre: string;
    segundo_nombre?: string;
    primer_apellido: string;
    segundo_apellido?: string;
    email: string;
    id_cargo: number;
    id_departamento: number;
    cargo?: string;
    departamento?: string;
}