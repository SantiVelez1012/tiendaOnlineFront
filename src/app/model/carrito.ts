import {Usuario} from "./usuario";
import {Producto} from "./producto";

export class Carrito {
  id!: number;
  user!: Usuario;
  product!: Producto;
  cantidad!: number;
  precio!: number;

}
