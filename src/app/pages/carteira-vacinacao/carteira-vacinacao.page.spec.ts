import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteiraVacinacaoPage } from './carteira-vacinacao.page';

describe('CarteiraVacinacaoPage', () => {
  let component: CarteiraVacinacaoPage;
  let fixture: ComponentFixture<CarteiraVacinacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraVacinacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
