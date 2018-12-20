import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {


  title: string;
  @Input() produto: Produto = <Produto>{};
  @Input() id: number;
  @Output() outputProduto: EventEmitter<Produto> = new EventEmitter();

  onSubmit() {
    this.outputProduto.emit(this.produto);
  }

  ngOnInit() {
    if (this.id === undefined){
      this.title = 'Novo Produto';
    } else {
      this.title = 'Editar Produto';
    }
  }

}
