import { Component, Input } from '@angular/core';
import { StatusVacina } from '../../../core/models/registro-vacinacao.model';

@Component({
  selector: 'app-status-vacina-badge',
  templateUrl: './status-vacina-badge.component.html',
  styleUrls: ['./status-vacina-badge.component.scss'],
})
export class StatusVacinaBadgeComponent {
  @Input({ required: true }) status!: StatusVacina;

  get cor(): string {
    switch (this.status) {
      case 'aplicada': return 'primary';
      case 'atrasada': return 'tertiary';
      default: return 'secondary';
    }
  }

  get texto(): string {
    switch (this.status) {
      case 'aplicada': return 'Aplicada';
      case 'atrasada': return 'Atrasada';
      default: return 'Pendente';
    }
  }
}