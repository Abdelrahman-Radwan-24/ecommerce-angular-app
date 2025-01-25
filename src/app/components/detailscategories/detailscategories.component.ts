import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ICategories } from '../../core/interfaces/icategories';
import { CategoriesService } from '../../core/services/categories.service';

@Component({
  selector: 'app-detailscategories',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './detailscategories.component.html',
  styleUrl: './detailscategories.component.scss',
})
export class DetailscategoriesComponent implements OnInit, OnDestroy {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _CategoriesService = inject(CategoriesService);

  detailsCategory: ICategories | null = null;

  details!: Subscription;
  detailsParams!: Subscription;

  ngOnInit(): void {
    this.detailsParams = this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let detailscat = params.get('id');
        this.details = this._CategoriesService
          .getSpecificCatrgory(detailscat)
          .subscribe({
            next: (res) => {
              if (res.status == 200) {
                this.detailsCategory = res.body.data;
              }
            },
          });
      },
    });
  }

  ngOnDestroy(): void {
    this.details?.unsubscribe();
    this.detailsParams?.unsubscribe();
  }
}
