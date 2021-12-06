import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTipoClienteComponent } from './listagem-tipo-cliente.component';

describe('ListagemTipoClienteComponent', () => {
  let component: ListagemTipoClienteComponent;
  let fixture: ComponentFixture<ListagemTipoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemTipoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemTipoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
