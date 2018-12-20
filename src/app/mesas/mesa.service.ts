import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mesa } from '../interfaces/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }

  getListaMesas(): Observable<Mesa[]> {
    const url = `${environment.apiUrl}/mesas`;
    return this.http.get<Mesa[]>(url);
  }

  getMesa(id: number): Observable<Mesa> {
    const url = `${environment.apiUrl}/mesas/${id}`;
    return this.http.get<Mesa>(url);
  }

  addMesa(mesa: Mesa): Observable<Mesa>{
    const url = `${environment.apiUrl}/mesas`;
    return this.http.post<Mesa>(url, mesa);
  }

  atualizaMesa(mesa: Mesa): Observable<Mesa> {
    const url = `${environment.apiUrl}/mesas/${mesa.id}`;
    return this.http.put<Mesa>(url, mesa);
  }

  deletaMesa(id: number): Observable<Mesa> {
    const url = `${environment.apiUrl}/mesas/${id}`;
    return this.http.delete<Mesa>(url);
  }


}
