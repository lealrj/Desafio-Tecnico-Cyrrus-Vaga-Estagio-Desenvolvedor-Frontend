import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CriancaService } from '../../core/services/crianca.service';
import { VacinaService } from '../../core/services/vacina.service';
import { RegistroVacinacaoService } from '../../core/services/registro-vacinacao.service';
import { StatusVacinaBadgeComponent } from '../../shared/components/status-vacina-badge/status-vacina-badge.component';


@Component({
 selector: 'app-carteira-vacinacao',
 templateUrl: './carteira-vacinacao.page.html',
 styleUrls: ['./carteira-vacinacao.page.scss'],
 standalone: true,
 imports: [AsyncPipe, DatePipe, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonList, IonItem, IonLabel, IonButton, StatusVacinaBadgeComponent]
})
export class CarteiraVacinacaoPage {
 private route = inject(ActivatedRoute);
 private criancaService = inject(CriancaService);
 private vacinaService = inject(VacinaService);
 private registroService = inject(RegistroVacinacaoService);
 private alertController = inject(AlertController);

 private criancaId = this.route.snapshot.paramMap.get('id')!;

 crianca$ = this.criancaService.buscarPorId(this.criancaId);
 linhas$ = combineLatest([
  this.registroService.listarPorCrianca(this.criancaId),
  this.vacinaService.listar(),
 ]).pipe(
  map(([registros, vacinas]) => registros
   .map(registro => {
    const vacina = vacinas.find(v => v.id === registro.vacinaId);
    const toleranciaDias = (vacina?.prazoToleranciaMeses ?? 1) * 30;
    return { registro, vacina, status: registro.calcularStatus(toleranciaDias) };
   })
   .sort((a, b) => a.registro.dataPrevista.localeCompare(b.registro.dataPrevista))
  )
 );

 async marcarComoAplicada(registroId: string) {
  const hoje = new Date().toISOString().split('T')[0];
  const alert = await this.alertController.create({
   header: 'Marcar como aplicada',
   inputs: [
    { name: 'dataAplicacao', type: 'date', value: hoje },
   ],
   buttons: [
    { text: 'Cancelar', role: 'cancel' },
    {
     text: 'Confirmar',
     handler: (dados) => {
      this.registroService.marcarComoAplicada(registroId, dados.dataAplicacao);
     },
    },
   ],
  });
  await alert.present();
 }
}
