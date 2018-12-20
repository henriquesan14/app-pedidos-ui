import { Component, OnInit, ViewChild } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from 'src/app/interfaces/pedido';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';

@Component({
  selector: 'app-listagem-pedidos',
  templateUrl: './listagem-pedidos.component.html',
  styleUrls: ['./listagem-pedidos.component.css']
})
export class ListagemPedidosComponent implements OnInit {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  pedidos: Pedido[];
  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.getListaPedidos();
  }

  getListaPedidos() {
    this.pedidoService.getListaPedidos()
    .subscribe((pedidos: Pedido[]) => {this.pedidos = pedidos; }, () => {this.errorMsgComponent.setError('Falha ao buscar pedidos'); });
  }

  deletaPedido(id: number) {
    this.pedidoService.deletaPedido(id)
    .subscribe(() => {this.getListaPedidos();
      this.errorMsgComponent.setError('Pedido apagado'); }, () => {this.errorMsgComponent.setError('Error ao deletar pedido') });
  }

  existemPedidos() {
    return this.pedidos && this.pedidos.length;
  }

}
