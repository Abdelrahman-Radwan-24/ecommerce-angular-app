import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LocalStorageHandler } from '../../core/Common/localStorageHandler';
import { IProducts } from '../../core/interfaces/iproducts';
import { CartService } from '../../core/services/cart.service';
import { ProductsService } from '../../core/services/products.service';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgStyle, CarouselModule, CurrencyPipe, TranslateModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  providers: [LocalStorageHandler],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ProductsService = inject(ProductsService);
  private readonly _LocalStorageHandler = inject(LocalStorageHandler);
  private readonly _WishlistService = inject(WishlistService);
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);

  detailsProduct: IProducts | null = null;

  paramId!: Subscription;
  product!: Subscription;
  removeItem!: Subscription;
  wishlistItem!: Subscription;
  addToCart!: Subscription;

  ngOnInit(): void {
    this.paramId = this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let idProduct = params.get('id');
        this.product = this._ProductsService
          .getSpecificProduct(idProduct)
          .subscribe({
            next: (res) => {
              if (res.status == 200) {
                this.detailsProduct = res.body.data;
                this.detailsProduct!.wished =
                  this._LocalStorageHandler.checkItem(
                    'wishList',
                    this.detailsProduct!.id
                  );
              }
            },
          });
      },
    });
  }

  getStarWidth(starIndex: number, rating: number): string {
    if (rating >= starIndex) {
      return '100%';
    } else if (rating < starIndex && rating > starIndex - 1) {
      return `${(rating - (starIndex - 1)) * 100}%`;
    }
    return '0%';
  }

  customOptionsDetails: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  removeWishlist(id: string): void {
    this.removeItem = this._WishlistService
      .RemoveProductFromWishlist(id)
      .subscribe({
        next: (res) => {
          if (res.status == 200) {
            this._ToastrService.success(
              'Product removed successfully from your wishlist'
            );
            this._WishlistService.countWishlist.set(res.body.data.length);
            this.detailsProduct!.id == id
              ? (this.detailsProduct!.wished = false)
              : '';
            this._LocalStorageHandler.removeItem('wishList', id);
          }
        },
      });
  }

  addWishlist(id: string): void {
    this.wishlistItem = this._WishlistService
      .addProductToWishlist(id)
      .subscribe({
        next: (res) => {
          if (res.status == 200) {
            this._ToastrService.success(
              'Product added successfully to your wishlist'
            );
            this._WishlistService.countWishlist.set(res.body.data.length);
            this.detailsProduct!.id == id
              ? (this.detailsProduct!.wished = true)
              : '';
            this._LocalStorageHandler.pushItem('wishList', id);
          }
        },
      });
  }

  addCart(id: string): void {
    this.addToCart = this._CartService.addProductToCart(id).subscribe({
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

  ngOnDestroy(): void {
    this.paramId?.unsubscribe();
    this.product?.unsubscribe();
    this.removeItem?.unsubscribe();
    this.wishlistItem?.unsubscribe();
    this.addToCart?.unsubscribe();
  }
}
