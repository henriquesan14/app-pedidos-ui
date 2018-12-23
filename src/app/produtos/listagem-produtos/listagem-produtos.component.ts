import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { Produto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {

  public produtos: Produto[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getListaProdutos();
  }

  getListaProdutos() {
    this.produtoService.getListaProdutos()
    // tslint:disable-next-line:max-line-length
    .subscribe((produtos: Produto[]) => {this.produtos = produtos; }, () => { this.errorMsgComponent.setError('Falha ao buscar produtos'); });

  }

  deletaProduto(id: number) {
    this.produtoService.deletaProduto(id)
    .subscribe(() => {this.getListaProdutos();
    this.errorMsgComponent.setError('Produto apagado'); }, () => {this.errorMsgComponent.setError('Falha ao apagar produto');})
  }

  existemProdutos(): boolean {
    return this.produtos && this.produtos.length > 0;
  }
}
