import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMesasComponent } from './cadastro-mesas.component';

describe('CadastroMesasComponent', () => {
  let component: CadastroMesasComponent;
  let fixture: ComponentFixture<CadastroMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
