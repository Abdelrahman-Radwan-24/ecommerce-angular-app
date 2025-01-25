import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { ICart } from '../../core/interfaces/icart';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    SweetAlert2Module,
    RouterLink,
    TermtextPipe,
    TranslateModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);

  getCart: ICart = {} as ICart;

  productCart!: Subscription;
  removeItemToCart!: Subscription;
  updateItem!: Subscription;
  clearAll!: Subscription;

  get isCartEmpty(): boolean {
    return !this.getCart.products || this.getCart.products.length === 0;
  }

  ngOnInit(): void {
    this.productCart = this._CartService.getProductsCart().subscribe({
      next: (res) => {
        if (res.status == 200) {
          if (res.body.data.products.length) {
            this.getCart = res.body.data;
          }
        }
      },
    });
  }

  deleteItem(id: string): void {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'Do you really want to Remove the Product ? This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Yes, Remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeItem(id);
        Swal.fire('Removed!', 'Your Product has been Removed.', 'success');
      }
    });
  }

  removeItem(id: string): void {
    this.removeItemToCart = this._CartService
      .removeSpecificCartItem(id)
      .subscribe({
        next: (res) => {
          if (res.status == 200) {
            this.getCart = res.body.data;
            this._CartService.cartNumber.set(res.body.numOfCartItems);
          }
        },
      });
  }

  updateCart(id: string, count: number): void {
    if (count > 0) {
      this.updateItem = this._CartService
        .updateProductCart(id, count)
        .subscribe({
          next: (res) => {
            if (res.status == 200) {
              this._ToastrService.success('Product is updated successfully');
              this.getCart = res.body.data;
            }
          },
        });
    }
  }

  clearCart(): void {
    this.clearAll = this._CartService.clearUserCart().subscribe({
      next: (res) => {
        if (res.status == 200) {
          this.getCart = res;
          this._CartService.cartNumber.set(0);
        }
      },
    });
  }

  confirmClearCart(): void {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'Do you really want to clear the cart? This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Yes, clear it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clearCart();
        Swal.fire('Cleared!', 'Your cart has been cleared.', 'success');
      }
    });
  }

  ngOnDestroy(): void {
    this.productCart?.unsubscribe();
    this.removeItemToCart?.unsubscribe();
    this.updateItem?.unsubscribe();
    this.clearAll?.unsubscribe();
  }
}
