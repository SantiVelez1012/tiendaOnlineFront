import {Usuario} from "./usuario";
import {MetodoPago} from "./metodo-pago";
import {Domicilio} from "./domicilio";

export class Orden {
  id!: number;
  user!: Usuario;
  metodoPago!:MetodoPago;
  domicilio!: Domicilio;
  total!: number;
}
