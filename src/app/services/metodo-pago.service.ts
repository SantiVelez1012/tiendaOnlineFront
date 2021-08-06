import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MetodoPago } from '../model/metodo-pago';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {

  private baseEndPoint = 'http://localhost:8080/metodopago';
  constructor(private http : HttpClient) { }

  public ver(id: number): Observable<MetodoPago> {
    return this.http.get<MetodoPago>(`${this.baseEndPoint}/find/${id}`)
  }

}
