import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pedido, PagePedido } from '../interfaces/pedido';
import { Mesa } from '../interfaces/mesa';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }


  getListaPedidos(page: number, nome: string): Observable<PagePedido> {
    const url = `${environment.apiUrl}/pedidos?page=${page}&nome=${nome}`;
    return this.http.get<PagePedido>(url);
  }

  addPedido(pedido: Pedido): Observable<Pedido> {
    const url = `${environment.apiUrl}/pedidos`;
    return this.http.post<Pedido>(url, pedido);
  }

  getListaMesas(): Observable<Mesa[]>{
    const url = `${environment.apiUrl}/mesas/all`;
    return this.http.get<Mesa[]>(url);
  }

  getListaProdutos(): Observable<Produto[]>{
    const url = `${environment.apiUrl}/produtos/all`;
    return this.http.get<Produto[]>(url);
  }

  getPedido(id: number): Observable<Pedido> {
    const url = `${environment.apiUrl}/pedidos/${id}`;
    return this.http.get<Pedido>(url);
  }

  atualizaPedido(pedido: Pedido): Observable<Pedido> {
    const url = `${environment.apiUrl}/pedidos/${pedido.id}`;
    return this.http.put<Pedido>(url, pedido);
  }

  deletaPedido(id: number): Observable<Pedido> {
    const url = `${environment.apiUrl}/pedidos/${id}`;
    return this.http.delete<Pedido>(url);
  }



}
