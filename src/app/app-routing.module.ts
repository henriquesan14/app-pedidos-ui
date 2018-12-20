import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemProdutosComponent } from './produtos/listagem-produtos/listagem-produtos.component';
import { CadastroProdutosComponent } from './produtos/cadastro-produtos/cadastro-produtos.component';
import { ListagemMesasComponent } from './mesas/listagem-mesas/listagem-mesas.component';
import { CadastroMesasComponent } from './mesas/cadastro-mesas/cadastro-mesas.component';
import { CadastroPedidosComponent } from './pedidos/cadastro-pedidos/cadastro-pedidos.component';
import { ListagemPedidosComponent } from './pedidos/listagem-pedidos/listagem-pedidos.component';
import { EdicaoPedidosComponent } from './pedidos/edicao-pedidos/edicao-pedidos.component';
import { EdicaoMesasComponent } from './mesas/edicao-mesas/edicao-mesas.component';
import { EdicaoProdutosComponent } from './produtos/edicao-produtos/edicao-produtos.component';

const routes: Routes = [
  {path: 'produtos', component: ListagemProdutosComponent},
  {path: 'produtos/cadastro', component: CadastroProdutosComponent},
  {path: 'produtos/editar/:id', component: EdicaoProdutosComponent},
  {path: 'mesas', component: ListagemMesasComponent},
  {path: 'mesas/cadastro', component: CadastroMesasComponent},
  {path: 'mesas/editar/:id', component: EdicaoMesasComponent},
  {path: 'pedidos', component: ListagemPedidosComponent},
  {path: 'pedidos/cadastro', component: CadastroPedidosComponent},
  {path: 'pedidos/:id', component: EdicaoPedidosComponent},
  {path: '', component: ListagemProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
