import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IBrands } from '../../core/interfaces/ibrands';
import { BrandsService } from '../../core/services/brands.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent implements OnInit, OnDestroy {
  private readonly _BrandsService = inject(BrandsService);

  allBrands: IBrands[] = [];
  brands!: Subscription;
  ngOnInit(): void {
    this.brands = this._BrandsService.getAllBrands().subscribe({
      next: (res) => {
        if (res.status == 200) {
          this.allBrands = res.body.data;
        }
      },
    });
  }

  imageModal: string = '';
  nameModal: string = '';
  slugModal: string = '';

  ngOnDestroy(): void {
    this.brands?.unsubscribe();
  }
}
