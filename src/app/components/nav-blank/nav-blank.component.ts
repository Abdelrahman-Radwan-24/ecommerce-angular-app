import {
  Component,
  computed,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  Signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IUserinfo } from '../../core/interfaces/iuserinfo';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { TranslateappService } from '../../core/services/translateapp.service';
import { WishlistService } from '../../core/services/wishlist.service';
@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent implements OnInit, OnDestroy {
  readonly _AuthService = inject(AuthService);
  private readonly _TranslateappService = inject(TranslateappService);
  readonly _TranslateService = inject(TranslateService);
  private readonly _WishlistService = inject(WishlistService);
  private readonly _CartService = inject(CartService);

  countNumber: Signal<number> = computed(() => this._CartService.cartNumber());
  wishlistCount: Signal<number[]> = computed(() =>
    this._WishlistService.countWishlist()
  );

  dataUser: IUserinfo | null = null;
  progress: number = 0;
  product!: Subscription;
  wishlist!: Subscription;

  change(lang: string): void {
    this._TranslateappService.changeLang(lang);
  }

  ngOnInit(): void {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString !== null) {
      const userInfo: IUserinfo = JSON.parse(userInfoString);
      this.dataUser = userInfo;
    }

    this.product = this._CartService.getProductsCart().subscribe({
      next: (res) => {
        this._CartService.cartNumber.set(res.body.numOfCartItems);
      },
    });

    this.wishlist = this._WishlistService.getLoggedUserWishlist().subscribe({
      next: (res) => {
        this._WishlistService.countWishlist.set(res.body.data.length);
      },
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.progress = (scrollTop / scrollHeight) * 100;
  }

  onDropdownClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }

  ngOnDestroy(): void {
    this.product?.unsubscribe();
    this.wishlist?.unsubscribe();
  }
}
