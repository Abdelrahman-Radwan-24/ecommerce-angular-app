import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LocalStorageHandler } from '../../core/Common/localStorageHandler';
import { ILocalStorageData } from '../../core/interfaces/icommon';
import { IProducts } from '../../core/interfaces/iproducts';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { CartService } from '../../core/services/cart.service';
import { ProductsService } from '../../core/services/products.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { BannersComponent } from '../banners/banners.component';
import { PopularcategoriesComponent } from '../popularcategories/popularcategories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    CarouselModule,
    RouterLink,
    TermtextPipe,
    SearchPipe,
    FormsModule,
    TranslateModule,
    BannersComponent,
    PopularcategoriesComponent,
    CurrencyPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [LocalStorageHandler],
})
export class HomeComponent implements OnInit , OnDestroy {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);
  private readonly _WishlistService = inject(WishlistService);
  private readonly _localStorageHandler = inject(LocalStorageHandler);

  productsList: IProducts[] = [];
  search: string = '';
  getAllProductsSub!: Subscription;
  cart!: Subscription;
  wishlist!: Subscription;
  wishlistAdd!: Subscription;

  ngOnInit(): void {
    this.getAllProductsSub = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        if (res.status == 200) {
          this.productsList = res.body.data;
          this.initWishedProducts();
        }
      },
    });
  }

  initWishedProducts() {
    let currentWishList = (this._localStorageHandler.getItem(
      'wishList'
    ) as ILocalStorageData) ?? { localData: [] };

    if (currentWishList != null) {
      this.productsList.forEach((product) => {
        this._localStorageHandler.checkItem('wishList', product.id)
          ? (product.wished = true)
          : (product.wished = false);
      });
    }
  }

  getStarWidth(starIndex: number, rating: number): string {
    if (rating >= starIndex) {
      return '100%';
    } else if (rating < starIndex && rating > starIndex - 1) {
      return `${(rating - (starIndex - 1)) * 100}%`;
    }
    return '0%';
  }

  addCart(id: string): void {
    this.cart = this._CartService.addProductToCart(id).subscribe({
      next: (res) => {
        if (res.status == 200) {
          this._ToastrService.success(
            'Product is added successfully to your Cart'
          );
          this._CartService.cartNumber.set(res.body.numOfCartItems);
        }
      },
    });
  }

  removeWishlist(id: string): void {
    this.wishlist = this._WishlistService
      .RemoveProductFromWishlist(id)
      .subscribe({
        next: (res) => {
          if (res.status == 200) {
            this._ToastrService.success(
              'Product removed successfully from your wishlist'
            );
            this._WishlistService.countWishlist.set(res.body.data.length);
            this.productsList.find((product) => product.id == id)!.wished =
              false;
            this._localStorageHandler.removeItem('wishList', id);
          }
        },
      });
  }

  addWishlist(id: string): void {
    this.wishlistAdd = this._WishlistService
      .addProductToWishlist(id)
      .subscribe({
        next: (res) => {
          if (res.status == 200) {
            this._ToastrService.success(
              'Product added successfully to your wishlist'
            );
            this._WishlistService.countWishlist.set(res.body.data.length);
            this.productsList.find((product) => product.id == id)!.wished =
              true;
            this._localStorageHandler.pushItem('wishList', id);
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.getAllProductsSub?.unsubscribe();
    this.cart?.unsubscribe();
    this.wishlist?.unsubscribe();
    this.wishlistAdd?.unsubscribe();
  }
}
