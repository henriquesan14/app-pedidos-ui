import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mesa } from 'src/app/interfaces/mesa';

@Component({
  selector: 'app-form-mesa',
  templateUrl: './form-mesa.component.html',
  styleUrls: ['./form-mesa.component.css']
})
export class FormMesaComponent implements OnInit {

  title: string;
  @Input() mesa: Mesa = <Mesa>{};
  @Input() id: number;
  @Output() outputMesa: EventEmitter<Mesa> = new EventEmitter();

  onSubmit() {
    this.outputMesa.emit(this.mesa);
  }

  ngOnInit() {
    if (this.id === undefined){
      this.title = 'Nova Mesa';
    } else {
      this.title = 'Editar Mesa';
    }
  }

}
