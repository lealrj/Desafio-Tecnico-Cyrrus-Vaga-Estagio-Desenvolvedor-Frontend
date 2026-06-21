import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { VacinaService } from './core/services/vacina.service';
import { CampanhaService } from './core/services/campanha.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private vacinaService = inject(VacinaService);
  private campanhaService = inject(CampanhaService);
  private router = inject(Router);

  ngOnInit() {
    this.vacinaService.semearCatalogoSeVazio();
    this.campanhaService.semearExemplosSeVazio();

    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(() => {
      (document.activeElement as HTMLElement)?.blur();
    });
  }
}