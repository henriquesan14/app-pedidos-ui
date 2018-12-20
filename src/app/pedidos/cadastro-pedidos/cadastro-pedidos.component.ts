import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';
import { ItemPedido } from 'src/app/interfaces/item-pedido';
import { PedidoService } from '../pedido.service';
import { Mesa } from 'src/app/interfaces/mesa';
import { Produto } from 'src/app/interfaces/produto';
import { FormGroup } from '@angular/forms';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pedidos',
  templateUrl: './cadastro-pedidos.component.html',
  styleUrls: ['./cadastro-pedidos.component.css']
})
export class CadastroPedidosComponent implements OnInit {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  pedido: Pedido;
  item: ItemPedido;
  mesas: Mesa[];
  produtos: Produto[];
  index = 0;
  fim;
  @Output() vendaSalva = new EventEmitter();
  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.pedidoService.getListaProdutos().subscribe((produtos: Produto[]) => {this.produtos = produtos; });

    this.pedidoService.getListaMesas().subscribe((mesas: Mesa[]) => {this.mesas = mesas; });
    this.novoPedido();
  }

  novoPedido() {
    this.pedido = <Pedido>{itensPedidos: []};
    this.pedido.valorTotal = 0;
    this.item = <ItemPedido>{};
  }

  incluirItem() {
    this.pedido.itensPedidos.push(this.item);
    this.fim = this.pedido.itensPedidos.length - 1;
    this.item.index = this.index;
    this.index += 1;
    this.item = <ItemPedido>{};
    this.calculaTotal();
  }

  excluirItem(indexSelecionado: number) {
    this.pedido.itensPedidos.splice(indexSelecionado, 1);
    if (indexSelecionado < this.fim) {
      for (const item of this.pedido.itensPedidos) {
        if (item.index > indexSelecionado) {
          item.index -= 1;
        }
      }
    }
    this.index -= 1;
    this.fim -= 1;
    console.log(this.pedido.itensPedidos);
    // tslint:disable-next-line:no-unused-expression
    this.calculaTotal();
  }


  calculaTotal() {
    const totalItens = this.pedido.itensPedidos
    .map(i => (i.produto.valorUnitario * i.quantidade))
    .reduce((total, v) => total + v, 0);
    this.pedido.valorTotal = totalItens ;
  }

  adicionar(frm: FormGroup) {
    this.pedidoService.addPedido(this.pedido).subscribe(() => {frm.reset(); this.router.navigateByUrl('/pedidos');
    }, () => {this.errorMsgComponent.setError('Falha ao adicionar pedido'); });
  }

  existemItens(): boolean {
    return this.pedido.itensPedidos && this.pedido.itensPedidos.length > 0;
  }

}
