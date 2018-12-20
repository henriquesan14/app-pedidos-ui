import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPedidosComponent } from './edicao-pedidos.component';

describe('EdicaoPedidosComponent', () => {
  let component: EdicaoPedidosComponent;
  let fixture: ComponentFixture<EdicaoPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
