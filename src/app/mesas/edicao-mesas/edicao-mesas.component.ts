import { Component, ViewChild } from '@angular/core';
import { MesaService } from '../mesa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { Mesa } from 'src/app/interfaces/mesa';

@Component({
  selector: 'app-edicao-mesas',
  templateUrl: './edicao-mesas.component.html',
  styleUrls: ['./edicao-mesas.component.css']
})
export class EdicaoMesasComponent {

  public mesa: Mesa = <Mesa>{};
  id: number;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private mesaService: MesaService, private activatedRoute: ActivatedRoute, 
    private router: Router) {
      this.id = this.activatedRoute.snapshot.params.id;
      this.getMesa(this.activatedRoute.snapshot.params.id);
     }

  getMesa(id: number){
    this.mesaService.getMesa(id)
    .subscribe((mesa: Mesa) => {this.mesa = mesa; }, () => {this.errorMsgComponent.setError('Falha ao editar mesa');})
  }

  atualizaMesa(mesa: Mesa) {
    this.mesaService.atualizaMesa(mesa)
    .subscribe( () => {this.router.navigateByUrl('/mesas'); },
    () => {this.errorMsgComponent.setError('Falha ao atualizar mesa'); });
  }

}
