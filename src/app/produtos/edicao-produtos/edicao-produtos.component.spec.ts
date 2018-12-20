import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProdutosComponent } from './edicao-produtos.component';

describe('EdicaoProdutosComponent', () => {
  let component: EdicaoProdutosComponent;
  let fixture: ComponentFixture<EdicaoProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
