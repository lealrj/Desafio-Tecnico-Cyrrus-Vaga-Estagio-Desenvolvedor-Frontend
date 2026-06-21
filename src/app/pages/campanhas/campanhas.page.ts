import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge } from '@ionic/angular/standalone';
import { CampanhaService } from '../../core/services/campanha.service';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.page.html',
  styleUrls: ['./campanhas.page.scss'],
  imports: [AsyncPipe, DatePipe, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge],
})
export class CampanhasPage {
  private campanhaService = inject(CampanhaService);
  campanhas$ = this.campanhaService.listar();
}