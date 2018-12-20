import { Component, OnInit, ViewChild } from '@angular/core';
import { Mesa } from 'src/app/interfaces/mesa';
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
  constructor(private mesaService: MesaService) { }

  ngOnInit() {
    this.getListaMesas();

  }

  getListaMesas() {
    this.mesaService.getListaMesas()
    .subscribe((mesas: Mesa[]) => {this.mesas = mesas; } , () => {this.errorMsgComponent.setError('Error ao listar mesas'); });
  }

  deletaMesa(id: number) {
      this.mesaService.deletaMesa(id)
    .subscribe(() => {this.getListaMesas(); }, () => {this.errorMsgComponent.setError('Falha ao apagar mesa');});
  }


  existemMesas(): boolean {
    return this.mesas && this.mesas.length > 0;
  }

}
