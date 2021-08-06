import {Orden} from "./orden";
import {Producto} from "./producto";

export class DetalleOrden {
  id!: number;
  orden!: Orden;
  product!: Producto;
  cantidad!: number;
  precio!: number;

}
