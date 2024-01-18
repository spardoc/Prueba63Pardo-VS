import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Deuda } from '../domain/deuda';

@Injectable({
  providedIn: 'root'
})
export class DeudasService {
  constructor(private http: HttpClient) { 
  }

  getDeudas()
  {
    let url = environment.WS_PATH+"/deudas/list"
    return this.http.get<any>(url)
  }

  saveCliente(deuda: Deuda)
  {
    let url = environment.WS_PATH +"/deudas"
    return this.http.post<any>(url,deuda)
  }
}
