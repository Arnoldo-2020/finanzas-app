import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finanzas-app';

  private translateService = inject(TranslateService);

  constructor(){
    this.translateService.setDefaultLang('es');

    this.translateService.use('es');
  }

  changeLanguage(lang: string) {
  this.translateService.use(lang);
  }

}
