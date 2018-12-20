import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoMesasComponent } from './edicao-mesas.component';

describe('EdicaoMesasComponent', () => {
  let component: EdicaoMesasComponent;
  let fixture: ComponentFixture<EdicaoMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
