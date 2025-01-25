import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ICategories } from '../../core/interfaces/icategories';
import { CategoriesService } from '../../core/services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private readonly _CategoriesService = inject(CategoriesService);

  getAllCategories: ICategories[] = [];
  categories!: Subscription;
  ngOnInit(): void {
    this.categories = this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        if (res.status == 200) {
          this.getAllCategories = res.body.data;
        }
      },
    });
  }

  imageModal: string = '';
  nameModal: string = '';
  slugModal: string = '';

  ngOnDestroy(): void {
    this.categories?.unsubscribe();
  }
}
