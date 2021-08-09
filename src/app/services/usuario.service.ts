import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseEndPoint = 'http://localhost:8080/user';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Tpe': 'application/json'});

  constructor(private http: HttpClient) { }

  public listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseEndPoint}/all`);
  }

  public ver(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseEndPoint}/find/${id}`)
  }

  public save(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseEndPoint}/save`, user, {headers: this.cabeceras} );
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndPoint}/${id}`);
  }

  public loginVerification(email : string, password : string): Observable<void>{
    return this.http.get<void>(`${this.baseEndPoint}/find/${email}-${password}`);
  }

}
