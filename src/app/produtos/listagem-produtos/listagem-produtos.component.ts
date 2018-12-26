import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { Produto, PageProduto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {

  public produtos: Produto[];
  public page: PageProduto = <PageProduto>{};
  public pageNumb = 0;
  public nome = '';
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getListaProdutos(this.pageNumb, this.nome);
  }

  getListaProdutos(pageNum: number, nome: string) {
    this.produtoService.getListaProdutos(pageNum, nome)
    // tslint:disable-next-line:max-line-length
    .subscribe((page: PageProduto) => {this.page = page; this.produtos = page.content; } , () => {this.errorMsgComponent.setError('Error ao listar produtos'); });
  }

  totalPages() {
    const pages = [];
    for( let i = 0; i < this.page.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  deletaProduto(id: number) {
    this.produtoService.deletaProduto(id)
  // tslint:disable-next-line:max-line-length
  .subscribe(() => {this.page.numberOfElements === 1 ? this.getListaProdutos( this.page.number - 1, this.nome) : this.getListaProdutos( this.page.number, this.nome) ; 
  this.errorMsgComponent.setError('Produto apagado'); }, () => {this.errorMsgComponent.setError('Falha ao apagar produto');});
}

  existemProdutos(): boolean {
    return this.produtos && this.produtos.length > 0;
  }
}
