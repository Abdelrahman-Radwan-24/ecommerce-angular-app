import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LocalStorageHandler } from '../../core/Common/localStorageHandler';
import { IWishlist } from '../../core/interfaces/iwishlist';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [TermtextPipe, TranslateModule, RouterLink, CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
  providers: [LocalStorageHandler],
})
export class WishlistComponent implements OnInit, OnDestroy {
  private readonly _WishlistService = inject(WishlistService);
  private readonly _LocalStorageHandler = inject(LocalStorageHandler);
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);

  getProductWish: IWishlist[] = [];

  getWishlist!: Subscription;
  removeWishlist!: Subscription;
  addToCart!: Subscription;

  ngOnInit(): void {
    this.getWishlist = this._WishlistService.getLoggedUserWishlist().subscribe({
      next: (res) => {
        if (res.status == 200) {
          this.getProductWish = res.body.data;
        }
      },
    });
  }

  removeItem(id: string): void {
    this.removeWishlist = this._WishlistService
      .RemoveProductFromWishlist(id)
      .subscribe({
        next: (res) => {
          if (res.status == 200) {
            this.getProductWish = this.getProductWish.filter(
              (item) => item.id !== id
            );
            this._WishlistService.countWishlist.set(res.body.data.length);
            this._LocalStorageHandler.removeItem('wishList', id);
            this._ToastrService.success(
              'Product removed successfully from your wishlist'
            );
          }
        },
      });
  }

  addCart(id: string): void {
    this.addToCart = this._CartService.addProductToCart(id).subscribe({
      next: (res) => {
        if (res.status == 200) {
          this._CartService.cartNumber.set(res.body.numOfCartItems);
          this._ToastrService.success(
            'Product is added successfully to your Cart'
          );
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.getWishlist?.unsubscribe();
    this.removeWishlist?.unsubscribe();
    this.addToCart?.unsubscribe();
  }
}
