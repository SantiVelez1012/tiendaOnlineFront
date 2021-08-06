import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domicilio } from '../model/domicilio';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {

  private baseEndPoint = 'http://localhost:8080/domicilio';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Tpe': 'application/json'});

  constructor(private http:HttpClient) { }


  public listar(): Observable<Domicilio[]> {
    return this.http.get<Domicilio[]>(`${this.baseEndPoint}/get-all`);
  }

  public ver(id: number): Observable<Domicilio> {
    return this.http.get<Domicilio>(`${this.baseEndPoint}/find/${id}`)
  }

  public save(domicilio: Domicilio): Observable<Domicilio> {
    return this.http.post<Domicilio>(`${this.baseEndPoint}/save`, domicilio, {headers: this.cabeceras} );
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndPoint}/${id}`);
  }
}