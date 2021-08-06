import {Usuario} from "./usuario";

export class Domicilio {
  id!: number;
  user!: Usuario;
  ciudad!: string;
  departamento!: string;
  direccion!: string;
  codigoPostal!: string;
}
