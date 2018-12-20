import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getListaProdutos(): Observable<Produto[]> {
    const url = `${environment.apiUrl}/produtos`;
    return this.http.get<Produto[]>(url);
  }

  getProduto(id: number): Observable<Produto>{
    const url = `${environment.apiUrl}/produtos/${id}`;
    return this.http.get<Produto>(url);
  }

  addProduto(produto: Produto): Observable<Produto> {
    const url = `${environment.apiUrl}/produtos`;
    return this.http.post<Produto>(url, produto);
  }

  atualizaProduto(produto: Produto): Observable<Produto> {
    const url = `${environment.apiUrl}/produtos/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  deletaProduto(id: number): Observable<Produto>{
    const url = `${environment.apiUrl}/produtos/${id}`;
    return this.http.delete<Produto>(url);
  }




}
