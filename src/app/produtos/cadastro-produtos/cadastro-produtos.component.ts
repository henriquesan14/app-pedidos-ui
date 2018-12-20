import { Component, ViewChild} from '@angular/core';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { ProdutoService } from '../produto.service';
import { Produto } from 'src/app/interfaces/produto';
import { Router } from '@angular/router';

@Component ({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent  {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private produtoService: ProdutoService, private router: Router) { }

  addProduto(produto: Produto) {
    this.produtoService.addProduto(produto)
    .subscribe(() => {this.router.navigateByUrl('/produtos'); },
     () => {this.errorMsgComponent.setError('Falha ao adicionar o produto'); });
  }


}
