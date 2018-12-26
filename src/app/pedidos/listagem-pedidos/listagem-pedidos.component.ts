import { Component, OnInit, ViewChild } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido, PagePedido } from 'src/app/interfaces/pedido';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';

@Component({
  selector: 'app-listagem-pedidos',
  templateUrl: './listagem-pedidos.component.html',
  styleUrls: ['./listagem-pedidos.component.css']
})
export class ListagemPedidosComponent implements OnInit {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  pedidos: Pedido[];
  public page: PagePedido = <PagePedido>{};
  public pageNumb = 0;
  public nome = '';
  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.getListaPedidos(this.pageNumb, this.nome);
  }

  getListaPedidos(pageNum: number, nome: string) {
    this.pedidoService.getListaPedidos(pageNum, nome)
    // tslint:disable-next-line:max-line-length
    .subscribe((page: PagePedido) => {this.page = page; this.pedidos = page.content; } , () => {this.errorMsgComponent.setError('Error ao listar pedidos'); });
  }

  totalPages() {
    const pages = [];
    for( let i = 0; i < this.page.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  deletaPedido(id: number) {
    this.pedidoService.deletaPedido(id)
  // tslint:disable-next-line:max-line-length
  .subscribe(() => {this.page.numberOfElements === 1 ? this.getListaPedidos( this.page.number - 1, this.nome) : this.getListaPedidos( this.page.number, this.nome) ; 
  this.errorMsgComponent.setError('Pedido apagado'); }, () => {this.errorMsgComponent.setError('Falha ao apagar pedido');});
}

  existemPedidos() {
    return this.pedidos && this.pedidos.length;
  }

}
