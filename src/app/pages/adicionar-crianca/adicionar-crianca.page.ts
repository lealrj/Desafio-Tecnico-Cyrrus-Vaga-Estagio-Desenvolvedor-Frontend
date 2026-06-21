import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone'; import { Router } from '@angular/router';
import { CriancaService } from '../../core/services/crianca.service';
import { VacinaService } from '../../core/services/vacina.service';
import { RegistroVacinacaoService } from '../../core/services/registro-vacinacao.service';
import { Crianca } from '../../core/models/crianca.model';
import { firstValueFrom } from 'rxjs';

@Component({
 selector: 'app-adicionar-crianca',
 templateUrl: './adicionar-crianca.page.html',
 styleUrls: ['./adicionar-crianca.page.scss'],
 standalone: true,
 imports: [ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton]
})
export class AdicionarCriancaPage {
 private criancaService = inject(CriancaService);
 private vacinaService = inject(VacinaService);
 private registroService = inject(RegistroVacinacaoService);
 private router = inject(Router);
 private fb = inject(FormBuilder);

 formulario = this.fb.group({
  nome: ['', Validators.required],
  dataNascimento: ['', Validators.required],
  sexo: ['', Validators.required]
 });

 async salvar() {
  if (this.formulario.invalid) {
   this.formulario.markAllAsTouched();
   return;
  }
  const dados = this.formulario.getRawValue();
  const id = await this.criancaService.adicionar(dados as any);
  const catalogo = await firstValueFrom(this.vacinaService.listar());
  const crianca = new Crianca({ id, ...dados } as any);
  await this.registroService.gerarCalendarioParaCrianca(crianca, catalogo);
  this.router.navigateByUrl('/');
 }
}
