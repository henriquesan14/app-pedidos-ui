import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMesasComponent } from './listagem-mesas.component';

describe('ListagemMesasComponent', () => {
  let component: ListagemMesasComponent;
  let fixture: ComponentFixture<ListagemMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
