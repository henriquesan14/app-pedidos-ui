import { Component, OnInit, ViewChild } from '@angular/core';
import { Mesa, PageMesa } from 'src/app/interfaces/mesa';
import { MesaService } from '../mesa.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';

@Component({
  selector: 'app-listagem-mesas',
  templateUrl: './listagem-mesas.component.html',
  styleUrls: ['./listagem-mesas.component.css']
})
export class ListagemMesasComponent implements OnInit {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  public mesas: Mesa[];
  public page: PageMesa = <PageMesa>{};
  public pageNumb = 0;
  public nome = '';
  constructor(private mesaService: MesaService) { }

  ngOnInit() {
    this.getListaMesas(this.pageNumb, this.nome);

  }

  getListaMesas(pageNum: number, nome: string) {
    this.mesaService.getListaMesas(pageNum, nome)
    // tslint:disable-next-line:max-line-length
    .subscribe((page: PageMesa) => {this.page = page; this.mesas = page.content; } , () => {this.errorMsgComponent.setError('Error ao listar mesas'); });
  }

  totalPages() {
    const pages = [];
    for( let i = 0; i < this.page.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  deletaMesa(id: number) {
      this.mesaService.deletaMesa(id)
    // tslint:disable-next-line:max-line-length
    .subscribe(() => {this.page.numberOfElements === 1 ? this.getListaMesas( this.page.number - 1, this.nome) : this.getListaMesas( this.page.number, this.nome) ; 
    this.errorMsgComponent.setError('Mesa apagada'); }, () => {this.errorMsgComponent.setError('Falha ao apagar mesa');});
  }


  existemMesas(): boolean {
    return this.mesas && this.mesas.length > 0;
  }

}
