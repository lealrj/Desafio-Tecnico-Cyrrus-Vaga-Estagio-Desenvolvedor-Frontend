import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhasCriancasPage } from './minhas-criancas.page';

describe('MinhasCriancasPage', () => {
  let component: MinhasCriancasPage;
  let fixture: ComponentFixture<MinhasCriancasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasCriancasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
