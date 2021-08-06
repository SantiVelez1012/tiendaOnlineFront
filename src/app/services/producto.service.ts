import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "../model/producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseEndPoint = 'http://localhost:8080/product';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Tpe': 'application/json'});

  constructor(private http: HttpClient) { }

  public listar(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseEndPoint}/get-all`);
  }

  public ver(id:number): Observable<Producto>{
    return this.http.get<Producto>(`${this.baseEndPoint}/find/${id}`)
  }

  public guardar(product : Producto): Observable<Producto>{
    return this.http.post<Producto>(
      `${this.baseEndPoint}/save`,
      product,
      {headers: this.cabeceras}
    )
  }

  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseEndPoint}/delete/${id}`)
  }

}
