import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from '../model/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  private baseEndPoint = 'http://localhost:8080/carrito';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Tpe': 'application/json'});
  constructor(private http:HttpClient) { }


  public listar(): Observable<Carrito[]> {
    return this.http.get<Carrito[]>(`${this.baseEndPoint}/get-all`);
  }

  public verIdCarrito(id: number): Observable<Carrito> {
    return this.http.get<Carrito>(`${this.baseEndPoint}/find/${id}`);
  }

  public save(carrito: Carrito): Observable<Carrito> {
    return this.http.post<Carrito>(`${this.baseEndPoint}/save`, carrito, {headers: this.cabeceras} );
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndPoint}/delete/${id}`);
  }

  public eliminarProductosIdUsuario(idUsuario:number): Observable<void>{
    return this.http.get<void>(`${this.baseEndPoint}/deletebyUserId/${idUsuario}`);
  }

}
