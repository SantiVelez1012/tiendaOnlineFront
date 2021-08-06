import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetalleOrden} from "../model/detalle-orden"

@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenService {

  private baseEndPoint = 'http://localhost:8080/detalleCompra';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Tpe': 'application/json'});

  constructor(private http: HttpClient) { }

  public encontrarIdDetalle(id:number): Observable<DetalleOrden>{
    return this.http.get<DetalleOrden>(`${this.baseEndPoint}/find/${id}`)
  }

  public encontrarIdOrden(idOrden:number): Observable<DetalleOrden>{
    return this.http.get<DetalleOrden>(`${this.baseEndPoint}/findByUserId/${idOrden}`)
  }

  public guardar(detalleOrden:DetalleOrden): Observable<DetalleOrden>{
    return this.http.post<DetalleOrden>(`${this.baseEndPoint}/save`, detalleOrden, {headers: this.cabeceras} );
  }

}
