import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Orden} from "../model/orden"
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private baseEndPoint = 'http://localhost:8080/orden';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Tpe': 'application/json'});

  constructor(private http: HttpClient) { }

  public encontrarIdOrden(idOrden:number): Observable<Orden>{
    return this.http.get<Orden>(`${this.baseEndPoint}/find/${idOrden}`)
  }

  public encontrarIdUsuario(idUsuario:number): Observable<Orden>{
    return this.http.get<Orden>(`${this.baseEndPoint}/findByUserId/${idUsuario}`)
  }

  public guardar(orden: Orden): Observable<Orden>{
    return this.http.post<Orden>(`${this.baseEndPoint}/save`, orden, {headers: this.cabeceras} );
  }
}


