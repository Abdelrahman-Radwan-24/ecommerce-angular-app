import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateappService } from '../../core/services/translateapp.service';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss',
})
export class NavAuthComponent {
  private readonly _TranslateappService = inject(TranslateappService);
  readonly _TranslateService = inject(TranslateService);

  progress: number = 0;

  change(lang: string): void {
    this._TranslateappService.changeLang(lang);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.progress = (scrollTop / scrollHeight) * 100;
  }
}
