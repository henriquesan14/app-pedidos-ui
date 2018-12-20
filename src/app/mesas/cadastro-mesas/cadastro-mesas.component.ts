import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesaService } from '../mesa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-mesas',
  templateUrl: './cadastro-mesas.component.html',
  styleUrls: ['./cadastro-mesas.component.css']
})
export class CadastroMesasComponent {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private mesaService: MesaService, private router: Router) { }

  addMesa(mesa: Mesa){
    this.mesaService.addMesa(mesa)
    .subscribe(() => {this.router.navigateByUrl('/mesas'); }, () => {this.errorMsgComponent.setError('Error ao adicionar mesa');});
  }


}
