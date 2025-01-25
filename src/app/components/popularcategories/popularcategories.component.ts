import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { ICategories } from '../../core/interfaces/icategories';
import { CategoriesService } from '../../core/services/categories.service';

@Component({
  selector: 'app-popularcategories',
  standalone: true,
  imports: [CarouselModule, RouterLink, TranslateModule],
  templateUrl: './popularcategories.component.html',
  styleUrl: './popularcategories.component.scss',
})
export class PopularcategoriesComponent implements OnInit, OnDestroy {
  private readonly _CategoriesService = inject(CategoriesService);
  categoriesList: ICategories[] = [];
  catrgories!: Subscription;
  ngOnInit(): void {
    this.catrgories = this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        if (res.status == 200) {
          this.categoriesList = res.body.data;
        }
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    rtl: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };

  ngOnDestroy(): void {
    this.catrgories?.unsubscribe();
  }
}
