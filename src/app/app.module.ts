import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { ListagemProdutosComponent } from './produtos/listagem-produtos/listagem-produtos.component';
import { ProdutoService } from './produtos/produto.service';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';
import { FormProdutoComponent } from './shared/form-produto/form-produto.component';
import { CadastroProdutosComponent } from './produtos/cadastro-produtos/cadastro-produtos.component';
import { ListagemMesasComponent } from './mesas/listagem-mesas/listagem-mesas.component';
import { CadastroMesasComponent } from './mesas/cadastro-mesas/cadastro-mesas.component';
import { FormMesaComponent } from './shared/form-mesa/form-mesa.component';
import { MesaService } from './mesas/mesa.service';
import { CadastroPedidosComponent } from './pedidos/cadastro-pedidos/cadastro-pedidos.component';
import { ListagemPedidosComponent } from './pedidos/listagem-pedidos/listagem-pedidos.component';
import { EdicaoPedidosComponent } from './pedidos/edicao-pedidos/edicao-pedidos.component';
import { EdicaoMesasComponent } from './mesas/edicao-mesas/edicao-mesas.component';
import { EdicaoProdutosComponent } from './produtos/edicao-produtos/edicao-produtos.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    PainelSimplesComponent,
    ListagemProdutosComponent,
    ErrorMsgComponent,
    FormProdutoComponent,
    CadastroProdutosComponent,
    ListagemMesasComponent,
    CadastroMesasComponent,
    FormMesaComponent,
    CadastroPedidosComponent,
    ListagemPedidosComponent,
    EdicaoPedidosComponent,
    EdicaoMesasComponent,
    EdicaoProdutosComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProdutoService, MesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
