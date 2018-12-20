import { Component, ViewChild} from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicao-produtos',
  templateUrl: './edicao-produtos.component.html',
  styleUrls: ['./edicao-produtos.component.css']
})
export class EdicaoProdutosComponent {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  public produto: Produto = <Produto>{};
  id: number;
  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router ) {
     this.id = this.activatedRoute.snapshot.params.id;
     this.getProduto(this.activatedRoute.snapshot.params.id);
     }

  getProduto(id: number){
    this.produtoService.getProduto(id)
    .subscribe((produto: Produto) => {this.produto = produto; }, () => {this.errorMsgComponent.setError('Falha ao buscar produto');});
  }

  atualizaProduto(produto: Produto){
    this.produtoService.atualizaProduto(produto)
    .subscribe(() => {this.router.navigateByUrl('/produtos');}, () => {this.errorMsgComponent.setError('Falha ao editar produto');})
  }

}
