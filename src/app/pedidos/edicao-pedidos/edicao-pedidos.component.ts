import { Component, OnInit, ViewChild } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { Pedido } from 'src/app/interfaces/pedido';
import { ItemPedido } from 'src/app/interfaces/item-pedido';
import { Produto } from 'src/app/interfaces/produto';
import { Mesa } from 'src/app/interfaces/mesa';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edicao-pedidos',
  templateUrl: './edicao-pedidos.component.html',
  styleUrls: ['./edicao-pedidos.component.css']
})
export class EdicaoPedidosComponent implements OnInit {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  pedido: Pedido;
  item: ItemPedido;
  mesas: Mesa[];
  produtos: Produto[];
  fim: number;
  index = 0;
  constructor(private pedidoService: PedidoService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pedido = <Pedido>{itensPedidos: []};
    this.pedido.mesa = <Mesa>{};
    this.item = <ItemPedido>{};
    this.pedidoService.getListaProdutos().subscribe((produtos: Produto[]) => {this.produtos = produtos; });
    this.pedidoService.getListaMesas().subscribe((mesas: Mesa[]) => {this.mesas = mesas; });
    this.getPedido(this.activatedRoute.snapshot.params.id);
  }

  getPedido(id: number){
    this.pedidoService.getPedido(id)
    .subscribe((pedido: Pedido) => {this.pedido = pedido; }, () => {this.errorMsgComponent.setError('Error a buscar pedido');})
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

  atualizar(frm: FormGroup) {
    this.pedidoService.atualizaPedido(this.pedido).subscribe(() => {frm.reset(); this.router.navigateByUrl('/pedidos');
    }, () => {this.errorMsgComponent.setError('Falha ao adicionar pedido'); });
  }

}
