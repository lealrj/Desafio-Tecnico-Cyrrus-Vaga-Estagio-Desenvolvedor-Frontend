import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCriancaPage } from './editar-crianca.page';

describe('EditarCriancaPage', () => {
  let component: EditarCriancaPage;
  let fixture: ComponentFixture<EditarCriancaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCriancaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
