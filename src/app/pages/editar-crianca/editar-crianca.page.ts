import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { CriancaService } from '../../core/services/crianca.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-editar-crianca',
  templateUrl: './editar-crianca.page.html',
  styleUrls: ['./editar-crianca.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, CommonModule]
})
export class EditarCriancaPage implements OnInit {
  private criancaService = inject(CriancaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  private criancaId = this.route.snapshot.paramMap.get('id')!;

  formulario = this.fb.group({
    nome: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    sexo: ['', Validators.required]
  });

  async ngOnInit() {
    const crianca = await firstValueFrom(this.criancaService.buscarPorId(this.criancaId));
    this.formulario.patchValue({
      nome: crianca.nome,
      dataNascimento: crianca.dataNascimento,
      sexo: crianca.sexo
    });
  }

  async salvar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    const dados = this.formulario.getRawValue();
    await this.criancaService.atualizar(this.criancaId, dados as any);
    this.router.navigateByUrl('/');
  }
}
