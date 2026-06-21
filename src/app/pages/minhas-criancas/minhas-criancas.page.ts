import { Component, OnInit, Inject, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonIcon, IonFab, IonFabButton, AlertController } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, megaphoneOutline, pencil, trash } from 'ionicons/icons';
import { CriancaService } from '../../core/services/crianca.service';

@Component({
 selector: 'app-minhas-criancas',
 templateUrl: './minhas-criancas.page.html',
 styleUrls: ['./minhas-criancas.page.scss'],
 standalone: true,
 imports: [IonHeader,IonButton, IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonFab, IonFabButton, AsyncPipe, RouterLink]
})
export class MinhasCriancasPage {
 private criacaService = inject(CriancaService);
 private alertController = inject(AlertController);
 private router = inject(Router);
 criancas$ = this.criacaService.listar();

 constructor() {
  addIcons({megaphoneOutline,pencil,trash,add}); 
 }

 abrirCarteira(criancaId: string) {
  this.router.navigate(['/criancas', criancaId]);
 }

 async deletarCrianca(criancaId: string) {
  const alert = await this.alertController.create({
   header: 'Confirmar exclusão',
   message: 'Tem certeza que deseja deletar esta criança?',
   buttons: [
    { text: 'Cancelar', role: 'cancel' },
    {
     text: 'Deletar',
     role: 'destructive',
     handler: async () => {
      await this.criacaService.remover(criancaId);
      this.criancas$ = this.criacaService.listar();
     },
    },
   ],
  });
  await alert.present();
 }
}
